---
title: Energy Dashboard Graph Logic
description: Overview of how graph logic (frontend)
---

# Energy Dashboard Graph Logic

## Relevant PR's:

- [Electric / Kilowatt Crackdown Graphs PR](https://github.com/OSU-Sustainability-Office/energy-dashboard/issues/191#issuecomment-1425001655)
- [Solar Graphs PR](https://github.com/OSU-Sustainability-Office/energy-dashboard/pull/220/files)

## Relevant Files

- Reference [this file](https://github.com/OSU-Sustainability-Office/energy-dashboard/blob/e663c82e3954f1660fc7aae9a0c92e69dd8944d1/src/store/chart.module.js#L187) for a list of which variables mean which energy types (like how `accumulated_real` corresponds to Electricity (Power))
- `src/store/chart_modifiers/line_bar/avg_accumulated_real.js`
  - For electricity (`accumulated_real`)
  - Single graph pages of kilowatt crackdown campaign - current data
- `src/store/chart_modifiers/line_bar/energy_change.js`
  - For solar (`energy_change`)
  - Single graph pages of kilowatt crackdown campaign - current data
- `src/store/chart_modifiers/avg_accumulated_real.js`
  - Baseline data for kilowatt crackdown campaign
- `src/store/chart_modifiers/line_bar/baseline_perc.js`
  - Covers baseline data for leaderboard / individual building graph
- Refer to the [PR's section above](energy-dashboard-graphs#relevant-prs) for specific code lines for debugging and logs
