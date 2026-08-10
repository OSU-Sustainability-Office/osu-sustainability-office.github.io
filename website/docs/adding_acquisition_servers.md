---
title: Adding Meters from New Acquisition Servers
description: Onboarding meters from a newly installed or replaced Acquisuite data acquisition server
---

# Adding Meters from New Acquisition Servers

:::info

- **Recurring Task**: Needed when Facilities installs a new Acquisuite, or replaces the meters attached to an existing one
- **Frequency**: Rare, roughly once a year or less

:::

This page covers getting data _flowing_ from a new Acquisuite. Once data is landing in the database, see [Adding Meters / Buildings](adding_meters_buildings) for the rest of the dashboard wiring.

:::note
Configuring the Acquisuite itself (network setup, pointing it at our API) is handled by Facilities or the installer, not by us. This page starts from the point where the device is already uploading.
:::

## How Acquisuite Data Reaches the Dashboard

1. The Acquisuite POSTs a gzipped CSV log to `https://api.sustainability.oregonstate.edu/v2/energy/meter`, authenticating with a shared password (`ACQUISUITE_PASS`)
2. The request is handled by [`post()` in `backend/app/meter.js`](https://github.com/OSU-Sustainability-Office/energy-dashboard/blob/master/backend/app/meter.js), which identifies the meter by the address `<SERIALNUMBER>_<MODBUSDEVICE>`
   - **If no meter with that address exists, one is created automatically** in the `meters` table, using the name and device class the Acquisuite reported
3. The device class is looked up in [`meter_classes.js`](https://github.com/OSU-Sustainability-Office/energy-dashboard/blob/master/backend/dependencies/nodejs/meter_classes.js) to figure out which CSV column holds which reading
4. Readings are written to the `data` table. Only rows landing on a quarter hour (`:00`, `:15`, `:30`, `:45`) are kept

Steps 1, 2, and 4 need nothing from us. **Step 3 is the only place a new acquisition server can get stuck**, and it is where all the work below happens.

## Step 1: Check Whether the Meter Class Is Already Known

`meter_classes.js` is keyed by the `MODBUSDEVICECLASS` value the Acquisuite reports for each attached device. Common meter models are already listed there, so a new device often works with no code change at all.

Find the new meters in the database:

```sql
SELECT * FROM meters WHERE address LIKE '001EC60565DF%';
```

Substitute the Acquisuite's serial number. Then check whether readings are actually arriving for one of them:

```sql
SELECT * FROM data WHERE meter_id = <id from above> ORDER BY time_seconds DESC LIMIT 10;
```

- **Rows in `data`** — the class was already known and everything worked. Skip to [Step 3](#step-3-wire-the-meters-into-the-dashboard)
- **A row in `meters`, but `data` is empty** — the class is new and unmapped. Continue to Step 2

:::caution
This is the failure fingerprint to watch for. The meter row still gets created with a correct-looking name and class number, so at a glance nothing seems wrong. The class lookup fails on the _next_ upload, and the API just returns `FAILURE` with no detail. You can confirm in the `MeterPost` log group in [Cloudwatch](cloudwatch).
:::

## Step 2: Add the New Meter Class

### Get a log export

Download the device's CSV log from the Leviton/Obvius BMO portal, which the Acquisuites upload to alongside our API. This gives you the same column layout our endpoint receives.

### Map the columns

Add an entry to `meter_classes.js` keyed by the reported `MODBUSDEVICECLASS`, mapping **column index → point name**:

```js
  8955: {
    // Dixon Rec Center replacement electric meters (Acquisuite 001EC60565DF).
    4: 'accumulated_real',
    22: 'real_power',
    // ...
  },
```

- Compare the export column-by-column against an existing class for a similar model. New meters are frequently register-compatible with a device we already support, which makes the mapping a verification exercise rather than a guess
- The energy type shown on the dashboard is **inferred from which points you map**, not set explicitly — `total` makes it Steam, `cubic_feet` makes it Gas, `accumulated_real` makes it Electricity
- **Leave a register unmapped if its values do not look plausible.** An unmapped point simply does not appear on the dashboard, which is much better than charting garbage. Leave a comment explaining why, so the next person does not "fix" it

### Deploy

`meter_classes.js` lives in `backend/dependencies/`, which is published as the `EnergyModelLayer` Lambda layer. **Merging to `master` redeploys it automatically** via the SAM deployment GitHub Action — there is no separate layer bump to do.

Once deployed, wait for the next upload and re-run the `data` query from Step 1 to confirm readings are landing.

## Step 3: Wire the Meters into the Dashboard

New meters exist in the `meters` table but are not attached to any building yet. Follow [Adding Meters / Buildings](adding_meters_buildings) to set up `meter_groups`, `meter_group_relation`, and `buildings`.

### If these meters replace existing ones

Do **not** delete the old meter — that would throw away its history. Instead, move it out of the building's default meter group and into a new, non-default group of its own:

- Delete the old meter's row from `meter_group_relation` for the building's default group
- Create a new `meter_groups` entry named something like `Dixon Electricity (Retired)`, with `default` set to `0`
- Add a `meter_group_relation` row linking the old meter to that new group

The historical data stays viewable, but it no longer mixes into the building's main graph alongside the replacement meters.

## Step 4: Verify

- Confirm the new graphs render on the [dashboard](https://dashboard.sustainability.oregonstate.edu)
- Check that a full day of data has accumulated with no gaps
- Add the retired meter to `blacklist.json` in the [check-acq automated job](https://github.com/OSU-Sustainability-Office/automated-jobs/tree/main/check-acq), so it does not generate outage alert emails forever

## Reference: Dixon Rec Center (2026)

Both cases showed up in the same install, which makes it a useful example:

- **Steam meter** — reported class `4444` (Red Lion PAXCDC), already in `meter_classes.js`. Created itself and started reporting with no code change
- **Electric meters** — reported class `8955`, which was unmapped. Two meter rows appeared with nothing in `data` until the class was added. Its register layout turned out to be identical to class `48` (Veris E51C2), verified column-by-column against the BMO exports
  - One register was left deliberately unmapped: it reported a stuck value while the other two phases read single digits, meaning it was misconfigured on the device profile
- The meters they replaced were moved into a `Dixon Electricity (Retired)` meter group rather than deleted
