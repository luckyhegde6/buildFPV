# Tinywhoops and Micro FPV — Choosing an Indoor Trainer

![Drone class overview including tinywhoop and micro builds](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/drone-class-overview.svg)

A **tinywhoop** is generally a very small quad with propeller guards/ducts, often used for indoor practice and small spaces. Marketing terms and exact sizes vary, so confirm propeller diameter, wheelbase, weight, battery chemistry/cell count, and receiver/video hardware on the specific product page.

## 1. Tinywhoop vs open-prop micro

| Feature | Tinywhoop / guarded micro | Open-prop micro / toothpick |
|---|---|---|
| Props | Small props inside ducts/guards | Exposed props |
| Main use | Indoor practice, gates, tight spaces | Outdoor micros and lightweight cruising/freestyle |
| Strength | Low mass and some reduction of direct prop contact | Often less duct mass/drag, potentially more open airflow |
| Trade-offs | Ducts add drag, collect dust and can break; wind is challenging | Exposed props can cause injury/damage; outdoor wind/payload matter |
| Maintenance | Inspect ducts, motor debris, prop damage and canopy/camera mount | Inspect props, arms, motor shafts and exposed wiring |

Neither type is collision-proof or automatically safe around people or pets. Choose an appropriate practice area and keep safe separation.

## 2. Check real product specifications, not just “75” or “whoop”

BETAFPV's Air75 listing gives one example: 75 mm wheelbase, 40 mm two-blade props, 1S 450 mAh recommended battery, onboard ELRS receiver and analog 5.8 GHz VTX for the listed configuration. The listed 6.5-minute flight-time figure belongs to that product's stated test configuration and voltage range; it isn't a promise for other conditions.

The Meteor75 Pro page includes its own prop and product-revision details. Read the exact board/gyro revision before firmware flashing or ordering a replacement.

Sources:
- [BETAFPV Air75](https://betafpv.com/products/air75-brushless-whoop-quadcopter)
- [BETAFPV Meteor75 Pro](https://betafpv.com/products/meteor75-pro-brushless-whoop-quadcopter)
- [BETAFPV Cetus X kit](https://betafpv.com/products/cetus-x-fpv-kit)

## 3. Radio, video and binding

A BNF whoop commonly includes an aircraft-side receiver, but you must confirm the protocol/version (for example ELRS 2.4 GHz), firmware, and binding procedure. A receiver that says ELRS is not enough to establish compatibility with every transmitter/module version.

Video is a separate chain:
- Analog camera → analog VTX → matching analog goggles/VRX.
- Digital camera module/air unit → explicitly compatible digital goggles/VRX generation.

See [FPV Goggles and VRX Integration](FPV-Goggles-and-VRX-Integration-Guide.md) and [Analog vs Digital FPV Video](Analog-vs-Digital-FPV-Camera-Video-Guide.md).

## 4. Battery and charger

Tinywhoops often use 1S or 2S packs, but that is product-dependent. Check the pack's chemistry, connector polarity, full-charge voltage, capacity and current rating. A USB charger may support only particular connectors/cell configurations; confirm it supports the exact battery chemistry and pack type.

Read [Motors, Propellers and Battery Compatibility](Motors-Propellers-and-Battery-Compatibility.md) and [FPV Chargers and Battery Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md). Never charge damaged/swollen packs or leave charging batteries unattended.

## 5. Tinywhoop setup and maintenance checklist

- [ ] Confirm aircraft and transmitter receiver protocol; complete the exact binding procedure.
- [ ] Confirm goggles/VRX support the included video system.
- [ ] Inspect ducts, props, motor shafts, screws, camera, antenna and battery connector.
- [ ] Read the manufacturer's supported firmware target/gyro revision before flashing.
- [ ] Remove props before firmware/motor checks; follow Betaflight's setup procedure where applicable.
- [ ] Check arming switch, receiver channels and failsafe in a safe setup before flight.
- [ ] Choose a suitable, permitted location. Keep away from eyes, hair, pets, people, loose dust and fragile objects.
- [ ] Keep spare props, ducts/canopy and model-specific fasteners available.

## 6. Troubleshooting quick table

| Symptom | First safe checks |
|---|---|
| Won't bind | Verify radio/receiver protocol, firmware, bind procedure and antenna; do not assume the model name identifies firmware version |
| Won't arm | Inspect arming-disable status and channel mapping in the correct configurator; props off |
| Motor sounds rough | Disconnect power; inspect prop/duct debris, bent shaft and motor fasteners |
| Short flight time | Compare battery age/condition, pack capacity, ducts/props, weight, flight style and maker test conditions |
| Weak/black video | Verify compatible VTX/goggles, channel/system bind, antenna/cable and unit power; digital air units need the specified cooling |
| Repeated brownout | Stop flying; inspect pack sag, connector, power pads/regulators and current draw rather than increasing throttle blindly |

## Next

- [Drone Categories and Size Guide](Drone-Categories-and-Size-Guide.md)
- [First Build Checklist](First-Build-Checklist.md)
- [Build and Troubleshooting Quick Guide](FPV-Troubleshooting-Quick-Guide.md)

*Reviewed 22 October 2026. Product specs, firmware and kit contents change; use the exact product listing and manual.*
