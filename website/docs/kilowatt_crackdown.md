---
title: Kilowatt Crackdown
description: Overview of tasks to do for Kilowatt Crackdown
---

:::info

- **Recurring Task**: You have to create a kilowatt campaign (with coordination from Lety as noted below), debug any errors that may appear
- **Frequency**: Once a year

:::

## Overview

- Add item to `campaigns` table as per notice from Lety on what residential buildings will participate in Kilowatt Crackdown this year. Pay attention to:
  - `date_start` and `date_end`. These denote when the Kilowatt Crackdown will take place. Ensure the meter data between these dates is valid
  - `compare_start` and `compare_end`. These define a time period that the Kilowatt Campaign is compared to in order to calculate changes in energy efficiency for residential halls. Again, ensure the meter data here is valid before proceeding
    - Ask Lety for the comparison dates, she will have an idea
    - If meter data is missing for either time period, inform Lety ASAP and try to find workarounds
    - In a pinch, the dashboard has been adjusted to handle manual meter uploads for halls without automated meter data uploads. See 2022 campaign and Weatherford Hall
  - `media` value (campaign banner image). If you are re-using an existing banner image, then just copy the value for the `media` from another year's campaign. If you have a new campaign banner image, see [AWS S3 section below](kilowatt_crackdown#aws-s3) for what to do.
- Add items to `campaign_groups`. the `groups` value denotes the `meter group` value for the building you want. In some cases (as seen in `meter_group_relation`), there are several meter groups for a given building. In such cases, test the campaign graph locally (see below), and if multiple are valid, then just pick one

## AWS S3

**Only applicable if adding a new campaign banner image**

- Go to AWS Web Console > S3 > Buckets > osu-energy-images
- Upload image of the newly added campaign banner
- Upload 1 picture to root directory of osu-energy-images
- Crop image for thumbnail with https://imageresizer.com/crop-image
  - Set width as **400px**, and then leave height as it was in the original image
  - Upload cropped image to `thumbnails` directory of osu-energy-images
- Click on uploaded image in `S3 bucket` > `Permissions` > `Everyone(public access)` > `Object` > change to `Read`
- Go back and make sure the file name of the image you uploaded matches the image filename as listed in `campaigns` table in the SQL database as seen in [MySQL Workbench](adding_meters_buildings#MySQL-Workbench)

## Testing

- Any campaign with a name starting with "test" will not be shown on the production version of the energy dashboard, only on local
- This will ensure ease in testing if certain meter groups are valid for the desired time period, without breaking the production version
- Test Kilowatt Crackdown graph both locally and by going to Inspect Element > Network > check API request (e.g. `data?id=<buildingID>&startDate=<StartDate>...`) and see what is in the payload. Empty payloads or error codes in the request (e.g. 404) indicate missing data and the meter group should not be used
