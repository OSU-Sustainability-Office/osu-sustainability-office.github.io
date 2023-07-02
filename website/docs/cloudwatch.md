---
title: Cloudwatch
description: AWS Cloudwatch logs and alerts (including AWS SNS email alerts)
---

## Cloudwatch

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
- You will get emailed for regular Acquisuite uploads (once every 2 days, "MeterOutages") as well as Solar uploads (one every day, "TimeoutError")
  - See [this page](./webscraper_tutorial#sql-debugging--upload-missing-data) for what to do in case you get a "TimeoutError" email
- You can probably set up custom email rules if you want to put all emails about this into a certain folder to avoid cluttering your email inbox
