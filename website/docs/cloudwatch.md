---
title: Cloudwatch / Upload Missing Data
description: Overview of Cloudwatch and SNS Email Alerts
---

:::info

- **Recurring Task**: You may get occasional emails about a "TimeoutError" after following the steps below, which indicates that a Solar Meter has failed to upload
  - In that case, see [below](./cloudwatch#sql-debugging--upload-missing-data) for what to do in case you get a "TimeoutError" email
- **Frequency**: Not sure, the scraper seems pretty reliable now with latest updates. Previously, once every 2 weeks ish

:::

- Important on left sidebar of AWS Cloudwatch:
  - Logs > Log groups
  - Alarms > All alarms
- The amount of time it takes for an alarm to go from "In alarm" to "Insufficient data" is defined by what you have set the "period" of the alarm as. In general, it takes 3 periods for the alarm state to reset
  - This is important because if you set the "period" too high, the alarm will never reset itself and will stay in the alarmed state permanently
  - Since the two jobs tracked by Cloudwatch (solar meter uploads vs regular meter uploads) are only run every 24 and 48 hours respectively, it is usually safe to leave the alarm period as 1 hour

## Simple Notification Service (SNS)

- Topics > Click Number Hyperlink > email-forwarder
  - Add your email (OSU student or student worker email) to the list to get emailed
  - Brandon and Lety (managers) do NOT want to be emailed about this (asked), so leave their names off. You can email Lety directly if a new meter has an outage
- You will get emails for:
  - Solar Webscraper (SEC). Alert emails are labeled `TimeoutError` Job runs daily, you will only get an email if there is an upload error / timeout
  - Meter Outage Checker (check-acq). Alert emails are labeled `3Or4DaysOutage`. Job runs every 2 days, you will only get an email if there if a new meter has been down for 3 or 4 days (to prevent email spam for meters that are constantly down)
  - See below for what to do in case you get emails about the two things baove
- You can set up a custom email rule in Outlook via `right click email` > `rules` > `create a new rule`, to avoid cluttering your inbox

## SQL Debugging / Upload Missing Data

- If you get a missed meter upload notification (TimeoutError) email or otherwise notice some missing or incorrect data for the Solar Panel buildings ([SEC Solar](https://dashboard.sustainability.oregonstate.edu/#/building/30/2) and [OSU Operations](https://dashboard.sustainability.oregonstate.edu/#/building/42/2)), then insert the missing data via MySQL workbench

  - Check the `.env` file in the automated-jobs repo to reference where to log in for solar panel data. Clicking on one of the building names on the Plants page after you log in will bring up a table with daily and monthly data, including historical data
  - Most of the fields should be pretty self explanatory to insert into the Solar_Meters table in MySQL workbench, but for the time_seconds value, reference the playcode below for how to get the Unix timestamp

- INSERT (for missing data) and UPDATE (for fixing incorrect data etc) will be the most useful here as far as SQL commands
- Use basic precautions, make sure you have highlighted only the lines of SQL you want to run before running it (clicking the yellow lightning symbol in MySQL workbench)
- By default, MySQL workbench will forbid you from inserting, updating, or deleting multiple data entries without specifying an index range, so this should help prevent careless errors, but still, be careful!
  - We don't have a dev database, so any changes in MySQL workbench hit production right away, so to speak. It can also be a good idea to back up data (e.g. as an Excel table, or at least taking some screenshots of what the database looked like) before performing any operation that could affect a lot of data entries
- It can be useful to sort by time_seconds (just click the column after running `SELECT * from Solar_Meters`) to keep track of the data entries in order, especially if you had to at some point retroactively insert missing data into the database

### Unix Timestamps

- Useful reference / converter: https://www.unixtimestamp.com/index.php
  - We are using millisecond precision for the webscrapers, to keep in mind for the Unix timestamps, your time_seconds values should have 10 digits
- Useful sandbox - [https://playcode.io/1457582](https://playcode.io/1457582)

```js
const date = new Date('May 27, 2023 23:59:59 GMT+0');

// Calculate the Unix time in seconds
const unixTimeSeconds = Math.round(date.getTime() / 1000);

console.log(unixTimeSeconds);
```

### SQL Command Examples

**These are example commands below, please substitute the correct values as needed!**

Again, refer to the [Unix Timestamps section above](webscraper_tutorial#unix-timestamps) for `time_seconds` value.

Rest should be pretty self-explanatory. Remember that the `energy_change` value of `OSU_Operations_Total` = "OSU Operations" + "OSU Operations Lube Shop" in the portal website linked in the `.env` file

For inserting missing data:

`select * from Solar_Meters;`

`` INSERT INTO Solar_Meters (`time`, `time_seconds`, `energy_change`, `tableid`) VALUES ('2023-7-02T23:59:59', 1688342399, 233.74, 'SEC_Solar'); ``

`` INSERT INTO Solar_Meters (`time`, `time_seconds`, `energy_change`, `tableid`) VALUES ('2023-7-02T23:59:59', 1688342399, 2424.89, 'OSU_Operations_Total'); ``

If you just need to update a value (example):

```
UPDATE Solar_Meters
SET time = '2023-7-2T23:59:59'
WHERE id IN (737, 738);
```
