---
title: Frontend Prerequisites
description: Frontend software that must be installed in advance (Open Source Friendly)
---

# Frontend Prerequisites
This page outlines the tools and setup required before running any OSU Sustainability Office frontend projects locally.

## What you need

### Node & NVM (recommended)

Using a version manager makes switching Node versions seamless.
- macOS / Linux (nvm): https://github.com/nvm-sh/nvm
- Windows (nvm-windows): https://github.com/coreybutler/nvm-windows
  - Uninstall any existing Node first: see the “Installation & Upgrades” notes on that page.
- Choose the Node version listed in the project’s README (if present). If unsure, try a long-term support node version (e.g. Node 18 or 20).

### Yarn _(required only for wiki development)_

Install **after** Node is set up. You may have to re-run this if you switch NodeJS versions with NVM as listed below.

- `npm install --global yarn`

### Browser Debug Tools (recommended)

- Inspect Element (right click > inspect in Chrome or Firefox)
- Vue Browser Debug Tools: [Link to Chrome Extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

### IDE

Use any editor you like. VS Code works great.
- If using VS Code, make sure you install extensions that are relevant to the repository (Vue, ESLint, Prettier, etc.)

## Running the Frontend

- If you are either an open source contributor without access to local backend, or you are fixing a frontend-only issue (our production API backend is much faster):
  - Open both of these files in your IDE:
    - `.env.development`
    - `.env.production`
  - Change `VUE_APP_ROOT_API` in `.env.development` to match `.env.production`.
