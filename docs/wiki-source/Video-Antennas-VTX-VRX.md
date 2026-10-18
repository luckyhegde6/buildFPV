# 📡 FPV Video Links, Antennas and Range

![Walksnail Avatar FPV VRX and HD kit product image](https://www.caddxfpv.com/cdn/shop/files/VRX_and_V2.webp?v=1760685297&width=2000)

*Product example: [CADDXFPV / Walksnail Avatar VRX kit](https://www.caddxfpv.com/products/walksnail-avatar-fpv-with-avatar-hd-kit-v2-32g-single). Use the exact product compatibility list before buying.*

## 1. Two links, two jobs

**Control:** RadioMaster Pocket ELRS → 2.4 GHz (or other supported band) control link → receiver on aircraft → FC.

**Video:** FPV camera → VTX/air unit → video antenna → compatible VRX/goggles.

VTX means **video transmitter**, not your hand-held radio transmitter. VRX means **video receiver**. Your ELRS receiver and your goggles' video receiver are different pieces of equipment.

## 2. Common antenna styles

![Directional patch antenna in LHCP/RHCP variants](https://www.racedayquads.com/cdn/shop/files/lumenier-lumenier-axii-patch-hd-5-8ghz-antenna-choose-polarization-antenna-32443478507633.webp?v=1736965860&width=600)

| Type | Pattern / practical use |
|---|---|
| Linear dipole / whip | Lightweight, common for control links and some video systems |
| T / folded dipole | Compact receiver antenna style, often used on small quads |
| Circular omni (cloverleaf / pagoda) | Broad coverage with circular polarization; common in analog FPV |
| Patch | Directional, higher gain toward the front; useful on goggles/ground receivers if aimed |
| Yagi / helical | More focused directional reception, requires aiming |
| Diversity VRX | Uses two antenna inputs with receiver logic; not a particular antenna shape by itself |

### RHCP and LHCP

Circular-polarized antennas are right-hand (RHCP) or left-hand (LHCP). Match polarization at both ends for a good link. Mixing RHCP and LHCP can substantially reduce signal. Also verify connector type (SMA, RP-SMA, U.FL, MMCX, etc.) and frequency; an antenna that physically fits may still be wrong electrically.

## 3. Range: no single guaranteed number

Advertised ranges are not promises. Usable range depends on line of sight, antenna orientation, polarization, gain and pattern, receiver sensitivity, cable losses, interference, VTX power, video system and local EIRP/band limits. A directional patch improves reception only within its beam; it will not perform like an omni when the quad is behind the pilot.

- Analog 5.8 GHz: often low latency and accessible, with picture noise increasing as the link weakens.
- Digital systems (DJI, Walksnail, HDZero): each has its own compatible air unit and ground equipment. Compare exact generations, latency, image quality and supported antennas.
- The control link can fail separately from video. Test control failsafe and plan a conservative return/landing point; don't assume a picture means the radio link is healthy.

## 4. Power and bench safety

- [ ] Install the VTX antenna before powering the VTX unless the exact manufacturer's manual explicitly specifies otherwise.
- [ ] Keep within locally permitted frequencies and transmit power.
- [ ] Keep antennas clear of carbon fibre, batteries and noisy power wiring where practical.
- [ ] Check both ends use compatible polarization and connector.
- [ ] Test video at close range first; then learn your setup's real link margin in legal, safe conditions.

## More references

- [CADDXFPV / Walksnail official VRX](https://www.caddxfpv.com/products/walksnail-avatar-fpv-vrx)
- [CADDXFPV download centre](https://www.caddxfpv.com/pages/download-center)
- [BETAFPV](https://betafpv.com/)
- [SpeedyBee](https://www.speedybee.com/)
- [Antenna example: Lumenier AXII patch](https://www.racedayquads.com/products/lumenier-axii-patch-hd-5-8ghz-antenna-lhcp-rhcp)
