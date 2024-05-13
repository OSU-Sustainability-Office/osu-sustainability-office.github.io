---
title: Kiosks
description: Kiosks / Kiosks Website Documentation
---

This document contains important information about managing the several Sustainability Kiosks which the Sustainability Office manages. Currently there are Kiosks in LInC, the MU, the Valley Library and the SEC.

## QR Codes

Use [this website](https://www.qrcode-monkey.com) for generating new QR codes (if needed), for the `/#/sec` page (https://osu-sustainability-office.github.io/sustainability-kiosks/#/sec)

- According to [their About Page](https://www.qrcode-monkey.com/#about), you get links that last forever (no expiring), and no need to make an account or pay to use it

## Kiosk Website Info

The kiosks all essentially run a browser which connects to a Vue application we run on GitHub Pages.

- **GitHub Repository:** [https://github.com/OSU-Sustainability-Office/sustainability-kiosks](https://github.com/OSU-Sustainability-Office/sustainability-kiosks)
- **Deployed Page:** [https://osu-sustainability-office.github.io/sustainability-kiosks/#/](https://osu-sustainability-office.github.io/sustainability-kiosks/#/)

## Credentials

- See this document: https://drive.google.com/file/d/1NWv2sBFblABVEjcZgctbjFyZU2mPDTus/view?usp=drive_link
  - You will need to be a paid OSU Sustainability Office employee to access this

## MU Kiosk (Windows Pro Running KioWare)

### Notes:

Located in the MU Commons near all the inside restaurants (Panda Express, TOGO, and whatever else is currently there). Computer is mounted on a mini-VESA mount (I _think_ it’s mini-VESA, you may want to double-check before performing an upgrade).

### Kiosk Configuration

- See [KioWare](#kioware)

### Physical Access

If for some reason you need hardware level access, the kiosk itself is on a mount which is easily detachable via unhooking the lock contraption on the bottom of the mount. **Be careful when unhooking the lock, the kiosk may immediately start to fall**. There should be a padlock keeping this detachable lock contraption in place, you will want to contact Mike Mayers (building manager at MU) for assistance (the padlock code).

### Other Info

- 1280x768
- USB port on the left side of the kiosk computer, bring a mouse / keyboard for debug if needed
- This kiosk is located by the left wall when facing Rocket Burger / Panda Express (or whatever is there in the future _twilight zone soundtrack_), it is a very small device and doesn’t see as much traffic as our library kiosk does, but it is equally as important to keep updated.

## LINC Kiosk (Porteus Kiosk)

### Notes:

Located under the main staircase on the first floor of LINC, the LINC kiosk computer is an Intel NUC which runs [Porteus Kiosk](https://porteus-kiosk.org/) rather than KioWare. Unlike the KioWare kiosks this one can’t be easily modified since there’s no code to unlock the kiosk and reconfigure it. From my limited understanding, to change a kiosk setting would require re-installing Porteus Kiosk which luckily enough is relatively easy.

### Kiosk Configuration

- See [Porteus Kiosk](#porteus-kiosk)

## Valley Library Kiosk (Porteous Kiosk)

This is a pretty intimidating kiosk located outside of JAVA II which is on a sliding stand thing with two phillips screwdrivers on the bottom. To get at the kiosk computer you’ll need the help of another person to slide the wall monitor off the hinges and gently onto the ground. At this point you just need to install the kiosk computer.

This Kiosk computer was recently upgraded to an Intel Compute Stick.

### Kiosk Configuration

- See [Porteus Kiosk](#porteus-kiosk)

### Other Info

- 1920x1080
- Bring Keyboard and Mouse
- The library kiosk is our large kiosk. It is located outside of Java II and sees a lot of traffic. It is good to make a screen for our events that shows as an attract screen on this kiosk.

## SEC Kiosk

- According to Milan, this is set up by UHDS - some kind of “mobile windows distro”, or “regular windows in kiosk mode”

### Other Info

- 1920x1080
- This kiosk is located directly across from the small elevator, next to the restrooms on the first floor. For support for this kiosk, submit a ticket to UHDS IS at: uhds.link/support.

## General Info

### KioWare

- To make adjustments to KioWare configuration:
  - Starting from the upper left corner of the screen, tap the 4 corners clockwise (might take more than 4 taps, just keep going clockwise till it works)
    - Reference: https://www.kioware.com/faqs.aspx?id=-162698673
  - Enter 4 digit unlock code (see [credentials](#credentials))
  - This will automatically log you out
  - Switch to "admin" Windows user, enter Windows Admin password (see [credentials](#credentials)) to login
    - Insert screenshot here later
  - Make sure to have a keyboard / mouse handy after this point for making configuration changes (or use the Windows on-screen keyboard)
  - After logging in, open "KioWare Client Configuration" program
    - Insert screenshot later
  - Current Configuration (insert screenshots and proper settings names later)
    - Resets after 5 minutes of inactivity
      - Reference: https://www.kioware.com/docs.aspx?u=configattracttab.html&p=3&v=8.6&t=4#AttractTab
    - Note: the kiosk webpage also automatically refreshes within 10 minutes after new changes are pushed to the sustainability-kiosks github repo, which should handle content updates
    - Also included daily hard refresh at 6 AM as as failsafe
    - **Attract Screens**
      - These screens are a slideshow that is designed to give people brief information that will bring them into the kiosk. These can be images or video screens. As soon as the screen is touched you get sent to the kiosk homepage.
        - [Reference](https://www.kioware.com/docs.aspx?u=configattracttab.html&p=3&v=8.6&t=4#AttractScreens)
    - KioWare also comes with built-in functionality for forwards and backwards webpage navigation (swipe left / right on screen)

### Porteus Kiosk

**NOTE**: Installation steps below tested on Windows 10, may need adjustment if your local PC is Linux / MacOS

- Download the install the `.iso` files from [this Google Drive folder](https://drive.google.com/drive/folders/1CSONmJlfrUfPfLmq84UJTo3i2paSNP9A?usp=drive_link)
  - You will need to be a paid OSU Sustainability Office employee to access this
  - Try downloading the `Porteus-Kiosk-5.3.0-x86_64.iso` file first, otherwise try the `Porteus-Kiosk-3.7.0-i586.iso` file next
  - Alternatively, you can try downloading the `.iso` files from [this 2021 archive of porteus-kiosk.com](https://web.archive.org/web/20211106081616/https://porteus-kiosk.org/download.html) (the current version of porteus-kiosk.com requires a user login to download)
- Use [Balena Etcher](https://etcher.balena.io/) to install the `.iso` onto a USB drive (use default settings)
- Once you have the USB drive you simply need to plug it into a USB port and restart the kiosk. You should then be greeted with a set-up wizard (you shouldn’t need to mess around with the BIOS since it looks like it already prioritizes USB drives as boot drives).

The settings are currently enabled on the kiosk are as follows (insert screenshots and proper settings names later):

- It’s configured to connect to the Ethernet port behind the wall. For assistance with this I recommend contacting Mike Mayers (Michael.Mayers@oregonstate.edu), or (specifically for Valley Library) Margaret Mellinger (margaret.mellinger@oregonstate.edu) or David Manela (david.manela@oregonstate.edu)
- MU kiosk uses Google Chrome browser currently, Valley Library kiosk uses FireFox browser
- The navigation bar is disabled (there is an optional setting to include on-screen forward and backwards browser webpage buttons, if you pick Firefox for the kiosk browser)
  - TODO: Add screenshot here
- It automatically restarts the session after 5 minutes of inactivity
- Has a custom home page of [https://osu-sustainability-office.github.io/sustainability-kiosks/](https://osu-sustainability-office.github.io/sustainability-kiosks/)

It’s highly recommended that you heavily test the kiosk in the office prior to reinstalling the kiosk in LINC / Valley Library

**PREVIOUSLY ENCOUNTERED PROBLEMS & SOLUTIONS:**

- **After making usb bootable, it’s not longer capable of being reformatted in windows to the point where it doesn’t even show up in the File Explorer:**
  - **[Rufus ](https://rufus.ie/en/)**is a good way of reformatting a seemingly broken USB drive.
  - Windows OS utilities are really fickle and don’t work in a lot of edge cases.
- **Can’t select .iso file in win32diskimage / Balena Etcher**
  - Change expected file extension to “.\*” and then the program should allow for selecting an .iso image.
