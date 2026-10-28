# FPV Radio-Control Path Explained — from stick to receiver data

[Back to FPV System Basics](FPV-System-Basics.md) · [ExpressLRS Basics](ExpressLRS-Basics.md) · [RadioMaster Pocket Guide](RadioMaster-Pocket-Button-Guide.md) · [Betaflight Basics](Betaflight-Basics.md)

A radio link is a chain of separate layers. Understanding where each layer sits makes it easier to solve the common problem “my radio is connected, but the quad does not respond.”

<img src="https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/fpv-section-radio-control-link.svg" alt="Radio transmitter and ExpressLRS RF link to receiver, then flight controller" width="1200" />

*Conceptual control path. Receiver hardware, protocol, ports and firmware targets vary; this is not a soldering or pinout diagram.*

## 1. The complete control path

**Stick movement → radio model/channel mix → transmitter RF module → radio-frequency link → aircraft receiver → receiver protocol → flight controller → flight-control loop → ESC/motor outputs**

Every arrow is a possible failure boundary. A working transmitter screen does not prove RF transmission; a bound receiver does not prove that the FC is reading its data; movement in the Receiver tab does not prove that arming, motor direction or failsafe are correct.

## 2. The transmitter has two separate jobs

The radio's operating system—such as EdgeTX on a compatible RadioMaster Pocket—manages models, stick/channel mapping, switches, trims, mixes and output values. The RF module then transmits the resulting control data using a radio protocol such as ExpressLRS (ELRS).

That means simulator USB input and real-aircraft RF are different tasks. A simulator may read the radio as a USB joystick without binding any aircraft receiver. Conversely, an ELRS link can bind while the model's channel mapping or arming switch remains incorrect.

Keep a separate simulator model and real-aircraft model, and check the active model before connecting to the aircraft.

## 3. What the RF link and receiver do

The transmitter module encodes and sends control data; the receiver on the aircraft receives it and makes the channel data available to the flight controller. The devices must use a compatible band and supported firmware/configuration. Hardware targets matter: similar-looking modules can require different firmware targets.

For ExpressLRS, use the official [Getting Started guide](https://www.expresslrs.org/quick-start/getting-started/) and current [Binding guide](https://www.expresslrs.org/quick-start/binding/). Check the current instructions before flashing or repeatedly power-cycling hardware. A matching bind phrase or bind procedure cannot fix an incompatible band or unsupported firmware combination.

## 4. How the receiver connects to the FC

Two common architectures are:

- **UART-based external receiver:** the receiver is wired to a compatible serial port on the flight controller. The FC's port and receiver settings must match the actual wiring/protocol; ELRS UART receivers commonly use the CRSF serial protocol.
- **Integrated SPI receiver:** the receiver hardware and FC board/firmware are integrated differently, so the configuration is not necessarily the same as an external UART receiver.

Do not copy UART numbers or pad locations from another model. One device's TX usually communicates with the other device's RX, but exact pad layout, voltage and board wiring must come from both manuals. Enabling Serial RX on the wrong UART is a common configuration mistake.

Official reference: [Betaflight Receiver tab](https://betaflight.com/docs/wiki/app/receiver-tab).

## 5. Channel mapping: signals are not actions yet

The FC receives channel data, then interprets channels as roll, pitch, yaw, throttle and auxiliary (AUX) inputs. The radio and FC must agree about channel order, direction and endpoints. Switches do not automatically mean “arm” unless the relevant AUX channel is correctly assigned in the flight-controller configuration.

Check the Receiver tab with the aircraft disarmed and props removed. Move one stick or switch at a time, confirm the expected channel changes, and fix mapping at the proper layer. Avoid changing both radio mixes and FC mapping simultaneously because it becomes harder to isolate the cause.

## 6. Binding, channel input, arming and failsafe are separate checks

| Check | What success means | What it does not mean |
|---|---|---|
| **Bind / link** | Transmitter and receiver have established a compatible link | Does not prove FC wiring, channel mapping, arming or video |
| **Receiver tab input** | FC sees the expected channel values | Does not prove motor direction or safe failsafe behavior |
| **ARM switch / pre-arm checks** | The requested arming input and conditions are recognized | Does not prove the quad is ready for flight |
| **Failsafe test** | The documented loss-of-link behavior was deliberately verified | Does not replace range checks, inspection or local flight rules |
| **Video display** | The video receiver can display the camera feed | Does not prove the control radio works |

Failsafe is a safety system; do not leave it for later or assume default behavior without checking. Follow the installed firmware's current instructions and perform tests using the documented safe method.

## 7. A layer-by-layer fault isolation path

1. **Radio model:** active model, correct RF module type, antenna fitted, documented settings and channel outputs.
2. **RF compatibility:** supported frequency band, TX/RX firmware versions and binding configuration.
3. **Receiver power and wiring:** correct voltage, ground, signal pads and antenna installation.
4. **FC port/input settings:** actual UART, Serial RX setting and the appropriate receiver provider.
5. **Channel mapping:** roll, pitch, yaw, throttle and AUX switches move in the expected direction/range.
6. **Arming and failsafe:** review pre-arm warnings, mode assignment and documented fail behavior with props removed.
7. **Flight hardware:** motor setup and power wiring are separate checks; don't use a successful bind as proof of these.

## Safety checkpoint

Remove all propellers before receiver setup, firmware configuration and motor testing. Disconnect the battery before moving receiver wires or soldering. Never test failsafe by flying beyond control range or by deliberately creating an unsafe flight condition.

## Continue learning

- [ExpressLRS Basics](ExpressLRS-Basics.md) covers binding and first-link checks.
- [RadioMaster Pocket Button Guide](RadioMaster-Pocket-Button-Guide.md) covers physical controls and separate simulator/real-aircraft profiles.
- [Betaflight Basics](Betaflight-Basics.md) covers the configurator sequence.
- [FPV Troubleshooting Quick Guide](FPV-Troubleshooting-Quick-Guide.md) helps classify symptoms.

## Knowledge check

1. What is the difference between the radio operating system and the RF link protocol?
2. Why can a bound ELRS receiver still show no stick input in Betaflight?
3. Why is a simulator USB connection not the same as binding a real receiver?
