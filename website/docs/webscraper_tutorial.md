---
title: Webscraper Tutorial
description: Guide on adding webscrapers to Energy Dashboard
---

[https://github.com/OSU-Sustainability-Office/automated-jobs](https://github.com/OSU-Sustainability-Office/automated-jobs)

[https://login.oregonstate.edu/apps/aws/](https://login.oregonstate.edu/apps/aws/)

[https://pptr.dev/](https://pptr.dev/)

**Local Testing**

- Need Docker, Energy dashboard backend running
- npm install & npm i puppeteer
- .env needs “DASHBOARD_API = http://localhost:3000”
- Test if “node &lt;JS file>” works in automated jobs repo (or wherever you put scraper code)
- Make sure you get 200 response
- .env file in discord
- Double check: Run energy dashboard frontend as well. Go to local dev version of energy dashboard, then either “OSU Operations”, “OSU Operations Lube Shop”, “SEC Solar”, e.g. [http://localhost:8080/#/building/43/2](http://localhost:8080/#/building/43/2)
  - Inspect Element > Network > see the network request sent starting with “data…”
- Maybe talk about mysql workbench
  - Select \* from Solar_Meters

**Local Testing (Docker)**

More info below in ECR section

- [Go here for the .env file](https://drive.google.com/file/d/12dCdA5E5e6qPgkSYehqOcX_zVy9YztFF/view?usp=sharing) - put inside the `automated-jobs/SEC` directory
  - Need to be a paid OSU Sustainability Office Employee to see this above link
- .env needs `DASHBOARD_API = https://api.sustainability.oregonstate.edu/v2/energy`
- Get backend of energy-dashboard pushed to production first
- `docker build . -t <image name>`
- `docker run -t <image name>`

<strong>AWS ECR (Elastic Container Registry)</strong>

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
  - Or, use WSL

**AWS ECS (Elastic Container Service)**

**Task Definition**

![alt_text](../static/img/webscraper2.png 'image_tooltip')

- [https://us-west-2.console.aws.amazon.com/ecs/v2/task-definitions?region=us-west-2](https://us-west-2.console.aws.amazon.com/ecs/v2/task-definitions?region=us-west-2)

  - Note the JSON option in existing task definitions
  - When creating a new task definition I recommend not to use JSON, but you can use JSON of past version to double check
  - ![alt_text](../static/img/webscraper3.png 'image_tooltip')

- Note Name and Image URI especially, rest can be like existing version

**Clusters**

[https://us-west-2.console.aws.amazon.com/ecs/v2/clusters?region=us-west-2](https://us-west-2.console.aws.amazon.com/ecs/v2/clusters?region=us-west-2)

![alt_text](../static/img/webscraper4.png 'image_tooltip')

- Create cluster
  - I think you can keep default options here but don’t quote me. Fargate option
- Click on a cluster > scheduled tasks

  - ![alt_text](../static/img/webscraper5.png 'image_tooltip')

- Click update on an existing scheduled task for reference before making a new one (have them side by side on different tabs!)
  - ![alt_text](../static/img/webscraper6.png 'image_tooltip')

**AWS Cloudwatch**

[https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#logsV2:log-groups](https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#logsV2:log-groups)

The log group may be created automatically, if not, create it. May error otherwise. This is also where you can check if the task is executed.

Name: /ecs/&lt;task name>

[https://us-west-2.console.aws.amazon.com/ecs/v2/task-definitions?region=us-west-2](https://us-west-2.console.aws.amazon.com/ecs/v2/task-definitions?region=us-west-2)

(I think)

**Debug Database (Remove Redundant Data, check Unix Timestamp)**

Useful sandbox - [https://playcode.io/1457582](https://playcode.io/1457582)

```
// Set the date and time in GMT+0 time zone
const date = new Date('April 13, 2023 23:59:59 GMT+0');

// Calculate the Unix time in seconds
const unixTimeSeconds = Math.round(date.getTime() / 1000);

console.log(unixTimeSeconds); // Outputs: 1681343999
```

**Testing Pipeline Guide**

Yellow = local test. Node &lt;js file> probably enough.

- Local test with energy dashboard (both frontend and backend local), MySQL workbench
  - Move on when you have successfully added new data to SQL database with “node &lt;scraperJS file>”, and you get the right data from local frontend > inspect element > network tab
- Push energy dashboard backend code to production -EDIT: not needed
  - docker build -t test .
  - docker run -p 3000:3000 test
- Local test with webscraper on Docker
  - Move on when “docker build . -t &lt;image name> and “docker run -t &lt;image name>” works and successfully adds data to SQL database
- Energy Dashboard API -
  - Run this in localhost:3000 if making changes to energy dashboard backend code
  - [https://github.com/OSU-Sustainability-Office/energy-dashboard/blob/master/backend/dependencies/nodejs/models/meter.js#L141](https://github.com/OSU-Sustainability-Office/energy-dashboard/blob/master/backend/dependencies/nodejs/models/meter.js#L141)
  - [https://github.com/OSU-Sustainability-Office/energy-dashboard/blob/master/backend/app/meter.js#L88](https://github.com/OSU-Sustainability-Office/energy-dashboard/blob/master/backend/app/meter.js#L88)
    - API_PWD in automated-jobs env file = AQUISUITE_PWD in common layer? Env file
- AWS ECR and ECS
  - Change interval to 1 minute or something to test (ECS > cluster > scheduled task > update):

![alt_text](../static/img/webscraper7.png 'image_tooltip')

- Double check this part via Cloudwatch, and also check SQL database
- Remember to delete duplicate data from SQL database
  - “Delete from Solar_Meters where id &lt; someamount”
