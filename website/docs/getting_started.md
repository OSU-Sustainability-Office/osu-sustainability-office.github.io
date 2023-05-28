---
title: Getting Started
description: General Advice / Introduction to OSU SO Software
---

# Getting Started

## General Info

The following links are just for general info on OSU Sustainability Office and are not developer documentation.

- [OSU Sustainability Home Page](https://fa.oregonstate.edu/sustainability)
- [About the OSU Sustainability Office](https://fa.oregonstate.edu/sustainability/about/sustainability-office)
  - Specific info about specific employees may be out of date at any given time, this page is not updated that frequently

## Active Projects

Our Github Org: https://github.com/OSU-Sustainability-Office

- Energy Dashboard - [Github Repo](https://github.com/OSU-Sustainability-Office/energy-dashboard), [Deployed Site](https://dashboard.sustainability.oregonstate.edu/)

  - Frontend + Backend

- Carbon Calculator - [Github Repo](https://github.com/OSU-Sustainability-Office/osu_carbon_calculator_update_project), [Deployed Site](https://myco2.sustainability.oregonstate.edu/)

  - Frontend + Backend

- Automated Jobs (CRON jobs etc) - [Github Repo](https://github.com/OSU-Sustainability-Office/automated-jobs)

  - Deployed as CRON job on AWS

- Lambda Common Layer (Security Infrastructure) - [Github Repo](https://github.com/OSU-Sustainability-Office/lambda-common-layer)

  - Deployed on the backend / AWS as infrastructure

- Sustainability Map - [Github Repo](https://github.com/OSU-Sustainability-Office/sustainability_map), [Deployed Site](https://osu-sustainability-office.github.io/sustainability_map)

  - Frontend Only

- Sustainability Kiosks - [Github Repo](https://github.com/OSU-Sustainability-Office/sustainability-kiosks), [Deployed Site](https://github.com/OSU-Sustainability-Office/sustainability-kiosks)

  - Frontend Only

- Sustainability Jeopardy - [Github Repo](https://github.com/OSU-Sustainability-Office/sustainability_jeopardy), [Deployed Site](https://osu-sustainability-office.github.io/sustainability_jeopardy/)
  - Frontend Only

## Contributing

- Any Frontend work is open to PR's / open source
- Anything touching backend, including our NodeJS server (running locally), running AWS backend locally, or running AWS CRON jobs (for automated-jobs) can only be done by paid OSU Sustainability Office employees for security reasons
- Open source contributors can run the production API endpoints for energy-dashboard and carbon-calculator, for debugging frontend-only issues
