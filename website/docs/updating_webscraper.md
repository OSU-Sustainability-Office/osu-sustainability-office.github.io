---
title: Updating Webscraper
description: Webscraper Tutorial Info that Pertains to Updating Webscraper
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
- [See here](webscraper_tutorial#testing-pipeline-guide) for more detailed info
