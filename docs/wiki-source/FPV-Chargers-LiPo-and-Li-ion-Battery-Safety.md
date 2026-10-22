# FPV Chargers, LiPo and Li-ion Battery Safety

![LiPo versus Li-ion battery comparison and conventional LiPo voltage reference](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/lipo-vs-li-ion.svg)

![Charger, balance lead and battery compatibility diagram](https://raw.githubusercontent.com/luckyhegde6/buildFPV/main/docs/assets/charger-balance-power.svg)

Choose the charger after identifying the exact battery chemistry, cell count, maximum charge voltage, connector and charging method. A charger that fits the plug can still be wrong for the pack.

## 1. Charger categories

| Category | Typical purpose | Checks and trade-offs |
|---|---|---|
| **Small USB / 1S charger** | Small whoop packs and simple low-cell-count charging | Confirm chemistry/voltage, supported connector and whether each output is independently supervised |
| **AC charger** | Plugs into mains and supplies its own power source | Convenient at home; output wattage and per-channel allocation still matter |
| **DC charger** | Uses a compatible external DC supply or battery | Can deliver more power / be portable, but input supply must be adequate and correctly configured |
| **Multi-channel charger** | Charges several packs separately where each channel supports them | Maximum wattage may be shared; confirm how power is allocated across channels |
| **Balance charger** | Monitors individual cells in a series pack through the balance connector | Required whenever the pack/method requires cell balancing; follow pack and charger manual exactly |

A charger contains control electronics; a power supply only supplies electrical power. Some units combine both, while others need an external DC supply. Do not assume a product name or screen setting proves chemistry compatibility.

## 2. Read the battery label first

Before charging, identify:
- Chemistry (standard LiPo, LiHV, Li-ion or another supported chemistry).
- Series cell count (S) and maximum charge voltage per cell.
- Manufacturer's approved charge current/rate, balance procedure and connector.
- Pack condition, lead/polarity and whether the pack is intended for balance charging.

For conventional 4.20 V/cell LiPo, full-charge voltage is 4.20 V per cell. A LiHV pack may have a different specified maximum; do not use a LiHV setting simply to charge a regular LiPo higher. Li-ion pack chemistry and charge limit must come from the exact cell/pack documentation.

## 3. Charger power: a worked estimate

Approximate output power is **pack charge voltage × charge current**. For a conventional 4.20 V/cell pack, at 1 A the ideal output power is approximately:

| Pack | Full charge voltage | Approximate output at 1 A |
|---|---:|---:|
| 1S | 4.2 V | 4.2 W |
| 2S | 8.4 V | 8.4 W |
| 3S | 12.6 V | 12.6 W |
| 4S | 16.8 V | 16.8 W |
| 6S | 25.2 V | 25.2 W |

Real input power is higher because of losses, and chargers may limit output current or share power among channels. These are arithmetic examples, not suggested charge rates. Use the pack manufacturer's charge-current guidance and the actual charger's manual.

## 4. Representative charger models — manufacturer specifications checked 22 October 2026

This is a **specification comparison, not a ranking or endorsement**. Charger model names and firmware/specifications can change; read the current manual for the exact hardware revision and verify what is included in the box.

| Model | Best fit to investigate | Manufacturer-listed battery support | Input and headline charging capability | Limits and compatibility notes |
|---|---|---|---|---|
| **ISDT UC2** | A compact charger for supported small 1S/2S packs | Standard **4.20 V/cell LiPo**, 1S/2S | USB-C input **5 V / 2 A**; **0.8 A** charge and balance current | The maker lists an **XH 2.54** battery connector. Do not assume a BT2.0, A30, PH2.0 or other whoop lead fits or has the right polarity. It is not listed for LiHV or Li-ion packs. [Official specifications](https://www.isdt.co/uc2-2.html?lang=en) |
| **ISDT 608AC** | A general-purpose single-output charger with both mains and DC input | LiFe, Li-ion (Lilon), LiPo and LiHV **1–6S**; Pb 1–12S; NiMH 1–16S | AC input **100–240 V**; DC input **10–30 V**; headline charge power **50 W on AC / 200 W on DC**; charge current **0.1–8.0 A** | Balance current is listed as **up to 1.5 A** in the manufacturer's manual. The AC and DC wattage ratings are different; do not plan around 200 W when powered from AC. [Official specifications](https://www.isdt.co/608ac.html?lang=en) · [Manufacturer manual (PDF)](https://www.isdt.co/down/pdf/608AC_EN.pdf) |
| **ToolkitRC M7AC** | A portable charger for supported 1–6S packs, with built-in AC input and higher DC-input capability | LiPo, LiHV, LiFe, Li-ion and LTO **1–6S**; NiMH 1–16S; Pb 1–10S | AC input **100–240 V, up to 100 W input**; DC input **7–28 V, up to 20 A**; listed charge rating up to **300 W / 15 A**; balance current **800 mA at 4.2 V** | The **300 W figure is not available from a 100 W AC input**. On AC, the input-power limit and conversion losses constrain actual output; use the manual and displayed limits for the selected input. [Official specifications](https://www.toolkitrc.com/m7ac/) · [Manufacturer manual (PDF)](https://www.toolkitrc.com/wp-content/uploads/2024/09/M7AC-Manual-V1.0.pdf) |
| **ToolkitRC M6DAC** | A two-output charger when there is a genuine need to charge separate packs at once | LiPo, LiHV, LiFe and Li-ion **1–6S**; NiMH 1–16S; Pb 1–10S | AC input **100–240 V** with a built-in **200 W** supply; DC input **7–28 V, up to 30 A**. Manufacturer lists asynchronous charging up to **350 W per output** (15 A max) and synchronous mode up to **700 W total** (25 A max), subject to input and operating mode. Balance current listed at **1000 mA for 2–6S**. | The 350 W-per-output figures require a suitable DC source and the correct asynchronous mode; the built-in 200 W AC supply cannot provide 350 W on both outputs simultaneously. Confirm which mode is selected and how output power is allocated before connecting packs. [Official specifications](https://www.toolkitrc.com/m6dac/) · [Manufacturer manual (PDF)](https://download.toolkitrc.com/wp-content/uploads/2024/06/M6DAC-Manual-V1.1.pdf) |

### How to use the comparison

- **Start with the pack, not the charger.** Match chemistry, maximum cell voltage, cell count, connector and polarity, then use the battery maker's approved charge current.
- **Check the power source.** A charger's DC rating may assume a capable external supply; an AC-powered unit may have a much lower total output limit.
- **For two-output chargers, read the operating mode.** “Per output” is not the same as “available from mains” or “available to both outputs at once.”
- **Do not substitute a connector adapter for a compatibility check.** The balance plug, main lead, polarity and supported charging method all matter.
- **Treat these entries as a dated snapshot.** No current India street price or stock claim is made here; verify seller, included leads, warranty and the exact product revision at purchase time.


A charger's headline wattage does not guarantee every channel can supply that amount simultaneously. Check cell count, chemistry, per-channel wattage, total wattage, balance-current specification and required DC supply.

## 5. Safe charging routine

1. Inspect the pack before connecting: no swelling, puncture, crushed cells, damaged wire/connector or unusual smell/heat.
2. Place the pack on a stable non-combustible surface away from clutter and flammable materials. Stay present and monitor charging throughout; never leave charging packs unattended.
3. Verify charger chemistry, cell count, charge mode, voltage limit and current before starting. If the displayed cell count disagrees with the pack, stop and investigate.
4. Connect main leads with verified polarity and the balance lead where the pack/charger procedure requires it. Do not force a connector or use an unverified adapter.
5. Monitor cell voltages, temperature and charger messages. Stop if a cell behaves unusually, the pack heats, swells, emits odour, or the charger indicates an error.
6. After charging, disconnect as specified by the charger manual. Store and transport the pack as recommended by the battery maker.

Do not charge damaged/swollen packs. Never short a battery, solder directly to an assembled LiPo pack or use an improvised charger setting to “recover” a questionable cell.

## 6. Storage charge, balancing and cell health

- **Balance charge** supervises individual cells in a series pack and helps prevent them drifting apart.
- **Storage mode** moves a supported pack toward the storage voltage recommended by its manufacturer. It is not the same as fully charging or discharging.
- **Cell count and delta** should be checked according to the charger and pack instructions. An unexplained cell-voltage difference or charge that finishes unusually fast/slow can indicate a problem.
- **Temperature and storage state** affect battery ageing. Avoid long storage fully charged or fully empty unless the pack manufacturer says otherwise.
- **Cycle count is not a safety certificate.** Pack age, load current, temperature, handling, depth of discharge, balancing and manufacturing variation all affect usable life.

## 7. Compatibility matrix checklist

| Battery | Charger must verify |
|---|---|
| 1S LiPo whoop pack | Correct chemistry/full voltage, plug polarity, pack capacity/charge-current guidance, and whether the charger supports the pack type |
| 2S–6S LiPo | Correct series count and balance lead, full charge limit, permitted current, total/per-channel power and balancing procedure |
| LiHV pack | Explicit LiHV support and pack maker's maximum charge voltage; never assume standard LiPo mode equals LiHV mode |
| Li-ion pack | Explicit support for the exact Li-ion chemistry/cell configuration and manufacturer's charge limit/current |
| Unknown / unlabeled pack | Do not charge until chemistry, cell count, polarity and limits are reliably identified |

## 8. Charger buying checklist

- [ ] Supported chemistry and maximum series cell count cover the batteries you actually own.
- [ ] Balance connector and main lead fit without polarity assumptions.
- [ ] Maximum output watts and amps support the intended charge rate at the highest cell count.
- [ ] Multi-channel power allocation is understood.
- [ ] Correct external power supply is included or its required rating is known.
- [ ] Balance functionality, safety features, firmware/manual and warranty are documented.
- [ ] You have a safe charging location, fire-response plan and a pack inspection/storage routine.

## Sources

- [BETAFPV batteries catalogue](https://betafpv.com/collections/batteries)
- [ISDT UC2 specifications](https://www.isdt.co/uc2-2.html?lang=en)
- [ISDT 608AC specifications and manual](https://www.isdt.co/608ac.html?lang=en) · [manual PDF](https://www.isdt.co/down/pdf/608AC_EN.pdf)
- [ToolkitRC M7AC specifications and manual](https://www.toolkitrc.com/m7ac/) · [manual PDF](https://www.toolkitrc.com/wp-content/uploads/2024/09/M7AC-Manual-V1.0.pdf)
- [ToolkitRC M6DAC specifications and manual](https://www.toolkitrc.com/m6dac/) · [manual PDF](https://download.toolkitrc.com/wp-content/uploads/2024/06/M6DAC-Manual-V1.1.pdf)
- [Betaflight setup guide](https://betaflight.com/docs/wiki/getting-started/setup-guide)

*Reviewed 22 October 2026. Charger examples are not endorsements. Always follow the exact pack, charger and power-supply manuals.*


For a worked nominal-Wh flight-time example and cycle-life logging sheet, see [Battery Flight-Time and Cycle-Life Planning](Battery-Flight-Time-and-Cycle-Life-Planning.md).
