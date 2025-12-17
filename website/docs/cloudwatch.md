---
title: Cloudwatch / Upload Missing Data
description: Overview of Cloudwatch and SNS Email Alerts
---

:::info

- **Recurring Task**: You may get occasional emails about a "TimeoutError" after following the steps below, which indicates that a Solar Meter has failed to upload
  - In that case, see [below](./cloudwatch#sql-debugging--upload-missing-data) for what to do in case you get a "TimeoutError" email
- **Frequency**: Not sure, the scraper seems pretty reliable now with latest updates. Previously, once every 2 weeks ish

:::

## Metric Filter

- Go to Cloudwatch > Log Groups > Log Group you want to add Metric Filter for > Metric Filters > Create New Metric Filter
  - Follow existing filters here as an example if in doubt

## Alarm

- Cloudwatch > Alarms > Create a New Alarm
  - Follow existing alarms here as an example if in doubt
  - NOTE: When creating a new alarm, the metric filter will only be detected if the filter was applied to "new data" (so to speak) since the filter was created
    - The CRON jobs are set up in AWS ECS are set to 24 or 48 hour intervals by default, so you may want to temporarily set the Scheduled Task in ECS to be 5 minutes to speed up development
    - See [this page for more info on ECS Scheduled Tasks](automated_jobs_tutorial#clusters)
    - Remember to set the Scheduled Task back to original time interval once you've set the alarm up and verified it works
    - Note that the Scheduled Task's "cycle" is based on when you last updated it. If you last updated the Scheduled Task to run every 24 hours at 2 AM, it will run at 2 AM every day. So, it may better to set the alarm during the daytime so you don't get emailed at weird times
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
  - See below for what to do in case you get emails about the two things above
- You can set up a custom email rule in Outlook via `right click email` > `rules` > `create a new rule`, to avoid cluttering your inbox

## SQL Debugging / Upload Missing Data

- If you get a missed meter upload notification (TimeoutError) email or otherwise notice some missing or incorrect data for the Solar Panel buildings ([SEC Solar](https://dashboard.sustainability.oregonstate.edu/#/building/30/2) and [OSU Operations](https://dashboard.sustainability.oregonstate.edu/#/building/42/2)), then insert the missing data via MySQL workbench

  - Check the [`.env`](https://drive.google.com/file/d/12dCdA5E5e6qPgkSYehqOcX_zVy9YztFF/view?usp=sharing) file (must be OSU employee to see) for automated-jobs to reference where to log in for solar panel data. Clicking on one of the building names on the Plants page after you log in will bring up a table with daily and monthly data, including historical data
  - Most of the fields should be pretty self explanatory to insert into the Solar_Meters table in MySQL workbench, but for the time_seconds value, reference the playcode below for how to get the Unix timestamp

- Review the [database](database) document for general instructions / tips for how to insert or update etc. data to the Solar_Meters table

- It can be useful to sort by `time_seconds` (just click the `time_seconds` column after running `SELECT * from Solar_Meters`) to keep track of the data entries in order, especially if you had to at some point retroactively insert missing data into the database
- Refer to [Database](database) document for more detailed instrutions on how to insert or update any missing data
- Rest should be pretty self-explanatory. Remember that the `energy_change` value of `OSU_Operations_Total` = `energy_change` of `OSU Operations` + `energy_change` of `OSU Operations Lube Shop` in the portal website linked in the [`.env`](https://drive.google.com/file/d/12dCdA5E5e6qPgkSYehqOcX_zVy9YztFF/view?usp=sharing) file
