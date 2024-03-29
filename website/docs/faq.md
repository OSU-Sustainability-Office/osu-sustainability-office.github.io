---
title: FAQ / HELP ME
description: Quick fixes for some common issues
---

## Important

This document assumes you have already gone through the [frontend prereqs](frontend_prereqs) and [backend prereqs](backend_prereqs) docs.

If you haven't already, please read through and follow those instructions first before returning; this is a **condensed** document written for quick help and not a thorough manual.

## Command Line

- `npm run serve` for frontend
- `sam local start-api` for backend
  - As a general rule of thumb, you need to have Docker Desktop open in the background to run backend locally
- [automated-jobs](https://github.com/OSU-Sustainability-Office/automated-jobs) will use syntax `node <filename.js>`
- This wiki can be compiled with `yarn start`
- `npm run format` or `yarn format` (for wiki) are for auto-formatting code
- For more specific info, see the `README.md` or `package.json` of the individual repos as seen [here](getting_started#active-projects)
  - Note that some projects host separate `package.json` for backend folders
- See [frontend prereqs](frontend_prereqs) and [backend prereqs](backend_prereqs) docs also; they are written mostly for energy-dashboard but should apply to most other Vue applications we use

## Git

- [See the Git doc](git)

## AWS

- AWS Login Link: https://login.oregonstate.edu/apps/aws/

Important AWS Services for OSU SO (non-exhaustive)

- Cloudwatch (logs and alerts)
- ECS / ECR (webscrapers)
- SNS (handles email alerts)
- AWS Lambda (backend serverless stuff)
- S3 (file storage, serverless buckets)
- SAM (serverless framework general info, important for deployment and github actions stuff) - https://aws.amazon.com/serverless/sam/

## MySQL

- See [backend prereqs](backend_prereqs#mysql-workbench)
- https://www.w3schools.com/sql/default.asp is your friend
- You will need this for:
  - [Solar data missed upload](cloudwatch)
  - [Creating new Kilowatt Campaign](kilowatt_crackdown)
  - Anything else touching the database
- **See [Database document](database) for more detailed info**

## Credentials

- [Credentials Folder](https://drive.google.com/drive/u/1/folders/1geuKCp-aTIrde2WdJkE3f_L2TsF46_O3)
  - Need to be OSU SO employee to see this link
