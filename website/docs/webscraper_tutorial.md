---
title: Webscraper Tutorial
description: Guide on adding webscrapers to Energy Dashboard
---

# Webscraper Tutorial

## General Info

[Link to GitHub Repository](https://github.com/OSU-Sustainability-Office/automated-jobs)

## Automated-Jobs Dev Setup

1. From the repository root, cd into the folder of the automated job you want to run (e.g., SEC, check-acq).
2. Paste the env file into the corresponding automated job. 
    - [Link to .env files](https://drive.google.com/drive/u/1/folders/1geuKCp-aTIrde2WdJkE3f_L2TsF46_O3) (Need to be a paid OSU Sustainability Office Employee to see this link)
    - Env files that are used by automated jobs will have a file name like "automated-jobs-XXXX.env.txt" (e.g. automated-jobs-pacific.env.txt for the pacific power scraper). 
    - Env files need `DASHBOARD_API = https://api.sustainability.oregonstate.edu/v2/energy` unless you are making changes to energy dashboard (more on this in Testing Pipeline section)
3. Ensure you are using the correct node version. Node version could potentially vary between automated jobs so refer to the README.MD in folder of the automated job.
4. `npm i` to install packages.
5. `node <Javascript file name>`, e.g. `node readsec.js` to run web scraper.

## AWS ECR (Elastic Container Registry)

[AWS ECR](https://us-west-2.console.aws.amazon.com/ecr/repositories?region=us-west-2) is the registry that stores and versions the Docker images for each automated job. Any update to a webscraper gets pushed to ECR as an image, and ECS automatically runs the newest image.

![alt_text](../static/img/webscraper1.png 'image_tooltip')

### Creating a new repository
This is only necessary if a new automated job has been developed.
1. Click "Create repository"
2. In the "General settings" section, enter the repository name
3. Leave everything else as-is and click "Create"

### Pushing an image to an existing repository

**Prerequisites**
- AWS CLI must be installed
- Docker Desktop App must be running in background
- For Windows Users:
  - Windows PowerShell Admin
      - If you are dealing with “execution of scripts is disabled on this system” issue, then [this stack overflow article](https://stackoverflow.com/questions/54776324/powershell-bug-execution-of-scripts-is-disabled-on-this-system) may be useful.
  - Install the specific module for managing ECR through the AWS Tools for PowerShell using: `Install-AWSToolsModule AWS.Tools.ECR`

**Steps**
1. From the [AWS ECR Private repositories list](https://us-west-2.console.aws.amazon.com/ecs/v2/clusters?region=us-west-2), navigate to the desired automated job.
2. Click "View push commands"
3. Follow the AWS-provided push commands to authenticate, build, tag, and push your Docker image to the selected repository.

## AWS ECS (Elastic Container Service)

AWS ECS is the service that runs the AWS ECR images as containers. ECS task definitions point to image URIs in ECR, so when you push an updated image to ECR, ECS can automatically pull and run the latest version.

### Creating a new task definition
1. From [AWS ECS task definition page](https://us-west-2.console.aws.amazon.com/ecs/v2/task-definitions?region=us-west-2), click on "Create new task definition" > "Create new task definition" (not with JSON)
2. Check the box for "AWS Fargate" as the launch type
3. Leave Operating system/Architecture as-is
4. We can typically use cheapest option for cpu/memory (0.25 vCPU/0.5 GB)
5. In the Container details section, enter an appropriate container name.
6. For Image URI, click "Browse ECR Images" > *Your automated job ECR* > "Use image tag: latest"
7. In the logging section, enter the following values for each key:
    ```
    - awslogs-group: /ecs/
    - awslogs-region: us-west-2
    - awslogs-stream-prefix: ecs
    - awslogs-create-group: true
    ```

**Note:** If you are running into any issues, you can refer to an existing task definition's JSON configuration settings.

### Creating a new cluster
1. From [AWS ECS cluster page](https://us-west-2.console.aws.amazon.com/ecs/v2/clusters?region=us-west-2), click "Create cluster"
2. Use default options and click "Create"
3. See "Updating cluster's scheduled task" section

### Updating cluster's scheduled task
1. Go to the desired cluster and click "Scheduled tasks"
2. Click update on an existing scheduled task for reference before making a new one (have them side by side on different tabs!)
3. While testing something for the first time, it's a good idea to set the interval for running the CRON job as something like every minute or every 5 minutes. But once you are certain it works, make sure to turn the interval back to once every 24 hours or 48 hours etc.

## AWS Cloudwatch

[AWS Cloudwatch log groups](https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#logsV2:log-groups) can be used for debugging purposes and to verify that the automated job has executed.

See [this page on Cloudwatch](./cloudwatch.md) as well for more information

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

![alt_text](../static/img/webscraper2.png 'image_tooltip')

- Double check this part via Cloudwatch, and also check the data entries production site directly ([SEC Solar](https://dashboard.sustainability.oregonstate.edu/#/building/30/2) and [OSU Operations](https://dashboard.sustainability.oregonstate.edu/#/building/42/2)), as well as in the SQL database via MySQL workbench
- Remember to delete duplicate data from SQL database
  - `DELETE from Solar_Meters where id = <some id>`
  - Although redundant data _is_ [handled on the frontend](https://github.com/OSU-Sustainability-Office/energy-dashboard/pull/220/files#diff-6586f246008ae5ee333b803001847a4b4a69e2bbad28ff73b547375126b99a6bR80), it's good practice
