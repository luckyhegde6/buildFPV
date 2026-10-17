# Practical FPV checklists

Use these as prompts, not a substitute for hardware-specific manuals, flight-controller documentation, or local operating rules. Tick an item only after you have personally checked it. Mark anything uncertain as **NOT VERIFIED** instead of assuming it is correct.

## A. Before spending money

- [ ] Write down the goal: indoor whoop, outdoor freestyle, racing, cinematic, or digital-video experimentation.
- [ ] Decide where you can lawfully and safely fly; verify current local requirements before choosing an aircraft.
- [ ] Set a total budget including radio (already owned), aircraft, batteries, charger, goggles/display, tools, spare propellers, repairs, and protective storage.
- [ ] Pick one video ecosystem before buying goggles, camera, and VTX/air unit.
- [ ] Confirm the receiver supports **2.4 GHz ExpressLRS** and can bind to the Pocket ELRS version.
- [ ] Verify the FC/ESC stack mounting pattern, frame space, board dimensions, stack height, and connector orientation.
- [ ] Verify battery cell-count voltage is supported by the FC, ESC, VTX/air unit, and any onboard regulator.
- [ ] Check ESC current capability against expected motor/prop/battery load using reliable manufacturer data.
- [ ] Check motor mounting, stator size/KV, propeller size/pitch, frame clearance, and intended battery voltage as a system.
- [ ] Check connector type and wire polarity; do not assume matching plugs guarantee matching polarity.
- [ ] Confirm firmware support and an accessible recovery/restore path for the exact FC and VTX hardware.
- [ ] Add official datasheet/product links to the bill of materials; record open questions before checkout.
- [ ] Ask an experienced FPV builder to review the proposed parts list.

## B. Radio + Liftoff setup

- [ ] Install batteries that meet the RadioMaster Pocket manual's requirements; inspect polarity and battery condition.
- [ ] Install the radio antenna **before powering on** the radio, as required by the Pocket quick-start guide.
- [ ] Connect the Pocket to the computer with a known data-capable USB-C cable.
- [ ] If prompted, select the joystick/HID-style USB mode for simulator control rather than a storage mode.
- [ ] Confirm the operating system and Liftoff recognize the radio/controller.
- [ ] Calibrate the sticks using the simulator's input setup.
- [ ] Verify roll, pitch, yaw and throttle one axis at a time.
- [ ] Verify directions and low/high endpoints; throttle must reach minimum at its physical minimum.
- [ ] Check that stick centers are stable and not drifting badly.
- [ ] Assign and test a convenient simulator arm/disarm control, if supported.
- [ ] Save the working setup or note the settings and take a screenshot.

## C. Every simulator session

- [ ] State one skill goal before starting (for example: smooth yaw turns or a clean figure-eight).
- [ ] Use the same aircraft preset and rates for the session unless that change is itself the experiment.
- [ ] Warm up with small, controlled stick inputs before increasing speed.
- [ ] Practise in a forgiving open space before gates, gaps, or tight obstacles.
- [ ] Repeat the drill enough times to spot consistency, not just one lucky success.
- [ ] After a crash, identify the likely cause and choose one corrective drill.
- [ ] End with a simple recovery/landing drill.
- [ ] Log duration, drill, approximate crashes, what improved, and the next task.

## D. Battery and workbench safety

- [ ] Inspect each battery for puffing, punctures, damaged wires/connectors, unusual heat, or impact damage.
- [ ] Use a charger and settings appropriate for the exact chemistry and cell count.
- [ ] Balance-charge multi-cell LiPo packs when required by the charger/battery system.
- [ ] Charge in a suitable fire-conscious area, attended, away from combustible materials.
- [ ] Never use a visibly damaged or suspicious pack; isolate it safely and follow local disposal guidance.
- [ ] Disconnect the flight battery before soldering, changing wiring, or connecting/disconnecting power leads.
- [ ] Use eye protection and ventilation for soldering; secure the workpiece and avoid shorts.
- [ ] Keep loose screws, metal tools, and solder debris away from exposed electronics and battery leads.
- [ ] Use a smoke stopper/current-limited method where appropriate for first power-up; understand its limits.

## E. Propeller-off bench setup — all boxes are mandatory before considering flight

**Remove every propeller before any USB configuration, motor test, receiver/failsafe test, or bench troubleshooting.**

- [ ] All propellers removed and stored away from the work area.
- [ ] Frame, fasteners, stack, antenna mounts and wiring visually inspected.
- [ ] No exposed conductor, solder bridge, pinched wire, stray screw, or obvious short.
- [ ] Battery polarity, connector wiring and voltage ratings checked against exact manuals.
- [ ] Correct flight-controller firmware target selected for the exact board revision.
- [ ] FC orientation matches the physical mounting orientation.
- [ ] Radio and receiver firmware/configuration are compatible, and binding is confirmed.
- [ ] Receiver channel mapping matches the intended stick directions in the configurator.
- [ ] Arming switch is deliberate and easily reachable; disarm action is understood and tested.
- [ ] Failsafe behavior is configured and tested using the official procedure with props removed.
- [ ] Motors are assigned to the expected outputs and rotate in the intended direction.
- [ ] FC gyro/orientation indication responds correctly when the frame is moved by hand.
- [ ] Battery voltage/current readings and regulated supply behavior are plausible.
- [ ] Video system works and its antenna is securely fitted before any VTX power-on.
- [ ] No unexpected heat, smell, smoke, resets or abnormal current draw.
- [ ] Configuration backup and hardware/firmware versions are recorded.
- [ ] An experienced pilot/builder has reviewed the setup and unresolved questions are closed.

If any item is uncertain, do not install propellers or fly yet.

## F. Outdoor flight-day gate

- [ ] Current rules, location permissions, airspace restrictions, and any registration/authorization requirements have been checked from official sources.
- [ ] Weather, wind, visibility, and site conditions are appropriate.
- [ ] Area is clear of bystanders, roads, animals, buildings, and other aircraft; a safe landing area is available.
- [ ] Aircraft is mechanically sound; props are correct, undamaged, and installed in the correct positions only after bench checks are complete.
- [ ] Battery is secured; leads cannot reach props; antennas are secure and unobstructed.
- [ ] Radio and aircraft batteries are charged and in sound condition.
- [ ] Correct model selected on the radio; link quality/telemetry and receiver connection are confirmed.
- [ ] Video reception, VTX settings, and antenna are checked in accordance with manufacturer instructions and local RF rules.
- [ ] Arming, disarm, and failsafe behavior have already been verified during prop-off tests.
- [ ] First flights are low-risk and conservative, ideally with an experienced pilot present.

## G. After flight or a crash

- [ ] Disarm promptly and disconnect the battery before handling or inspection.
- [ ] Check battery temperature/condition; isolate damaged packs and do not recharge a questionable pack.
- [ ] Inspect props, motors, frame arms, stack screws, antenna mounts, camera, connectors, and wires.
- [ ] Look for loose hardware, cracked carbon, bent shafts, damaged insulation, and debris in motors.
- [ ] Record the event and any damage before making changes.
- [ ] Change one thing at a time, then repeat the relevant prop-off checks.
- [ ] Back up configuration after known-good changes.

## H. Troubleshooting discipline

- [ ] State the symptom precisely and record what changed immediately before it began.
- [ ] Make the aircraft safe first: disarm, disconnect battery, and remove props before bench work.
- [ ] Check power, wiring, ports, model selection, firmware target, and version compatibility before random reflashing.
- [ ] Reproduce the issue with one variable changed at a time.
- [ ] Record error messages, LEDs, versions, photos, and exact steps.
- [ ] Check official documentation/issues for the exact hardware/firmware version.
- [ ] Never copy a CLI dump, firmware target, or pinout from a different board without proving compatibility.
- [ ] Restore from a known-good backup if appropriate; document the verified fix.


## Daily Liftoff habit

- [ ] Pick one duration only: 5 / 10 / 15 / 20 / 30+ minutes.
- [ ] Record the actual radio used: Pocket ELRS / Boxer / TX16S or exact other model.
- [ ] Pick one drill before starting.
- [ ] Record one win, one difficulty and one next-session focus.
- [ ] Save a screenshot or replay if captured; note the track and settings for race times.
- [ ] Compare lap times only on the same track/settings.

Template: [`docs/learning-log/templates/daily-session.md`](learning-log/templates/daily-session.md). You can also log sessions as issues using `.github/ISSUE_TEMPLATE/daily-liftoff-session.yml`.
