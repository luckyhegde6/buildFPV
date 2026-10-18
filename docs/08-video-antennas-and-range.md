# 📡 FPV Video: Camera, VTX, VRX, Antennas and Range

## 1. Keep the two wireless links separate

An FPV quad normally uses two independent radio links:

```text
CONTROL LINK
RadioMaster Pocket (ELRS transmitter) ))) ELRS receiver on quad → flight controller
          ↑ sends stick inputs                         ↑ sends control data to FC

VIDEO LINK
FPV camera → VTX / digital air unit ))) VRX / compatible goggles → pilot sees video
```

- **TX / transmitter** is an ambiguous abbreviation. In ExpressLRS context it normally means the *radio-control* transmitter. **VTX** specifically means *video transmitter* on the aircraft.
- **RX / receiver** can mean a radio-control receiver attached to the FC. **VRX** usually means a *video receiver*, either in goggles or an external module.
- Your RadioMaster Pocket ELRS uses its own radio-control frequency and protocol. It does not receive the FPV camera video.
- Many analog systems use 5.8 GHz video, but actual band, channel plan, power, antenna and regional rules vary. Digital systems (for example DJI, Walksnail, HDZero) have their own compatible air units / goggles / VRX ecosystems. Do not assume digital components interoperate across brands.

## 2. Video signal flow

![Walksnail Avatar FPV VRX example](https://www.caddxfpv.com/cdn/shop/files/walksnail-avatar-fpv-vrx.png)

*Example receiver family: [CADDXFPV / Walksnail Avatar VRX](https://www.caddxfpv.com/products/walksnail-avatar-fpv-vrx). Check the exact product's current specifications and compatible air units.*

1. The **camera** captures the scene (analog or digital image).
2. The **VTX / air unit** converts the camera feed into an RF video signal. Digital air units may encode/compress video and include DVR/recording features depending on the model.
3. A **VTX antenna** radiates that signal.
4. The goggles' built-in receiver or an external **VRX** receives and decodes it.
5. The goggles or monitor displays the image. OSD may add battery voltage, timer, RSSI/LQ, GPS data and other flight telemetry when supported and configured.

An onboard action camera is different from the FPV camera: it records higher-quality footage, while the FPV camera is optimised for low-latency piloting. Gyroflow can stabilize supported recorded video; it is not the live video receiver.

## 3. Antenna types in plain English

![Directional patch antenna example; available in RHCP and LHCP variants](https://www.racedayquads.com/cdn/shop/files/lumenier-lumenier-axii-patch-hd-5-8ghz-antenna-choose-polarization-antenna-32443478507633.webp?v=1736965860&width=600)

*Illustrative product image from [RaceDayQuads: Lumenier AXII patch](https://www.racedayquads.com/products/lumenier-axii-patch-hd-5-8ghz-antenna-lhcp-rhcp).*

| Type | Pattern / strengths | Trade-offs / common use |
|---|---|---|
| Linear dipole / whip | Simple, light, broad coverage around the antenna; common on control links and some video builds | Orientation and antenna nulls matter; polarization mismatch with circular antennas can reduce signal |
| T / folded dipole (control link) | Compact, lightweight, common on ELRS receivers | Put the active elements clear of carbon, battery leads and other electronics; follow the receiver antenna diagram |
| Circular polarized omni (cloverleaf / pagoda) | Broad azimuth coverage with circular polarization; commonly used for analog video and other compatible systems | Size, durability and correct polarization matter; radiation is not perfectly uniform |
| Patch (directional) | Higher gain in a direction; useful on goggles / ground stations when pointed toward the quad | Must be aimed; gain narrows coverage and does not create transmit power |
| Helical / Yagi (directional) | More focused reception, often used for specialised long-range ground stations | Needs aiming and correct feed/connector; not a general-purpose antenna for a moving aircraft |
| Diversity receiver | Uses two antenna inputs and receiver logic to improve usable coverage | Diversity is a receiver design, not a single antenna shape; antenna placement and compatibility still matter |

### Polarization: LHCP and RHCP

Circular polarization comes in **left-hand (LHCP)** and **right-hand (RHCP)** variants. For the cleanest match, use the same polarization on the VTX and VRX/goggles ends. Mixing RHCP and LHCP can cause substantial loss. Confirm the exact VTX connector and antenna connector (SMA vs RP-SMA, U.FL/MMCX etc.); connector fit alone does not guarantee electrical compatibility.

For a normal ELRS control link, use the antenna type specified for the transmitter/receiver band. A 5.8 GHz video antenna is not interchangeable with a 2.4 GHz control antenna just because the connector fits.

## 4. What affects range?

There is no reliable universal “FPV range” number. Usable range depends on frequency, legal transmit-power limits, antenna gain/polarization, antenna placement and orientation, receiver sensitivity, interference, line of sight, terrain, aircraft attitude, coax/connector losses and the video system itself.

| Factor | Why it matters |
|---|---|
| Line of sight | Buildings, terrain, vegetation and the pilot's body can attenuate/block the signal |
| Antenna placement | Carbon fibre, batteries and wiring can shadow or detune an antenna |
| Polarization | Mismatched polarization costs link margin |
| Directionality / gain | A patch may hear a signal better in front of it but poorly from the side or behind |
| Power and regulations | Higher conducted power does not override local EIRP / band rules or safety limits |
| Interference | Other transmitters and electrical noise can degrade video even when nominal range looks high |
| Receiver / video system | Analog and different digital systems have different link budgets and failure characteristics |

Manufacturers sometimes advertise maximum-distance figures under specified or ideal test conditions. Treat them as **not guaranteed flight range** and never fly solely on a marketing distance. Keep line of sight where required, monitor the link indicators, plan a conservative turnaround point, and obey the applicable Indian airspace and radio rules.

## 5. Video-system families

| Family | What to remember |
|---|---|
| Analog 5.8 GHz | Common, lightweight, often lower cost and very low delay; image quality is lower and the picture degrades gradually with signal |
| DJI digital | Must match the particular DJI air-unit and goggles generation / compatibility list |
| Walksnail Avatar / Ascent | Use the matching Walksnail-compatible VTX/air unit and goggles/VRX; some VRX units output HDMI |
| HDZero | Separate digital ecosystem, designed around its own low-latency video approach; use supported HDZero air/ground hardware |

Before shopping, write down the exact goggles or receiver you intend to use. Choose the camera/VTX and antennas for that same ecosystem rather than buying an isolated transmitter first.

## 6. Bench and flight checks

- [ ] Confirm the exact video system, bands/channels and firmware compatibility.
- [ ] Verify antenna connector type and polarization at both ends.
- [ ] Install the required VTX antenna before powering the VTX; follow the manufacturer's cooling and power instructions.
- [ ] Keep the VTX antenna away from the GPS antenna and sensitive receiver wiring where practical.
- [ ] Verify camera orientation, image format and OSD/telemetry if desired.
- [ ] Check local rules before choosing transmit power or bands.
- [ ] Test signal at safe, close range before expanding the flight envelope.

## Sources

- [CADDXFPV / Walksnail VRX](https://www.caddxfpv.com/products/walksnail-avatar-fpv-vrx)
- [CADDXFPV download center and product compatibility resources](https://www.caddxfpv.com/pages/download-center)
- [BETAFPV official store](https://betafpv.com/)
- [SpeedyBee official antennas / FPV hardware catalogue](https://www.speedybee.com/)
