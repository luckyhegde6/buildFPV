# 🎮 RadioMaster Pocket — Button & Setup Guide

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/radiomaster-pocket-controls-high-resolution.svg" alt="High-resolution RadioMaster Pocket control map showing switches, sticks, menu keys, typical Mode 2 functions and USB simulator versus real-aircraft setup" width="1200" />

*Use this enlarged schematic to recognise the front controls. Switch functions and menu labels can vary by EdgeTX version and model configuration; verify them on your radio and in the official manual.*

[Compact front control map](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/pocket-control-map.svg)

**Your radio:** RadioMaster Pocket ELRS, running EdgeTX. Use this page to identify each control, create a reliable Liftoff profile, and avoid mixing simulator setup with real-aircraft RF settings.

## 🎥 Video learning resource

- [RadioMaster / RC setup playlist](https://youtube.com/playlist?list=PLwoDb7WF6c8lhlzE6_iA2X50bk3pIYcbb) — use it alongside the control map and setup checklist below. Confirm menu names and firmware-specific steps against the manual for your exact radio/EdgeTX version.

### RadioMaster Pocket setup walkthrough

[![RadioMaster Pocket — how to set up and bind a drone](https://img.youtube.com/vi/GgaWMvAHZi8/hqdefault.jpg)](https://www.youtube.com/watch?v=GgaWMvAHZi8)

Watch [RadioMaster Pocket — How To Set Up and Bind a Drone — Step by Step](https://www.youtube.com/watch?v=GgaWMvAHZi8) alongside this button guide. Compare menu names and binding/Betaflight steps with your exact Pocket, EdgeTX, ELRS and receiver versions. For simulator-only input, use USB joystick mode; binding a real drone receiver is a separate task.


Official links: [Pocket M2 product page](https://radiomasterrc.com/products/pocket-radio-controller-m2) · [RadioMaster manuals](https://radiomasterrc.com/pages/user-manuals) · [EdgeTX manual](https://manual.edgetx.org/) · [EdgeTX USB Joystick docs](https://github.com/EdgeTX/edgetx-user-manual/blob/2.12/color-radios/model-settings/model-setup/usb-joystick.md).

## ⚠️ Before power-on (from the supplied A1.8 quick-start guide)

- Fit/unfold the antenna before powering the internal RF module. Do not transmit without it.
- Use two compatible 3.7 V 18650 Li-ion cells; the radio's specified operating voltage is 6.6–8.4 V. Check polarity, condition and the exact manual's charging cautions. Never charge unattended.
- The A1.8 guide recommends Dynamic Power and 500 Hz or lower packet rate for the internal ELRS module as a heat/battery-life trade-off. This applies to RF setup, not the simulator's USB Joystick input. Leave settings at a known documented baseline until you have a reason to change them.
- Do not firmware-flash based on a video alone. Confirm the hardware target and version in the current RadioMaster/EdgeTX/ExpressLRS documentation.

## 🕹️ What the controls do

| Control | Plain-English explanation | Beginner tip |
|---|---|---|
| Left stick | Mode 2: throttle up/down, yaw left/right. | Throttle normally stays where you leave it instead of springing to centre. |
| Right stick | Mode 2: pitch up/down, roll left/right. | Make small movements; smooth inputs help more than aggressive stick travel. |
| SA / SD | Two-position latching switches on the Pocket layout. | Their function depends on your model's channel mapping. Verify it, never assume. |
| SB / SC | Position switches (often 3-position). | Check detents and watch EdgeTX channel monitor to identify Low/Mid/High. |
| SE | Momentary switch that returns when released. | Do not use as your only arm/disarm switch. |
| S1 | Rotary analog pot. | Keep it at a known position until you've intentionally assigned it. |
| Trim keys | Small trim adjustments. | For FPV Acro, usually leave trims centred; diagnose drift instead of trimming around it. |
| SYS | System/tools navigation. | Locate the ExpressLRS Lua tool here; short/long press behaviour varies by screen/EdgeTX version. |
| MDL | Model selection/setup. | Check the active model name before connecting to a real quad. |
| RTN | Back/cancel. | Back out of a menu and verify settings were saved. |
| PAGE> / PAGE< | Next/previous menu page. | Use them to move through tabs. |
| TELE | Telemetry/screen shortcut. | Useful for telemetry or channel-monitor screens when configured. |
| Menu wheel | Scroll; press to select. | Confirm the highlighted row before pressing. |
| Power | Radio power control. | Follow the long-press behaviour in the current manual. |
| USB-C | Charging and data. | Liftoff needs a data-capable cable and USB Joystick mode. |
| Antenna | 2.4 GHz RF antenna. | Unfold/install before using the internal RF module; never transmit without it. |
| SD card / external module bay | Firmware/configuration storage and optional compatible RF module. | Advanced features; not required for simulator training. |

## 🧰 Rear gimbal tension & stick-mode adjustment

![Rear gimbal adjustments from the supplied RadioMaster Pocket diagram](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/pocket-gimbal-adjustment.png)

The manufacturer's adjustment legend says:

- **L–R / M1–M2 mechanism:** changes self-centring behaviour for the throttle/elevator gimbal. In Mode 2, left vertical is throttle (not self-centring), and right vertical is pitch (self-centring). Make this change only intentionally and follow the exact printed diagram.
- **T:** throttle-stick tension. Clockwise increases tension; counter-clockwise reduces it.
- **C:** vertical stick-axis tension. Clockwise increases tension; counter-clockwise reduces it.
- **D:** horizontal stick-axis tension. Clockwise increases tension; counter-clockwise reduces it.

Use small adjustments and don't force the screws to their stop. RadioMaster's current [Pocket M2 page](https://radiomasterrc.com/products/pocket-radio-controller-m2) documents the adjustment points.

## 🧭 Two model profiles: don't mix simulation and flight

### `SIM-Liftoff`

- [ ] Create a separate EdgeTX model named `SIM-Liftoff`.
- [ ] Connect with a data-capable USB-C cable; choose **USB Joystick** if prompted.
- [ ] Start with **Classic** USB Joystick mode. EdgeTX recommends turning internal and external RF off while using USB joystick mode.
- [ ] Calibrate in Liftoff/OS settings; confirm roll, pitch, throttle and yaw one axis at a time.
- [ ] Verify throttle-low is the simulator's minimum and save the Liftoff controller profile.
- [ ] Log OS, EdgeTX version, cable used and any changed input mapping.

### `QUAD-ELRS` (for a real compatible quad only)

- [ ] Create a separate model; set the internal ELRS RF protocol as required by your EdgeTX/module version (commonly `CRSF`).
- [ ] Verify the precise transmitter and receiver hardware target, band and firmware before updating.
- [ ] Follow [ExpressLRS getting started](https://www.expresslrs.org/quick-start/getting-started/) and [binding](https://www.expresslrs.org/quick-start/binding/).
- [ ] Verify the receiver and AUX channel mapping in Betaflight; configure ARM in the Modes tab and test the physical switch.
- [ ] Save radio and flight-controller backups. Test failsafe and motor direction with **all props removed**.

> [!CAUTION]
> USB Joystick and ExpressLRS binding are separate. A successful bind doesn't verify channel mapping, failsafe, arming, motor direction, battery wiring or flight readiness.

## 📚 Menu buttons and common tasks

- **Find ELRS Lua:** open the system/tools area (often via SYS on the Pocket monochrome interface), then select ExpressLRS. Menu labels vary by firmware; use the [RadioMaster manual index](https://radiomasterrc.com/pages/user-manuals) if your screen differs.
- **Create/select a model:** use MDL/model management. Keep `SIM-Liftoff` separate from `QUAD-ELRS`.
- **Inspect channel outputs:** open EdgeTX's channel monitor/outputs view, then move one stick or switch at a time.
- **Save a repeatable setup:** record model name, EdgeTX version, USB Joystick mode, Liftoff input profile and axis mapping in the Learning Journal.
- **Avoid random firmware updates:** backup first and use the exact documented hardware target.

## 🔎 If something doesn't work

| Symptom | First checks |
|---|---|
| PC doesn't see a controller | Data-capable cable → USB Joystick prompt → another USB port → OS controller list. |
| Controls are swapped | Calibrate; check channel monitor; re-map one axis at a time inside Liftoff. |
| Throttle centres | Verify stick mode and gimbal spring configuration. |
| Lua script missing | Check internal RF variant, EdgeTX/SD-card files and current radio manual. |
| Receiver won't bind | Verify ELRS version, band, hardware target, bind phrase and current official procedure. |

## 🎥 Video learning notes

- [Video 1](https://youtu.be/wIqyAFQszfM) — record the video title, channel and relevant timestamps while watching.
- [Video 2](https://youtu.be/fyJ-e2zuqB4) — compare each step to your radio's current EdgeTX menus.
- [Video 3](https://youtu.be/8eGgAS2n3lQ) — record differences and any settings worth verifying in official documentation.
- [RadioMaster Pocket getting started guide](https://youtu.be/cuzHn2Uw0q8) — use alongside the official manual and this page.

The public video pages did not reliably expose titles/captions during this pass, so the first three references are intentionally not assigned inferred titles or transcript-derived claims. The guide uses the official Pocket page, the A1.8 quick-start guide supplied for this project and current EdgeTX/ExpressLRS docs for the verified setup steps.

### ✅ Quick practice today

- [ ] Point to SA, SB, SC, SD, SE and S1 without looking at notes.
- [ ] Confirm your stick mode and four Mode-2 axes.
- [ ] Connect `SIM-Liftoff`; test roll, pitch, yaw and throttle.
- [ ] Complete 5, 10, 15, 20 or 30+ minutes of practice.
- [ ] Log one win, one difficulty and one next focus.
