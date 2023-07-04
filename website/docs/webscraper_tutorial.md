---
title: Webscraper Tutorial
description: Guide on adding webscrapers to Energy Dashboard
---

# Webscraper Tutorial

## General Info

[https://github.com/OSU-Sustainability-Office/automated-jobs](https://github.com/OSU-Sustainability-Office/automated-jobs)

[https://login.oregonstate.edu/apps/aws/](https://login.oregonstate.edu/apps/aws/)

[https://pptr.dev/](https://pptr.dev/)

## Automated-Jobs Dev Setup

- [Go here for the .env file](https://drive.google.com/file/d/12dCdA5E5e6qPgkSYehqOcX_zVy9YztFF/view?usp=sharing) - put inside the `automated-jobs/SEC` directory
  - Need to be a paid OSU Sustainability Office Employee to see this above link
- .env needs `DASHBOARD_API = https://api.sustainability.oregonstate.edu/v2/energy` unless you are making changes to energy dashboard (more on this in Testing Pipeline section)

In general, from the directory of any given tool (`SEC`, `check-acq`, etc. Note that `SunnyWebBox` and `Tesla Solar City` are deprecated and no longer used)

- `npm i`
- `node <Javascript file name>`, e.g. `node readsec.js`
  - Need NodeJS v16

## AWS ECR (Elastic Container Registry)

[https://us-west-2.console.aws.amazon.com/ecr/repositories?region=us-west-2](https://us-west-2.console.aws.amazon.com/ecr/repositories?region=us-west-2)

![alt_text](../static/img/webscraper1.png 'image_tooltip')

- create repository
  - Just follow default options
- View push commands
  - Start in “automated jobs/SEC” directory
  - Need AWS CLI installed (you should already have this)
  - Have docker desktop running in background
  - Windows Powershell Admin
    - [https://stackoverflow.com/questions/54776324/powershell-bug-execution-of-scripts-is-disabled-on-this-system](https://stackoverflow.com/questions/54776324/powershell-bug-execution-of-scripts-is-disabled-on-this-system)
    - Install-AWSToolsModule AWS.Tools.ECR
  - Or, use WSL / Linux / MacOS / any Unix OS
- If you just want to make an update to the webscraper, you just need to edit ECR and not ECS. ECS should be configured to pick up the latest ECR revision anyways

## AWS ECS (Elastic Container Service)

### Task Definition

![alt_text](../static/img/webscraper2.png 'image_tooltip')

- [https://us-west-2.console.aws.amazon.com/ecs/v2/task-definitions?region=us-west-2](https://us-west-2.console.aws.amazon.com/ecs/v2/task-definitions?region=us-west-2)

  - Note the JSON option in existing task definitions
  - When creating a new task definition I recommend not to use JSON, but you can use JSON of past version to double check
  - ![alt_text](../static/img/webscraper3.png 'image_tooltip')

- Note Name and Image URI especially, rest can be like existing version

### Clusters

[https://us-west-2.console.aws.amazon.com/ecs/v2/clusters?region=us-west-2](https://us-west-2.console.aws.amazon.com/ecs/v2/clusters?region=us-west-2)

![alt_text](../static/img/webscraper4.png 'image_tooltip')

- Create cluster
  - I think you can keep default options here but don’t quote me. Fargate option
- Click on a cluster > scheduled tasks

  - ![alt_text](../static/img/webscraper5.png 'image_tooltip')

- Click update on an existing scheduled task for reference before making a new one (have them side by side on different tabs!)

  - ![alt_text](../static/img/webscraper6.png 'image_tooltip')

- While testing something for the first time, it's a good idea to set the interval for running the CRON job as something like every minute or every 5 minutes. But once you are certain it works, make sure to turn the interval back to once every 24 hours or 48 hours etc.

## AWS Cloudwatch

[https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#logsV2:log-groups](https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#logsV2:log-groups)

The log group may be created automatically, if not, create it. May error otherwise. This is also where you can check if the task is executed.

Name: /ecs/&lt;task name>

See [this page on Cloudwatch](./cloudwatch.md) as well for more information

[https://us-west-2.console.aws.amazon.com/ecs/v2/task-definitions?region=us-west-2](https://us-west-2.console.aws.amazon.com/ecs/v2/task-definitions?region=us-west-2)

(I think)

## SQL Debugging / Upload Missing Data

- If you get a missed meter upload notification (TimeoutError) email or otherwise notice some missing or incorrect data for the Solar Panel buildings ([SEC Solar](https://dashboard.sustainability.oregonstate.edu/#/building/30/2) and [OSU Operations](https://dashboard.sustainability.oregonstate.edu/#/building/42/2)), then insert the missing data via MySQL workbench

  - Check the `.env` file in the automated-jobs repo to reference where to log in for solar panel data. Clicking on one of the building names on the Plants page after you log in will bring up a table with daily and monthly data, including historical data
  - Most of the fields should be pretty self explanatory to insert into the Solar_Meters table in MySQL workbench, but for the time_seconds value, reference the playcode below for how to get the Unix timestamp
  - See [this page](./cloudwatch.md) for more info on Cloudwatch

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

## Testing Pipeline Guide

- Local test with energy dashboard (both frontend and backend local), MySQL workbench
  - Move on when you have successfully added new data to SQL database with `node readsec.js` (or whatever you named it), and you get the right data from local frontend > inspect element > network tab
- Unless you are making changes to the energy dashboard backend code, then just edit the `DASHBOARD_API` value in your `automated-jobs/SEC/.env` file to the production URL (https://api.sustainability.oregonstate.edu/v2/energy)
  - `docker build . -t test`
  - `docker run -t test`
- Local test with webscraper on Docker
  - Move on when `docker build . -t test` and `docker run -t test` works and successfully adds data to SQL database
- If making changes to backend energy dashboard code:
  - Run energy dashboard backend on http://localhost:3000
  - Edit the `DASHBOARD_API` value in your `automated-jobs/SEC/.env` file to the local dev URL (http://localhost:3000)
  - [https://github.com/OSU-Sustainability-Office/energy-dashboard/blob/master/backend/dependencies/nodejs/models/meter.js#L141](https://github.com/OSU-Sustainability-Office/energy-dashboard/blob/master/backend/dependencies/nodejs/models/meter.js#L141)
  - [https://github.com/OSU-Sustainability-Office/energy-dashboard/blob/master/backend/app/meter.js#L88](https://github.com/OSU-Sustainability-Office/energy-dashboard/blob/master/backend/app/meter.js#L88)
    - `API_PWD` in automated-jobs env file = `AQUISUITE_PWD` value that the energy-dashboard backend expects as part of the payload
    - Again, should push backend energy-dashboard changes to production if you need to test upload with puppeteer
- AWS ECR and ECS
  - Inspect Element > Network > see the network request sent starting with “data…”
  - **If you just want to make an update to the webscraper, you just need to push changes to ECR and not ECS. ECS should be configured to pick up the latest ECR revision anyways**
  - Change interval to 1 minute or something to test (ECS > cluster > scheduled task > update):

![alt_text](../static/img/webscraper7.png 'image_tooltip')

- Double check this part via Cloudwatch, and also check the data entries production site directly ([SEC Solar](https://dashboard.sustainability.oregonstate.edu/#/building/30/2) and [OSU Operations](https://dashboard.sustainability.oregonstate.edu/#/building/42/2)), as well as in the SQL database via MySQL workbench
- Remember to delete duplicate data from SQL database
  - `DELETE from Solar_Meters where id = <some id>`
  - Although redundant data _is_ [handled on the frontend](https://github.com/OSU-Sustainability-Office/energy-dashboard/pull/220/files#diff-6586f246008ae5ee333b803001847a4b4a69e2bbad28ff73b547375126b99a6bR80), it's good practice
