---
title: Software Installation Pre-Reqs
description: Software you should install before starting development
---

### Sam Getting Development Environments Setup

- Docker & Docker Compose (for local backend testing):
  - [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
  - Select “Docker Desktop for &lt;Your Platform>”
- NPM: [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
  - You probably have this but just in case.
- Node Version Manager (nvm):
  - This isn’t required but I highly recommend it (very annoying to switch nodeJS versions otherwise).
  - **This one is for Apple / Linux**: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
  - **Use this one for Windows**: [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
    - Make sure to uninstall existing Node installation just in case: [https://github.com/coreybutler/nvm-windows#installation--upgrades](https://github.com/coreybutler/nvm-windows#installation--upgrades)
    - Read instructions in the repo README for general tips on installing specific node versions.
  - Use Node 16 for Energy-Dashboard( `nvm use 16 `), and Node 12 ( `nvm use 12`) for most other stuff.
- AWS Stuff - **Do each step below in order. AWS CLI, SAM CLI can be installed but can’t set up credentials until OSU IT sets up your account.**
  - Login (some links below will fail if not logged in): [https://login.oregonstate.edu/apps/aws/](https://login.oregonstate.edu/apps/aws/)
    - The above login site may require OSU IT to set you up - Milan has sent email.
  - IAM (set up authorized user account): [https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/users)
    - Click “Add User”.
    - On page 1 (next page) select “Access key - Programmatic access”.
      - ![Screenshot of this step](https://media.discordapp.net/attachments/1018323831468851202/1062550730231267398/image.png?width=1440&height=604)
    - On page 2 select “Copy Permissions from existing user” > “jeff-cli”.
      - ![Screenshot of this step](https://media.discordapp.net/attachments/1018323831468851202/1062550838347841566/image.png?width=1440&height=611)
    - On page 3, 4, 5, ignore and press Next / Confirm.
    - On final page you will see the login details of your user. Click “Show” on Secret Access key.** Make sure to save both your Access Key ID and Secret Access Key in txt file etc. locally, you will not be able to see Secret Access key again.**
      - ![Screenshot of this step](https://media.discordapp.net/attachments/1018323831468851202/1062550560324202506/image.png?width=1440&height=631)
    - More Info: [https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-set-up.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-set-up.html)
  - AWS CLI (for verifying AWS credentials):
    - Installation: [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
    - Configuration Documentation: [https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html)
    - Run `aws configure` in the command line after installation.
    - Fill in all details (refer to IAM section for Access Key ID and Secret Access Key). Make sure to select “us-west-2” for region. I think default output can be left as json.
  - AWS SAM CLI (CLI for serverless backend):
    - [https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- IDE: Use any you like, VSCode is a personal favorite of mine.
  - For VSCode install appropriate extensions for Vue, Javascript, etc
- Vue Browser Debug Tools: [https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
  - Allows you to debug vue store in browser, e.g. `vue.$store.getters["map/building_1/description"]`
  - ![Screenshot](https://media.discordapp.net/attachments/1018323831468851202/1062557315640873030/image.png?width=1440&height=606)
- MySQL Workbench (for debugging database. Probably won’t need this right now tbh but good to set up.)
  - Installation: [https://www.mysql.com/products/workbench/](https://www.mysql.com/products/workbench/)
  - New Connection (Click Plus Sign): ![Screenshot](https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io/blob/main/website/static/img/mysql_workbench_plus.PNG?raw=true)
  - [For MySQL credentials, see here](https://drive.google.com/file/d/1dY-t3bxLc3HRkjg2HDr6uyvcM3BIYKW0/view?usp=sharing)
    - Need to be paid employee of OSU Sustainability office to see above link
  - Once set up:
    - Open connection, select “energy_data” from schemas in left
    - Limit to 50,000 rows to avoid it taking too long.
    - Run test query, e.g. `select * from data order by time DESC;`
    - Click the lightning symbol to run query.
    - ![Screenshot](https://media.discordapp.net/attachments/1018323831468851202/1062556054711439451/image.png)

### General Documentation

- AWS SAM: [https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)
- Vue2: [https://v2.vuejs.org/](https://v2.vuejs.org/)
  - We may migrate to Vue3 at some point but not yet. Most Vue tutorials out there are now in Vue3, so just keep in mind there are some differences in Vue2.
- Vuex / Vue Store: [https://vuex.vuejs.org/](https://vuex.vuejs.org/)
  - You do not need to separately install Vue or Vue Cli per se, they are included in the package.json of the project. However, separately installing them could be good for learning on your own when following tutorials.
- Github Actions (CI / devops): [https://docs.github.com/en/actions](https://docs.github.com/en/actions)
- Other backend stuff (skip to page 8 or so. I don’t understand this that well so just read original doc): [https://docs.google.com/document/d/195yG472A_xzk53GmmxTIP2i8sS-c8QN4v-5lk4XyaZ4/edit](https://docs.google.com/document/d/195yG472A_xzk53GmmxTIP2i8sS-c8QN4v-5lk4XyaZ4/edit)

### Get Project Running Locally

Start up the Docker Desktop (backend won’t work locally otherwise).

Open two terminal instances (or split one terminal into two panes), navigate to project directory in each.

In terminal one:

`cd backend`

`npm install` (first time only)

`sam local start-api`

In terminal two:

`npm install` (first time only)

`npm run serve`

Backend is locally hosted at [http://localhost:3000](http://localhost:3000)

Frontend is locally hosted at [http://localhost:8080](http://localhost:8080)

NOTE: Need both backend and frontend running for it to work.

### Current Issues

Check shared google drive:

- Software meeting notes: [https://docs.google.com/document/d/1VWoR9N4KLWHiKGyriwc2NTm5cVSIw9JZa0z5jcgCBM0/edit](https://docs.google.com/document/d/1VWoR9N4KLWHiKGyriwc2NTm5cVSIw9JZa0z5jcgCBM0/edit)
- Software Timeline: [https://docs.google.com/document/d/1yCgnyXrtE-75l5tZCuh2obDY993uQUMY5euhmTOXE3s/edit](https://docs.google.com/document/d/1yCgnyXrtE-75l5tZCuh2obDY993uQUMY5euhmTOXE3s/edit)
- Github: [https://github.com/OSU-Sustainability-Office](https://github.com/OSU-Sustainability-Office)
  - Click on a repository, then Issues.
  - Currently Energy Dashboard, automated-jobs (private repo, need to add you to org), lambda-common-layer are actively being worked on.
  - Tell me your username on Github so I can add you to the organization.
