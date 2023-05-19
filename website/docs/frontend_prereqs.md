---
title: Frontend Pre-Reqs
description: Frontend software that must be installed in advance (Open Source Friendly)
---

# Frontend Pre-Reqs

## Pre-Reqs to Install
- Node Version Manager (nvm):
  - This isn’t required but I highly recommend it (very annoying to switch NodeJS versions otherwise).
  - **This one is for Apple / Linux**: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
  - **Use this one for Windows**: [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
    - Make sure to uninstall existing Node installation just in case: [https://github.com/coreybutler/nvm-windows#installation--upgrades](https://github.com/coreybutler/nvm-windows#installation--upgrades)
    - Read instructions in the repo README for general tips on installing specific node versions.
  - Use Node 16 ( `nvm use 16 `)

- Read specific repo README for specifics (see [Getting Started](getting_started)), but in general:
    - Run `npm run serve` in the frontend directory to run it.

## Running the Frontend

- If you are either an open source contributor without access to local backend, or you are fixing a frontend-only issue (our production API backend is much faster):
    - Open both of these files in your IDE:
      -  `.env.development`
      - `.env.production`
    - Change `VUE_APP_ROOT_API` in `.env.development` to match `.env.production`.