---
title: Adding Meters / Buildings
description: Checklist of tasks needed for adding new meters / buildings
---

# Adding Meters / Buildings

:::info

- **Recurring Task**: You may be asked to add new meters or buildings to the dashboard every now and then
- **Frequency**: Once or twice a year

:::

## MySQL Workbench

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

- See [Database](database) document for help on updating / inserting buildings and meters

## automated-jobs

- Also need to update [validIDs file in automated-jobs](https://github.com/OSU-Sustainability-Office/automated-jobs/blob/main/check-acq/validIDs.json) to reflect the added buildings, meters, meter groups
  - Needed to check if the newly added API endpoints are up at any given time. See [Cloudwatch](cloudwatch) for more info
  - Might integrate this better in the database at some point

## AWS S3

- Go to AWS Web Console > S3 > Buckets > osu-energy-images
- Upload a picture of the newly added building (if applicable). Google images ought to be enough to find a good result
- Upload 1 picture to root directory of osu-energy-images
- Resize image for thumbnail with https://imageresizer.com/
  - Set width as **400px**, leave the height option blank to let the height scale with original proportions
  - Upload resized images to `thumbnails` directory of osu-energy-images
- Go back and make sure the file name of the image you uploaded matches the image filename as listed in `buildings` table in the SQL database as seen in [MySQL Workbench](adding_meters_buildings#MySQL-Workbench)
