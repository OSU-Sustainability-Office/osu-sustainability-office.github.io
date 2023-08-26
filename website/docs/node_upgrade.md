---
title: NodeJS Updating
description: Periodic NodeJS UpDates Needed
---

:::info

- **Recurring Task**: NodeJS version needs to be updated periodically. You may have to resolve dependency conflicts in package.json (among other things) to ensure compatibility
- **Frequency**: Depends on the release schedule of NodeJS, AWS Lambda, and Github Actions, as seen below. About once a year can be expected
  :::

### AWS Lambda NodeJS Schedule

- https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html
  - This chart shows when each NodeJS version will be deprecated
    - Phase 1: Can no longer create new AWS lambda functions (cannot add a new API endpoint, for instance. Cannot create a new serverless project / feature on that NodeJS version). Existing functions can be updated still.
    - Phase 2: Can no longer create nor update AWS lambda functions. ~ 1 month after Phase 1

### General NodeJS Schedule

- https://github.com/nodejs/Release
  - Shows EOL (end of life) of each NodeJS version - each version will still work, but will stop receiving security updates

### Github Actions NodeJS Schedule

- https://github.blog/changelog/label/actions/
  - This blog category can help keep track of changes to NodeJS versions supported by Github Actions (needed for frontend Github Pages, as well as all Github Actions CI/CD (e.g. for triggering backend deployments))
  - **Expect about a year's delay** between General NodeJS version EOL and Github Actions NodeJS EOL, as we can see that Github Actions [dropped support for NodeJS 12 about a year](https://github.blog/changelog/2023-05-04-github-actions-all-actions-will-run-on-node16-instead-of-node12/)

### Checking Current NodeJS Versions

- On the backend, look in `backend/template.yaml` (or something like that), this controls the NodeJS version used for the backend (AWS Lambda)
  - Go to AWS Console > Lambda > Functions to double check which NodeJS versions are currently used in backend
- On the frontend, look in the `.github/workflows` folder for configuring nodeJS version (every Github Actions YML file except the API-deploy workflow, as backend nodejs version is handled by `backend/template.yaml` as explained above)

### Version Specific Changes

**What Breaks from NodeJS 12 to 16**

- Node-Sass: https://stackoverflow.com/questions/69312134/error-with-node-sass-when-running-npm-install
  - Switch to Dart Sass to fix

**What Breaks from NodeJS 16 to 18**

- OpenSSL security rules: https://stackoverflow.com/questions/69962209/what-is-openssl-legacy-provider-in-node-js-v17
- For now I opt to use a "legacy OpenSSL" option in order to use Node 18, which may be a security vulnerability, but for now good enough

**What will Break from NodeJS 18 to 19+**

- I don't know. Topic for future research
- **If in doubt, search the error message in Github and StackOverflow**
