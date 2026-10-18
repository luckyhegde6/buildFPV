# 1. FPV system basics

![FPV quadcopter example](assets/fpv-build-concept-ai.jpg)

*Project concept artwork for orientation only; it is not a wiring diagram. Use exact manufacturer manuals for pinouts and board revisions.*

FPV means **first-person view**: a camera on the aircraft sends live video to a display or goggles so the pilot can see from the aircraft's perspective. A typical FPV quad has separate control, stabilization, propulsion, and video systems.

## How the parts fit together

The picture above is a concept overview. This signal-flow sketch is more useful for understanding the jobs each system performs; it is still a learning aid, not a wiring schematic.

```text
Pilot's sticks
    ↓
Radio transmitter (RadioMaster Pocket ELRS)
    )) 2.4 GHz ExpressLRS control link ((
Receiver on aircraft
    ↓ stick/channel data
Flight controller (runs flight-control firmware)
    ↓ motor commands
ESC (electronic speed controller)
    ↓ electrical power switching
Motors → propellers → thrust

Camera → video transmitter / digital air unit
    )) FPV video link ((
Goggles / screen → pilot

Battery → power distribution / voltage regulators → electronics and motors
```

The exact power and signal wiring depends on the chosen hardware. Treat this diagram as a mental model, not a wiring schematic.

## Components in plain language

- **Radio transmitter (TX):** the controller in your hands. The Pocket runs EdgeTX and, in the ELRS version, has an internal 2.4 GHz ExpressLRS radio module.
- **Receiver (RX):** the aircraft-side radio that receives commands and passes channel data to the flight controller. The receiver and transmitter must use compatible RF bands and compatible ExpressLRS firmware/configuration.
- **Flight controller (FC):** the small computer that reads the gyro and receiver data, runs firmware such as Betaflight, and calculates motor outputs.
- **ESC:** switches battery power to the motors. Some builds use a 4-in-1 ESC; others use separate ESCs. It must suit the battery voltage and motor current.
- **Motors and propellers:** turn electrical energy into thrust. Size, KV, propeller dimensions, cell count, and frame must be selected as a matched system.
- **Battery:** usually a LiPo pack on a conventional FPV quad. Cell count changes voltage; capacity and discharge capability affect weight and performance.
- **Camera and video system:** capture and transmit the live view. Analog and digital video systems have different compatibility and cost trade-offs; goggles must support the selected system.
- **Firmware and configurators:** EdgeTX configures the radio; ExpressLRS controls the RC link; flight-controller firmware (often Betaflight on freestyle/racing builds) configures the aircraft. These are separate projects with different update procedures.
- **Recording and stabilization:** DVR records what the pilot sees; an onboard action camera records a separate, often higher-quality video. Gyroflow can stabilize compatible recorded footage when the necessary motion data and camera workflow are available. It is not required to learn to fly.

## Keep the systems separate in your head

![Flight-controller feedback loop](assets/fpv-control-loop.svg)

*The control loop runs continuously: the FC uses sensor feedback to adjust motor outputs. The control link carries pilot commands; the video link carries the camera image. They are different systems.*

1. **Control link:** Pocket ↔ receiver (ExpressLRS).
2. **Flight control:** receiver + sensors → flight controller → ESC/motors.
3. **Video link:** camera → analog VTX or digital air unit → compatible goggles.
4. **Power:** battery and regulators supply the correct voltage/current to each device.
5. **Recording/post-processing:** DVR or camera files → editing/stabilization tools.

A successful bind only verifies part of the control link. It does **not** prove that channel mapping, failsafe, motor order, video, power wiring, or failsafe behavior are safe.

## Learn these terms gradually

- **Arming:** enabling the flight controller to run the motors under control.
- **Failsafe:** the configured behavior when a valid control link is lost. Verify the actual behavior; never assume defaults are appropriate.
- **Rates:** how stick movement maps to rotational speed in flight. Simulator and real-aircraft rates may differ.
- **Angle/stabilized mode:** assists self-leveling within a defined tilt range. **Acro/rate mode:** stick input commands angular rate and the aircraft does not automatically level itself.
- **LiPo cell count (S):** a pack's cells in series; more cells mean higher nominal voltage.
- **VTX:** video transmitter. It is not the same thing as the radio-control transmitter in your hands.
- **Blackbox:** flight-controller log data that can help diagnose behavior.

## Beginner checkpoint

Before moving on, explain aloud what happens from moving the radio's roll stick to a motor changing speed, and how that differs from the camera-to-goggles path.


## Continue with visual deep dives

- [How an FPV drone works](07-how-fpv-drones-work.md) — lift, motor rotation, axes and the control loop.
- [Video systems, VTX/VRX, antennas and range](08-video-antennas-and-range.md) — separate control and video links.
- [GPS, GNSS and FC/AIO examples](09-gps-and-flight-controller-examples.md) — GPS wiring/data path and exact board-revision cautions.
