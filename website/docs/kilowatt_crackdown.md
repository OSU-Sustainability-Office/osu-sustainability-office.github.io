---
title: Kilowatt Crackdown
description: Overview of tasks to do for Kilowatt Crackdown
---

:::info

- **Recurring Task**: You have to create a kilowatt campaign (with coordination from Lety as noted below), debug any errors that may appear
- **Frequency**: Once a year

:::

## Overview

- Add item to `campaigns` table as per notice from Lety on what residential buildings will particpate in Kilowatt Crackdown this year. Pay attention to:
  - `date_start` and `date_end`. These denote when the Kilwatt Crackdown will take place. Ensure the meter data between these dates is valid
  - `compare_start` and `compare_end`. These define a time period that the Kilowatt Campaign is compared to in order to calculate changes in energy efficiency for residential halls. Again, ensure the meter data here is valid before proceeding
    - Ask Lety for the comparison dates, she will have an idea
    - If meter data is missing for either time period, inform Lety ASAP and try to find workarounds
    - In a pinch, the dashboard has been adjusted to handle manual meter uploads for halls without automated meter data uploads. See 2022 campaign and Weatherford Hall
- Add items to `campaign_groups`. the `groups` value denotes the `meter group` value for the building you want. In some cases (as seen in `meter_group_relation`), there are several meter groups for a given building. In such cases, test the campaign graph locally (see below), and if multiple are valid, then just pick one

## Testing

- Any campaign with a name starting with "test" will not be shown on the production version of the energy dashboard, only on local
- This will ensure ease in testing if certain meter groups are valid for the desired time period, without breaking the production version
- Test Kilowatt Crackdown graph both locally and by going to Inspect Element > Network > check API request (e.g. `data?id=<buildingID>&startDate=<StartDate>...`) and see what is in the payload. Empty payloads or error codes in the request (e.g. 404) indicate missing data and the meter group should not be used
