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
  - Start in `automated jobs/<scraper name>` directory, e.g. `automated-jobs/SEC`
    - Currently, only `/SEC` and `check-acq` are currently active, being the solar webscrapers and meter outage detector respectively
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

Name: `/ecs/<task name>`

See [this page on Cloudwatch](./cloudwatch.md) as well for more information

[https://us-west-2.console.aws.amazon.com/ecs/v2/task-definitions?region=us-west-2](https://us-west-2.console.aws.amazon.com/ecs/v2/task-definitions?region=us-west-2)

(I think)

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
- AWS ECR and ECS
  - Inspect Element > Network > see the network request sent starting with “data…”
  - **If you just want to make an update to the webscraper, you just need to push changes to ECR and not ECS. ECS should be configured to pick up the latest ECR revision anyways**
  - Change interval to 1 minute or something to test (ECS > cluster > scheduled task > update):

![alt_text](../static/img/webscraper7.png 'image_tooltip')

- Double check this part via Cloudwatch, and also check the data entries production site directly ([SEC Solar](https://dashboard.sustainability.oregonstate.edu/#/building/30/2) and [OSU Operations](https://dashboard.sustainability.oregonstate.edu/#/building/42/2)), as well as in the SQL database via MySQL workbench
- Remember to delete duplicate data from SQL database
  - `DELETE from Solar_Meters where id = <some id>`
  - Although redundant data _is_ [handled on the frontend](https://github.com/OSU-Sustainability-Office/energy-dashboard/pull/220/files#diff-6586f246008ae5ee333b803001847a4b4a69e2bbad28ff73b547375126b99a6bR80), it's good practice
