# 🧩 FPV Drone Parts — One by One

This is the next stop after [[How FPV Drones Work]]. Follow the aircraft from the structure and power source, through flight control and propulsion, then the radio and video systems. Each section explains **what the part does, why it matters, what it connects to, and what to check before choosing or installing it**.

> **Image note:** Photos help you recognise a component, but they are not wiring diagrams. Boards and product revisions vary. Use the exact manufacturer's manual and pinout for all wiring, voltage, connector and firmware decisions.

## High-resolution system overview

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-system-basics-high-resolution.svg" alt="High-resolution vector map of FPV drone components and separate control, video and power links" width="1200" />

*Use this system map before exploring each part below. The signal paths are conceptual; exact connections and voltages vary by hardware.*

## The lineup at a glance

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-drone-overview.svg" alt="Separate enlarged complete FPV drone component overview" width="1200" />

*An enlarged orientation panel before inspecting parts individually.*


![FPV drone parts lineup: structure, power, flight control, propulsion, control radio, video and optional modules](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-parts-lineup.svg)

*Concept art for orientation only. Do not infer exact component placement, pins, motor numbering or wiring from this image.*

![Real-world FPV racing quadcopter components in their installed arrangement](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-components-overview.jpg)

*Photo: [Sw1ngc, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:71188-fpv-components.jpg), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Resized copy; use it for visual orientation, not to infer wiring or exact component compatibility.*

A typical FPV quadcopter can be understood in this order:

1. **Frame** — the structure that holds everything.
2. **Battery and power wiring** — the energy source and its path through the aircraft.
3. **Motors and propellers** — turn electrical power into thrust.
4. **ESC (electronic speed controller)** — controls motor speed.
5. **Flight controller (FC)** — reads pilot commands and sensor feedback, then calculates motor outputs.
6. **Control receiver** — receives the radio's stick commands.
7. **Camera and video transmitter/air unit** — send the live picture to the pilot.
8. **Video receiver and goggles/display** — receive and show the picture.
9. **Antennas** — radiate or receive the relevant radio/video signals.
10. **Optional GPS/GNSS, buzzer and logging** — add navigation data, recovery help and troubleshooting information.

The physical arrangement differs between builds. A compact whoop may combine many electronics on one AIO board; a larger quad may use a separate FC and 4-in-1 ESC stack.

## 1. Frame — the skeleton

For frame geometry choices and assembly tooling, see [Balanced X vs Deadcat](Frame-Geometries-Balanced-X-vs-Deadcat.md), [Balanced X assembly](Balanced-X-Frame-Assembly.md), [Deadcat assembly](Deadcat-Frame-Assembly.md), and the [frame-size guides](Drone-Categories-and-Size-Guide.md).

![Frame diagram showing arms, centre plates and motor mounting points](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-frame.svg)

![Real-world carbon-fibre drone frame kit](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-frame-kit.png)

*Photo: [Johndeinder, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Drone_frame_kit_main_image.png), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Resized copy; the photo illustrates a frame kit, not a build-specific fitment guide.*

**Job:** The frame holds the motors at fixed positions and protects/supports the electronics, battery and camera. Its geometry sets the motor-to-motor size and influences stiffness, durability, weight and available mounting space.

**What to look for:** Arms, central plates, motor mounting holes, camera cage, FC mounting pattern, battery mounting area and room for antennas/wires.

**Why it matters:** A cracked arm or loose motor mount can affect vibration, flight control and structural safety. Frame size also constrains propeller size and component fit.

**Check before building:** Confirm the frame supports the intended propeller diameter, motor mount pattern, FC/ESC mounting size, camera format and battery dimensions. Check screws do not protrude into windings or boards.

## 2. LiPo battery — the energy source

See [Motor, Propeller and Battery Compatibility](Motors-Propellers-and-Battery-Compatibility.md) for cell-count and chemistry trade-offs, and [FPV Chargers, LiPo and Li-ion Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md) for charging procedures and charger selection.

![LiPo battery power path from battery through ESC or power distribution to motors and regulated electronics](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-battery-power.svg)

![Real-world lithium-polymer drone battery pack](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-lipo-battery.jpg)

*Photo: [Project Kei, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Drone_li-po_battery.jpg), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Resized copy; connector and pack shown are examples, not a voltage or polarity reference.*

**Job:** The lithium-polymer (LiPo) battery supplies energy to the aircraft. Cell count is written as **S**: for example, a 4S pack has four cells connected in series.

**What it connects to:** Battery leads normally feed the ESC/power distribution path. Regulators or board power circuits supply other components at their required voltages. The exact arrangement depends on the build.

**Why it matters:** Battery voltage must be supported by the ESC, motors, FC power input and video system. Capacity affects flight time and mass; discharge capability must suit the current demand.

**Check before using:** Inspect the pack and leads for damage or swelling, verify polarity and voltage compatibility, and use a suitable balance charger. Never assume a plug shape alone proves voltage or polarity compatibility. Disconnect the pack before soldering or changing wiring.

## 3. Power distribution and voltage regulators

## 3. Power distribution and voltage regulators

![Real-world FPV quadcopter with components installed around the frame and central electronics area](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-components-overview.jpg)

*Photo: [Sw1ngc, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:71188-fpv-components.jpg), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Resized copy; board pads are not legible and the photo is not a power-distribution wiring reference.*

**Job:** Power wiring and distribution carry battery power to the devices that need it. Regulators provide a suitable voltage for electronics that cannot accept raw battery voltage.

**Common forms:** Battery pads on an ESC, a power distribution board (PDB), and regulated outputs on an FC or separate regulator. Some AIO boards integrate much of this circuitry.

**Why it matters:** A component can be damaged by excessive or incorrect voltage. Poor solder joints, undersized wiring or shorts can create heat, resets or a complete power failure.

**Check before connecting:** Read the exact board's voltage input range and pad labels. Confirm which pads are battery voltage (VBAT), ground (GND) and regulated outputs; don't rely on a similar-looking board photo.

## 4. Brushless motors — create rotation

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-motors-props.svg" alt="Brushless motor and propeller type comparison with motor KV notes" width="1200" />

*Separate motor / propeller panel; verify dimensions and motor/ESC compatibility for your build.*


![Brushless motor diagram with rotor bell, shaft, stator and windings](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-motor.svg)

![Real brushless hobby motor with an electronic speed controller and propeller](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-brushless-motor-esc.jpg)

*Photo: [Drew Dollas, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Brushless_ESC_and_propellor.jpg), licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Resized copy; this is a representative brushless motor/ESC assembly, not a specific FPV motor recommendation.*

**Job:** The four brushless motors spin the propellers. The FC changes the requested output for each motor through the ESC to control thrust and attitude.

**How to recognise them:** Each motor has a stator, a bell/rotor and a shaft or propeller mount. Motor specifications commonly include stator dimensions and a KV rating.

**KV in plain language:** KV describes approximate unloaded RPM per volt; it is not a direct measure of thrust or motor quality. The appropriate motor depends on propeller size, battery voltage, aircraft weight and intended flying style.

**Check before choosing:** Verify mounting pattern, shaft/propeller attachment, voltage range, propeller suitability and current draw against ESC capability. Motor wire order and spin direction must be checked during setup with propellers removed.

## 5. Propellers — push air to make thrust

![Propeller anatomy showing the blade, leading edge, trailing edge, diameter and pitch concepts](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-propeller.svg)

![Real-world quadcopter propeller close-up](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-propeller.jpg)

*Photo: [Ryan Decker, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Quadcopter_Propeller.JPG), licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Resized copy; check propeller size and rotation against the build and firmware.*

**Job:** Propellers accelerate air and produce thrust. Total thrust greater than weight makes the quad climb; lower thrust makes it descend. Tilting the aircraft points some thrust sideways, which moves it laterally.

**CW and CCW:** A conventional quad uses two clockwise and two counter-clockwise rotating propellers to balance reaction torque. The correct propeller type and installation depend on motor direction and the selected firmware layout.

**Pitch and size:** Diameter and pitch affect thrust, current draw, response and efficiency. Larger or more aggressive props can overload a motor/ESC combination if not matched carefully.

**Safety:** Props are sharp and can cause serious injury. Keep all propellers off during bench setup, firmware work, receiver tests and motor-direction checks. Install them only after configuration checks are complete.

## 6. ESC — electronic speed controller

![Dedicated electronic speed controller diagram showing battery power, motor outputs and FC connection](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-esc.svg)

![A standalone electronic speed controller for a brushless motor](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-esc.jpg)

*Photo: [1sfoerster, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Esc2.jpg), licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Resized copy; this is a traditional three-wire RC ESC example, not a modern 4-in-1 FPV ESC pinout.*

**Job:** The ESC converts commands from the FC into electrical switching that drives the brushless motors at the requested speed.

**Common form:** A **4-in-1 ESC** drives all four motors from one board. A separate ESC board may stack under the FC, while an AIO can place the FC and ESC circuitry on one PCB.

**What to recognise:** Battery pads, motor outputs, FC connection pads/connector, current sensing and sometimes a heatsink. Exact placement and pad names vary by revision.

**Check before choosing:** Confirm supported battery voltage, current rating, firmware/protocol compatibility, physical mounting and motor-pad layout. Current ratings are not a substitute for checking the motor/propeller combination and cooling.

## 7. Flight controller (FC) — the onboard computer

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-flight-controller.svg" alt="Expanded flight-controller functional anatomy with MCU, IMU, flash, UART and ESC outputs" width="1200" />

*Conceptual block layout only; never infer board pad positions from it.*


![Flight controller diagram showing MCU, gyro, USB and I/O pads](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-flight-controller.svg)

![FC/ESC stack compared with an all-in-one board](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-fc-esc-aio.svg)

![Real flight-controller circuit board](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-flight-controller.jpg)

*Photo: [Unknownlfcg, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Afro-Naze32-6DOF-Flight-Controller-Board-For-QAV250-ZMR250-Quadcopter(1).jpg), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Resized copy of a specific older board; use the current manufacturer's documentation for model-specific pad names and wiring.*

**Job:** The FC receives control-channel data and sensor readings, runs flight-control firmware and produces motor commands. Its gyro measures rotation; the controller compares actual movement with the pilot's requested movement and makes corrections.

**What may be on the board:** Processor, gyro, USB connector, receiver inputs, motor outputs, OSD/video connections, blackbox storage and regulated power circuits. Features differ by model and revision.

**FC stack vs AIO:** On a stack, the FC is usually a separate board connected to an ESC board. An **AIO (all-in-one)** combines FC and ESC circuitry on one PCB; some models include additional hardware too.

**Check before setup:** Confirm the exact firmware target, board orientation, receiver protocol, UART/pad assignments, input voltage and manual. A photo of a different board revision is not an authoritative pinout.

## 8. Gyroscope and accelerometer — the motion sensors

![Gyroscope and accelerometer visual explaining sensor feedback](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-gyro.svg)

![Example flight-control board used to illustrate where motion sensors are integrated](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-flight-control-board.jpg)

*Photo: [Maxorazon, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:UAV_Flight_control.jpg), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Resized copy; on FPV builds the gyro/accelerometer are usually small ICs on the flight controller, not a separate plug-in board. This UAV board is illustrative, not an FPV wiring guide.*

**Job:** The gyro measures how quickly the aircraft rotates around its axes. The accelerometer measures specific force and helps estimate orientation, especially for self-level modes.

**Why the gyro matters:** Fast stabilisation depends on gyro feedback. The FC repeatedly compares desired and measured rotation and adjusts motor outputs. GPS is not a replacement for this high-rate motion measurement.

**What affects readings:** Vibration, loose mounting, damaged propellers, motor problems and incorrect board orientation can make sensor data less useful.

**Check:** Mount the FC as specified, set its orientation correctly in firmware, and review sensor status before flight. Do not use a visual guess to infer board orientation.

## 9. Control receiver — listens to your radio

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-radio-control-link.svg" alt="Radio transmitter, ExpressLRS RF link, receiver and flight controller" width="1200" />

*Separate radio-link panel; confirm the protocol and receiver compatibility.*


![Radio transmitter sends commands over the control link to an ELRS receiver on the aircraft](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-elrs-receiver.svg)

![Real-world compact radio-control receiver board and antenna](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-control-receiver.jpg)

*Photo: [SokilFPV, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:TBS_Crossfire_Nano_receiver_(XF_nano).jpg), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Resized copy; this specific example is TBS Crossfire, not ELRS. It illustrates the physical form of a separate receiver only.*

**Job:** The receiver on the aircraft receives commands from the transmitter, such as the RadioMaster Pocket, and passes channel data to the FC. ExpressLRS (ELRS) is one common control-link system.

**Signal path:** `Radio sticks → transmitter RF link → aircraft receiver → FC`

**Not the same as video:** The control receiver does not receive the camera picture. The video link is a separate system with its own transmitter/air unit, receiver and antennas.

**Check before setup:** Confirm frequency band, receiver/transmitter protocol and firmware compatibility, antenna placement, UART or input configuration, channel mapping and failsafe behaviour. Successful binding alone does not prove the rest of the aircraft is configured safely.

## 10. FPV camera — captures the view

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-video-system.svg" alt="Camera, video transmitter or digital air unit, antenna and goggles path" width="1200" />

*Separate video-link panel; check camera, VTX or air unit and goggles compatibility.*


![FPV camera anatomy showing lens, body and connection lead](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-camera.svg)

![Real-world Foxeer FPV camera with lens and housing](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-fpv-camera.jpg)

*Photo: [Lucasbosch, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Foxeer_XAT600M_HS1177_FPV_camera.jpg), licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Resized copy; camera size and wiring vary by model.*

**Job:** The onboard camera captures the scene in front of the quad. Depending on the system, it may send an analogue video signal to a VTX or a digital signal to a digital air unit.

**What matters:** Camera format, size, latency, image quality, aspect ratio, connector/pinout and supported voltage. A camera that physically fits may still not be electrically compatible.

**Check:** Confirm exact supply-voltage requirements and wiring from the manufacturer's documentation. Keep camera wiring away from moving parts and inspect the lens/cage for obstructions.

## 11. Video transmitter (VTX) or digital air unit — sends the picture

![VTX or digital air unit with antenna connector and flight-controller/power connections](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-vtx.svg)

![Real-world TBS Unify Pro analogue video transmitter with antenna pigtail](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-vtx.png)

*Photo: [Lucasbosch, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:TeamBlacksheep_(TBS)_Unify_Pro_HV_5.8_GHz_RF_video_transmitter_with_RP_SMA_pigtail_front.png), licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Resized copy of an analogue VTX; digital air units look different, and this is not a wiring or legal power-settings reference.*

**Job:** The aircraft-side video hardware transmits the camera feed to a compatible ground receiver or goggles.

**Analogue vs digital:** Analogue VTX systems and digital systems use different equipment and compatibility rules. Digital systems often call the aircraft unit an **air unit**. The correct goggles/receiver must match the video ecosystem and generation.

**Why antennas matter:** Video hardware needs the correct antenna connection and suitable antenna. Transmitting without an antenna can damage some VTX hardware; follow the manufacturer's instructions before powering it.

**Check:** Verify supported band/channel, legal power settings for your location, required cooling, connector type, antenna polarization and compatibility with your goggles/VRX.

## 12. Video receiver (VRX) and goggles/display — the pilot's view

![Video receiver, FPV goggles and display comparison](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-vrx-goggles.svg)

![Real-world FPV radio controller, quadcopter and FPV goggles](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-radio-goggles.jpg)

*Photo: [Wacou123, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Remote_Control_FPV_drone_FPV_Goggles.jpg), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Resized copy; equipment in this photo is one example of a control/video setup, not a compatibility guarantee.*

**Job:** The ground-side receiver takes in the aircraft's video transmission and displays it through goggles or a screen. Some systems integrate the receiver into the goggles; others use an external VRX.

**Compatibility rule:** A VRX/goggle system must support the aircraft's video system. Do not assume goggles work with every VTX just because the antenna connector fits.

**Check:** Confirm system generation, frequency support, antenna connector/polarization, power supply and whether an external receiver is required. Test video and recording separately from control binding.

## 13. Antennas — transmit and receive radio energy

![Illustration comparing linear, circular-polarized, directional patch and stubby omnidirectional antennas](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-antennas.svg)

![Real-world FPV video antennas: circular-polarized and linear dipole styles](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-antennas.jpg)

*Photo: [Clicklabs, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:FPV_Antennen.jpg), licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Resized copy; connector, frequency band and polarisation must still match the exact system.*

**Job:** Antennas couple radio-frequency energy into or out of the air. The aircraft's control receiver antenna and video antenna serve different links and may use different frequencies.

**Omnidirectional vs directional:** An omnidirectional antenna is useful around the aircraft in many directions. A directional patch focuses more sensitivity in a particular direction and needs appropriate aim.

**Polarisation and connectors:** RHCP/LHCP, antenna band, connector type and orientation all matter. A mechanically fitting connector does not guarantee the right polarity or frequency.

**Check:** Keep antennas clear of carbon, metal and high-current wiring as recommended by the manufacturer; secure them against props and crashes. Match antenna specifications to the exact radio/video system.

## 14. GPS/GNSS module — position and speed data (optional)

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-gps-navigation.svg" alt="GPS satellites, GNSS module and flight-controller navigation data flow" width="1200" />

*Navigation functions depend on the module, firmware support and correct configuration.*


![GPS/GNSS module receiving satellite data and sending it to the flight controller](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-gps.svg)

![Real-world u-blox GPS module circuit board](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-gps-module.jpg)

*Photo: [Markus Bärlocher, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:GPS_ublox_NEO-M6_Chip.jpg), dedicated to the public domain under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Resized copy; this is a GPS module example, not proof of compatibility with a particular FPV FC.*

**Job:** A GNSS module receives satellite signals and provides position and ground-speed data to supported flight-controller firmware. It can support on-screen data, logging or configured rescue/navigation features.

**Important distinction:** GPS/GNSS is slower than the gyro-based feedback used for rapid stabilisation. It does not replace the gyro and should not be assumed to make a quad autonomous or safe by itself.

**Check:** Confirm voltage, UART/pad connection, protocol, mounting/orientation recommendations, antenna view of the sky and firmware configuration. A compass may or may not be integrated; verify the specific module.

## 15. Buzzer, blackbox and other small parts

![Buzzer and Blackbox logging accessories](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-buzzer-blackbox.svg)

![Real-world electromagnetic buzzer component](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-photo-buzzer.jpg)

*Photo: [jdx, via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Electromagnetic_buzzer_06.jpg), licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Resized copy of a general electromagnetic buzzer; FPV lost-model buzzers differ in mounting and power features.*

**Buzzer:** An onboard beeper can help locate a quad after a crash or make status alerts audible. Some are self-powered; others rely on the flight controller and battery. Confirm compatibility and correct wiring.

**Blackbox/logging:** Flight logs can help diagnose oscillation, sensor noise and other flight-control issues. Logging may use onboard flash or a memory card, depending on the FC.

**Capacitors and wiring:** A low-ESR capacitor may be required or recommended to reduce electrical noise on some builds. Wire gauge, solder quality, strain relief and insulation are part of the electrical system—not optional finishing details.

**Check:** Follow the specific ESC/FC manual for capacitor value, polarity and placement. Never guess polarity or connect a part solely because it looks similar to another build.

## The complete system paths

### Control and flight path

`RadioMaster Pocket → ELRS RF link → aircraft receiver → FC + gyro feedback → ESC → motors → propellers → aircraft motion`

### Video path

`Camera → VTX / digital air unit → video link → VRX / compatible goggles or display → pilot`

### Power path

`LiPo battery → power distribution / ESC → motors; regulated outputs supply the FC, receiver and video equipment as specified`

![Custom diagram: sensor feedback, flight controller, ESC and motor output](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-part-fc-sensors.svg)

The project also maintains a compact reusable control-loop diagram at `docs/assets/fpv-control-loop.svg`.

These are logical paths, not pin-by-pin wiring diagrams. The exact circuit depends on the chosen parts.

## Suggested inspection order before first power-up

- [ ] Frame and motor mounts are secure; no visible cracks.
- [ ] Battery voltage/cell count is compatible with every connected component.
- [ ] Solder joints are clean; no solder bridges or exposed conductors.
- [ ] FC, ESC, receiver, camera and VTX/air unit wiring match the exact manuals.
- [ ] Antennas are connected as required before powering RF/video transmitters.
- [ ] **All propellers are removed** for setup and motor tests.
- [ ] Verify receiver channel mapping, failsafe, sensor orientation and motor direction in firmware.
- [ ] Test video reception independently from the control link.
- [ ] Review local regulations and flight-area requirements before outdoor flight.

## Quick knowledge check

1. Which part receives stick commands, and which part transmits the camera view?
2. What is the difference between an FC/ESC stack and an AIO?
3. Why do a quad's propellers use both CW and CCW rotation?
4. Why can't GPS replace the gyro for fast stabilisation?
5. What must you do before testing motors on the bench?

## Continue learning

- [[How FPV Drones Work]] — lift, axes, motor rotation and the feedback loop.
- [[FPV System Basics]] — compare the control, video and power paths.
- [[Hardware Gallery]] — additional product examples and reference photos.
- [[GPS and Flight Controllers]] — explore GNSS and flight-controller integration.
- [[Bench Safety and Flight Readiness]] — safety checks before a real flight.
