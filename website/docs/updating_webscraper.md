---
title: Updating Webscraper
description: Automated Jobs Tutorial Info that Pertains to Updating Webscraper
---

:::info

- **Recurring Task**: Extra steps for deploying changes to webscraper detailed below
- **Frequency**: Every time you need to update the webscraper

:::

## Updating Webscraper

- This refers to what's in the automated-jobs repo only
  - **Webscraper and energy dashboard backend changes can be handled separately**, e.g. if you update the energy-dashboard backend you don't have to update the webscraper, and vice versa
- **On initial setup of the webscraper, you need to set up ECS, but if you are just updating the webscraper later, you only need to update ECR**
- Go to AWS Console > ECR > View Push Commands
- Follow push commands in CLI
  - Note, as also explained in linked article below, that your operating system (Windows vs Linux etc.) can affect the AWS CLI login command syntax
- [See here](automated_jobs_tutorial#testing-pipeline-guide) for more detailed info
- In general, remember to check ECR and/or ECS in AWS Console (depending on which you tried to change), just to make sure the changes have gone through and all is working as expected. Check Cloudwatch logs as well
