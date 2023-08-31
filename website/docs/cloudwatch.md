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
  - Logs > Log groups > `/ecs/collect-check-acq` and `/ecs/collect-sec-data`
  - Alarms > All alarms > `TimeoutError` and `3Or4DaysOutage`
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

  - Check the [`.env`](https://drive.google.com/file/d/12dCdA5E5e6qPgkSYehqOcX_zVy9YztFF/view?usp=sharing) file (must be OSU employee to see) for automated-jobs to reference where to log in for solar panel data. Clicking on one of the building names on the Plants page after you log in will bring up a table with daily and monthly data, including historical data
  - Most of the fields should be pretty self explanatory to insert into the Solar_Meters table in MySQL workbench, but for the time_seconds value, reference the playcode below for how to get the Unix timestamp

- Review the [database](database) document for general instructions / tips for how to insert or update etc. data to the Solar_Meters table

- It can be useful to sort by `time_seconds` (just click the `time_seconds` column after running `SELECT * from Solar_Meters`) to keep track of the data entries in order, especially if you had to at some point retroactively insert missing data into the database
- Refer to [Database](database) document for more detailed instrutions on how to insert or update any missing data
- Rest should be pretty self-explanatory. Remember that the `energy_change` value of `OSU_Operations_Total` = `energy_change` of `OSU Operations` + `energy_change` of `OSU Operations Lube Shop` in the portal website linked in the [`.env`](https://drive.google.com/file/d/12dCdA5E5e6qPgkSYehqOcX_zVy9YztFF/view?usp=sharing) file
