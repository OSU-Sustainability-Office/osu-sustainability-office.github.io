---
title: Kiosks
description: Kiosks / Kiosks Website Documentation
---

This document contains important information about managing the several Sustainability Kiosks which the Sustainability Office manages. Currently there are Kiosks in LInC, the MU, the Valley Library and the SEC.

## QR Codes

Use [this website](https://www.qrcode-monkey.com) for generating new QR codes (if needed), for the `/#/sec` page (https://osu-sustainability-office.github.io/sustainability-kiosks/#/sec)

- According to [their About Page](https://www.qrcode-monkey.com/#about), you get links that last forever (no expiring), and no need to make an account or pay to use it

## Software

The kiosks all essentially run a browser which connects to a Vue application we run on GitHub Pages.

- **GitHub Repository: **[https://github.com/OSU-Sustainability-Office/sustainability-kiosks](https://github.com/OSU-Sustainability-Office/sustainability-kiosks)
- **Deployed Page: **[https://osu-sustainability-office.github.io/sustainability-kiosks/#/](https://osu-sustainability-office.github.io/sustainability-kiosks/#/)

## Credentials

- See this document: https://drive.google.com/file/d/1NWv2sBFblABVEjcZgctbjFyZU2mPDTus/view?usp=drive_link
  - You will need to be a paid OSU Sustainability Office employee to access this

## MU Kiosk (Windows Pro Running Kioware)

### Notes:

Located in the MU Commons near all the inside restaurants (Panda Express, TOGO, and whatever else is currently there). Computer is mounted on a mini-VESA mount (I _think_ it’s mini-VESA, you may want to double-check before performing an upgrade).

### Physical Access:

The kiosk itself is on a mount which is easily detachable via unhooking the lock contraption on the bottom of the mount. **Be careful when unhooking the lock, the kiosk may immediately start to fall**. There should be a padlock keeping this detachable lock contraption in place, ideally the _master-brand key_ on the master key set for meter reads should unlock it--otherwise you will want to contact Mike Mayers (building manager at MU) for assistance (the code).

## LINC Kiosk (Porteus OS)

### Notes:

Located under the main staircase on the first floor of LINC, the LINC kiosk computer is an Intel NUC which runs [Porteus OS](https://porteus-kiosk.org/) rather than kioware. Unlike the Kioware kiosks this one can’t be easily modified since there’s no code to unlock the kiosk and reconfigure it. From my limited understanding, to change a kiosk setting would require re-installing Porteus OS which luckily enough is relatively easy.

#### How to re-install Porteus OS & change settings:

To re-install Porteus OS you’ll want to make a bootable USB drive using the .ISO file from [https://porteus-kiosk.org/](https://porteus-kiosk.org/) and then some usb-formatting utility (e.g.** win32diskimager** or try another one the Porteus OS people recommend--not all of them work). Once you have the USB drive you simply need to plug it in and restart the kiosk and you should be greeted with a set-up wizard (you shouldn’t need to mess around with the BIOS since it looks like it already prioritizes USB drives as boot drives).

The settings are currently enabled on the kiosk are as follows:

- It’s configured to automatically connect to eduroam via wifi (uses my credentials at the moment)
  - If you don’t want to add your own credentials (which is smart) you’ll need to contact the building manager @ LiNC to add the device to the Ethernet port behind the wall. For assistance with this I recommend contacting Martin.
- It uses chrome
- The navigation bar is disabled
- It automatically restarts the session after 5 minutes of inactivity
- has a custom home page of [https://osu-sustainability-office.github.io/sustainability-kiosks/](https://osu-sustainability-office.github.io/sustainability-kiosks/)

It’s highly recommended that you heavily test the kiosk in the office prior to reinstalling the kiosk in LINC.

**PREVIOUSLY ENCOUNTERED PROBLEMS & SOLUTIONS:**

- **After making usb bootable, it’s not longer capable of being reformatted in windows to the point where it doesn’t even show up in the File Explorer:**
  - **[Rufus ](https://rufus.ie/en/)**is a good way of reformatting a seemingly broken USB drive.
  - Windows OS utilities are really fickle and don’t work in a lot of edge cases.
- **Can’t select .iso file in win32diskimager**
  - Change expected file extension to “.\*” and then the program should allow for selecting an .iso image.

## Valley Library Kiosk (Porteous OS)

This is a pretty intimidating kiosk located outside of JAVA II which is on a sliding stand thing with two phillips screwdrivers on the bottom. To get at the kiosk computer you’ll need the help of another person to slide the wall monitor off the hinges and gently onto the ground. At this point you just need to install the kiosk computer.

This Kiosk computer was recently upgraded to an Intel Compute Stick.

## SEC Kiosk

- According to Milan, this is set up by UHDS - some kind of “mobile windows distro”, or “regular windows in kiosk mode”

## General Info

You can get to the kiosk homepage on a desktop at this address:

[http://fa.oregonstate.edu/sustainability-osu](http://fa.oregonstate.edu/sustainability-osu)

**Attract Screens**

- These screens are a slideshow that is designed to give people brief information that will bring them into the kiosk. These can be images or video screens. As soon as the screen is touched you get sent to the kiosk homepage.

**Library**

- 1920x1080
- Bring Keyboard and Mouse
- The library kiosk is our large kiosk. It is located outside of Java II and sees a lot of traffic. It is good to make a screen for our events that shows as an attract screen on this kiosk.

**MU**

- 1280x768
- USB doesn’t work
- This kiosk is located by Joe’s Burgers (or whatever is there in the future _twilight zone soundtrack_), it is a very small device and doesn’t see as much traffic as our library kiosk does, but it is equally as important to keep updated.

**SEC**

- 1920x1080
- This kiosk is located directly across from the small elevator, next to the restrooms on the first floor. For support for this kiosk, submit a ticket to UHDS IS at: uhds.link/support.
