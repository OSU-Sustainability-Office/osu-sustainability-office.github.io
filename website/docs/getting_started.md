---
title: Getting Started
description: General Advice / Introduction to OSU SO Software
---

# Getting Started

## About the OSU Sustainability Office

- [OSU Sustainability Home Page](https://sustainability.oregonstate.edu)
- [About the OSU Sustainability Office](https://sustainability.oregonstate.edu/about-sustainability-office)

## Active Projects

Our GitHub Organization: [OSU Sustainability Office](https://github.com/OSU-Sustainability-Office)
- **Energy Dashboard**: [Repo](https://github.com/OSU-Sustainability-Office/energy-dashboard) | [Live Site](https://dashboard.sustainability.oregonstate.edu/)  
  Frontend + Backend

- **Carbon Calculator**: [Repo](https://github.com/OSU-Sustainability-Office/osu_carbon_calculator_update_project) | [Live Site](https://myco2.sustainability.oregonstate.edu/)  
  Frontend + Backend

- **Automated Jobs (CRON jobs)**: [Repo](https://github.com/OSU-Sustainability-Office/automated-jobs)  
  Deployed as CRON jobs on AWS

- **Lambda Common Layer (Security Infrastructure)**: [Repo](https://github.com/OSU-Sustainability-Office/lambda-common-layer)  
  Deployed as backend infrastructure on AWS

- **Sustainability Map**: [Repo](https://github.com/OSU-Sustainability-Office/sustainability_map) | [Live Site](https://osu-sustainability-office.github.io/sustainability_map)  
  Frontend only

- **Sustainability Kiosks**: [Repo](https://github.com/OSU-Sustainability-Office/sustainability-kiosks) | [Live Site](https://osu-sustainability-office.github.io/sustainability-kiosks/#/)  
  Frontend only

- **osu-sustainability-office.github.io (Wiki)**: [Repo](https://github.com/OSU-Sustainability-Office/osu-sustainability-office.github.io) | [Live Site](https://osu-sustainability-office.github.io)               
  Frontend only

## Contributing

- See [Frontend Prereqs](frontend_prereqs) doc for setup instructions for running the frontend locally
- See [Backend Prereqs](backend_prereqs) doc for setup instructions for running the backend locally
- Any Frontend work is open to PR's / open source
- Anything touching backend, including our NodeJS server (running locally), running AWS backend locally, or running AWS CRON jobs (for automated-jobs) can only be done by paid OSU Sustainability Office employees for security reasons
- Open source contributors can run the production API endpoints for energy-dashboard and carbon-calculator, for debugging frontend-only issues
