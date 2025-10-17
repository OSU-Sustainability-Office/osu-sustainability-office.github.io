---
title: Kiosks
description: Kiosks / Kiosks Website Documentation
---

This document contains important information about managing the several Sustainability Kiosks which the Sustainability Office manages. Currently there are Kiosks in LINC, the MU, the Valley Library and the SEC.

## Kiosk Website Info

The kiosks all essentially run a browser which connects to a Vue application we run on GitHub Pages.

- **GitHub Repository:** [https://github.com/OSU-Sustainability-Office/sustainability-kiosks](https://github.com/OSU-Sustainability-Office/sustainability-kiosks)
- **Deployed Page:** [https://osu-sustainability-office.github.io/sustainability-kiosks/#/](https://osu-sustainability-office.github.io/sustainability-kiosks/#/)

## Credentials

- See this document: https://drive.google.com/file/d/1NWv2sBFblABVEjcZgctbjFyZU2mPDTus/view?usp=drive_link
  - You will need to be a paid OSU Sustainability Office employee to access this

## MU Kiosk (Windows Pro Running KioWare)

### Kiosk Configuration

- See [KioWare](#kioware)

### Physical Access

If for some reason you need hardware level access, the kiosk itself is on a mount which is easily detachable via unhooking the lock contraption on the bottom of the mount. **Be careful when unhooking the lock, the kiosk may immediately start to fall**. There should be a padlock keeping this detachable lock contraption in place, you will want to contact Mike Mayers (building manager at MU) for assistance (the padlock code).

### Additional Information

- 1280x768
- USB port on the left side of the kiosk computer, bring a mouse / keyboard / USB hub for debug if needed
- Located in the MU Commons on the left wall when facing the restaurants. It is a very small device and doesn’t see as much traffic as our library kiosk does, but it is equally as important to keep updated.
- Computer is mounted on a mini-VESA mount (I _think_ it’s mini-VESA, you may want to double-check before performing an upgrade).

## LINC Kiosk (Porteus Kiosk)
Located under the main staircase on the first floor of LINC.  

### Hardware and OS
The LINC kiosk computer is an Intel NUC which runs [Porteus Kiosk](https://porteus-kiosk.org/) rather than KioWare. Unlike the KioWare kiosks this one can’t be easily modified since there’s no code to unlock the kiosk and reconfigure it.

### Configuration Changes
To change a kiosk setting, you will need to re-install Porteus Kiosk, which used to be relatively easy, but they have since moved to a paid model and we no longer have access to the files we need to re-install it.

### Alternative Solution
If you need to change a kiosk setting or if the kiosk OS fails and will no longer work, you will need to use an alternative solution that is outlined [in this document](https://docs.google.com/document/d/1SSehenWVNsSmiOiyzWv8hSBRxiFihl54C7RGu5SlUtc/edit?tab=t.0#heading=h.wf398kazbr04) (you must be a paid OSU Sustainability Office employee to access this document).

## Valley Library Kiosk (Porteus Kiosk)

This is a pretty intimidating kiosk located outside of JAVA II which is on a sliding stand thing with two phillips screwdrivers on the bottom. To get at the kiosk computer you’ll need the help of another person to slide the wall monitor off the hinges and gently onto the ground. At this point you just need to install the kiosk computer.

This Kiosk computer is an Intel Compute Stick with only one USB port, so you will need to bring a USB hub (Brandon T. has one) to connect a keyboard and mouse to it.

### Additional Information

- 1920x1080
- Bring Keyboard, Mouse, and USB Hub
- The library kiosk is our large kiosk. It is located outside of Java II and sees a lot of traffic. It is good to make a screen for our events that shows as an attract screen on this kiosk.

## SEC Kiosk

- According to Milan, this is set up by UHDS - some kind of “mobile windows distro”, or “regular windows in kiosk mode”

### Additional Information

- 1920x1080
- This kiosk is located directly across from the small elevator, next to the restrooms on the first floor. For support for this kiosk, submit a ticket to UHDS IS at: [uhds.link/support](https://uhds.link/support).

## Generating QR Codes

Use [this website](https://www.qrcode-monkey.com) for generating new QR codes (if needed), for the `/#/sec` page (https://osu-sustainability-office.github.io/sustainability-kiosks/#/sec)

- According to [their About Page](https://www.qrcode-monkey.com/#about), you get links that last forever (no expiring), and no need to make an account or pay to use it

## Adjusting KioWare Configuration
1. Starting from the upper left corner of the screen, tap the 4 corners clockwise.  
   - It may take more than 4 taps; keep going clockwise until it works.  
   - [Reference](https://www.kioware.com/faqs.aspx?id=-162698673)  
2. Enter the 4-digit unlock code (see [credentials](#credentials)).  
   - This will automatically log you out.  
3. Switch to the **admin** Windows user and enter the Windows Admin password (see [credentials](#credentials)) to log in.  
4. Make sure you have a keyboard and mouse handy for configuration (or use the Windows on-screen keyboard).  
5. Open the **KioWare Client Configuration** program.  
### Additional Information
- **Current Configuration**
  - Resets after 5 minutes of inactivity  
    - [Reference](https://www.kioware.com/docs.aspx?u=configattracttab.html&p=3&v=8.6&t=4#AttractTab)
  - The kiosk webpage automatically refreshes within 10 minutes after new changes are pushed to the `sustainability-kiosks` GitHub repo (handles content updates).
  - A daily hard refresh also occurs at 6 AM as a failsafe.
- **Attract Screens**
  - These are slideshow screens (images or videos) that provide brief information to draw people in.  
  - Touching the screen sends the user to the kiosk homepage.  
  - [Reference](https://www.kioware.com/docs.aspx?u=configattracttab.html&p=3&v=8.6&t=4#AttractScreens)
- **Navigation**
  - KioWare includes built-in functionality for forward and backward navigation (swipe left/right on screen).  