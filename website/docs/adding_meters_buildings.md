---
title: Adding Meters / Buildings
description: Checklist of tasks needed for adding new meters / buildings
---

# Adding Meters / Buildings

:::info
**Recurring Task**: You may be asked to add new meters or buildings to the dashboard every now and then
:::

## Overview

The following tables in the SQL database should be updated each time a new meter and/or building is added:

- `meters`
  - Should update itself for new meters; the primary key `id` will auto-increment so you can tell new meters were added
- `meter_groups`
  - Make sure to update the `building_id_2` value in `meter_groups` table if you are adding a new building
- `buildings`
  - Update building image by uploading image to `osu-energy-images` AWS S3 bucket (manual upload will be simplest)
  - Get map ID from https://www.openstreetmap.org/ ("way" on openstreetmap = map ID in database)
- `meter_group_relation`
  - Match the corresponding meter group and meter ID together in. One meter group can be mapped to several meters, but not the other way around
