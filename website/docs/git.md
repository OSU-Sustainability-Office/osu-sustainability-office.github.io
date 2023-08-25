---
title: Git
description: Overview of Git / Github Actions / Testing Protocol
---

:::info

- **Recurring Task**: You have to follow Git protocol every time you make commits or push code
- **Frequency**: Every time you make commits or push code

:::

## Github Actions

- See `.github/workflows` folder in existing repos for examples
- General docs - https://docs.github.com/en/actions
- In general, backend changes have to be pushed into production to fully test them (as we have no dev (secondary) database / backend).
- Frontend changes can be fully tested in preview frontend deployments for [Energy Dashboard](http://energy-dashboard.s3-website-us-west-2.amazonaws.com/#/map) and [Carbon Calculator](http://carbon-calculator.s3-website-us-west-2.amazonaws.com/#/)
- See https://www.githubstatus.com/ if the workflows break, to check if it's just Github servers down

## Testing Pipeline / Git Protocol

- Opening pull requests and thorougly testing changes before pushing changes into production is preferred, especially for more complex features
- Should test (ideally log screenshot evidence in PR comments):
  - locally
  - Test S3 build (if frontend only changes on Energy Dashboard or Carbon Calculator)
  - On production, as there may be some issues only apparent on production version vs local
- Always branch off of main / master branch if possible. Do not branch off of another feature branch if possible, to avoid merge issues later
- Try to split tasks into smaller parts to make delegating tasks easier, and make it easier to track incremental progress
