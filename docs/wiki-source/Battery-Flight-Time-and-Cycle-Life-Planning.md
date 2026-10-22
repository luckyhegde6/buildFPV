# FPV Battery Flight-Time and Cycle-Life Planning

![LiPo versus Li-ion trade-offs and voltage references](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/lipo-vs-li-ion.svg)

This guide explains how to estimate flight time for a *specific* aircraft and mission, and how to track battery ageing. A battery's capacity or cell count alone cannot tell you maximum flight time. Never sacrifice a conservative landing reserve to chase the longest possible flight.

## 1. Calculate nominal battery energy

For a pack whose label gives nominal voltage and capacity:

**Nominal energy (Wh) ≈ nominal pack voltage (V) × capacity (Ah)**

Convert mAh to Ah by dividing by 1000. For a conventional LiPo labelled 3.7 V nominal per cell:

| Pack example | Nominal voltage | Capacity | Nominal energy |
|---|---:|---:|---:|
| 1S 450 mAh | 3.7 V | 0.45 Ah | 1.67 Wh |
| 2S 850 mAh | 7.4 V | 0.85 Ah | 6.29 Wh |
| 4S 1500 mAh | 14.8 V | 1.50 Ah | 22.2 Wh |
| 6S 1300 mAh | 22.2 V | 1.30 Ah | 28.86 Wh |

These are arithmetic examples, not suggestions that these packs suit a particular aircraft. Use the chemistry-specific nominal voltage on the pack label. Energy stored in a battery is not all safely usable in flight.

## 2. A worked flight-time estimate (hypothetical)

Suppose a specific aircraft uses a conventional 4S 1500 mAh LiPo:

1. Nominal energy: (14.8\,V \times 1.5\,Ah = 22.2\,Wh).
2. For planning illustration only, assume the pilot chooses to budget 75% of nominal energy and preserve the remaining 25% as reserve: (22.2\,Wh \times 0.75 = 16.65\,Wh).
3. If measured average electrical power for the same mission is about 200 W, the arithmetic estimate is (16.65\,Wh / 200\,W \times 60 \approx 5.0\) minutes.

**This is a calculation example, not a safe landing-time recommendation.** It depends on the assumed reserve and measured average draw. Voltage sag, battery age, temperature, wind, manoeuvres, payload, cutoff settings and the aircraft's power draw can change the result significantly. Use your own flight logs and land with a conservative reserve.

## 3. Why “maximum flight time” is not a universal spec

Flight-time comparisons are only fair when they name the aircraft configuration and test method. The result changes with:
- Exact battery chemistry, cell configuration, capacity, internal resistance, age and temperature.
- All-up weight, including battery, ducts, camera, action camera, antennas and mounts.
- Motor, propeller, frame and powertrain efficiency.
- Wind, flight speed, throttle profile, altitude, temperature and hovering vs manoeuvres.
- Low-voltage warning/cutoff and the reserve policy used by the pilot or manufacturer.

When a product page advertises a time, capture its battery model, voltage range/test method, airframe configuration and whether the figure includes the video payload. Don't quote a manufacturer result as guaranteed useable flight time for a different build.

## 4. LiPo vs Li-ion and current capability

LiPo packs are often selected for high current and rapid throttle changes. Many Li-ion cells are useful for energy density and lower-current endurance missions, but **not every Li-ion cell can safely provide acro/freestyle current peaks**. Confirm the exact cell datasheet, pack construction, current rating, wiring, voltage limits and thermal behaviour. An Li-ion pack with more nominal Wh may still be unsuitable for the motor/propeller load.

See [Motors, Propellers and Battery Compatibility](Motors-Propellers-and-Battery-Compatibility.md) for cell count, motor/prop/ESC matching and the limits of KV-based rules.

## 5. Cycle life vs calendar ageing

There is no universal safe cycle count for FPV batteries. Cycle-life claims depend on the exact cell/pack model and the manufacturer's test definition: charge current, discharge depth, temperature, storage conditions, balance method and end-of-life criterion. Packs also age over calendar time, and damage/overheating can make one unsafe before its expected cycle count.

Use a battery as an individual component that must be inspected—not as a guaranteed number of flights.

### Keep a simple log

| Field | What to record |
|---|---|
| Pack ID / chemistry | Label, exact model, LiPo/Li-ion/LiHV if marked, series count |
| Capacity / charge method | Labelled mAh/Wh, charger and supported mode |
| Date / flight number | Date and use count; distinguish charge events from flight cycles in your records |
| Aircraft / payload | Frame, camera/air unit, battery and any added payload |
| Conditions | Approximate temperature, wind, mission type and duration |
| Charge/discharge notes | Cell balance, unusual sag, charger warnings or temperature |
| Inspection | Swelling, puncture, damaged lead/connector, impact, odour or unusual heat |
| Decision | Keep monitoring, retire from flight use, or follow battery-maker disposal/incident guidance |

## 6. Charging and storage reminders

- Follow the exact pack maker's charge rate, chemistry mode, cell count and maximum charge voltage.
- Balance-charge only according to the pack and charger instructions.
- Stay present and monitor throughout charging in a suitable fire-safe location; don't charge unattended.
- Do not charge or fly a swollen, punctured, crushed, hot or otherwise damaged pack.
- Use the manufacturer's storage-charge guidance during longer storage; avoid assuming that “full” or “empty” is the ideal long-term state.
- Stop for unexpected heat, odour, swelling, charger error or unexplained cell-voltage imbalance.

See [FPV Chargers, LiPo and Li-ion Battery Safety](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md).

## Sources and next steps

- [BETAFPV Air75 product specifications](https://betafpv.com/products/air75-brushless-whoop-quadcopter)
- [BETAFPV Pavo35 product specifications](https://betafpv.com/products/pavo35-brushless-whoop-quadcopter)
- [BETAFPV battery catalogue](https://betafpv.com/collections/batteries)
- [FPV charging and battery safety guide](FPV-Chargers-LiPo-and-Li-ion-Battery-Safety.md)
- [First Build Checklist](First-Build-Checklist.md)

*Reviewed 22 October 2026. Calculations are educational estimates, not guarantees. Inspect packs and follow the manufacturer's current data and safety instructions.*
