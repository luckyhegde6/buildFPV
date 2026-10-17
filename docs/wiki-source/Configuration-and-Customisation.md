# 🛠️ Configuration and Customisation — change one thing at a time

Customization is rewarding when you know what changed and how to undo it. Keep the default setup until you can explain what a change is meant to improve.

## Configuration areas

| Area | Typical tools | Safe first task | Leave until later |
|---|---|---|---|
| Radio | EdgeTX model setup | Name the model; learn channels/switches; save a backup | Complex mixes, Lua scripts you don't understand, firmware flashing without recovery plan |
| RC link | ExpressLRS Lua / Configurator / Web UI | Read the current version and confirm correct hardware | High power, unusual packet rates, regulatory-domain experimentation |
| Simulator | Liftoff controller settings | Verify axes and choose a consistent baseline | Frequent rates/physics changes that make practice comparisons meaningless |
| Flight controller | Betaflight App and exact FC docs | Inspect and back up current config | Copy/pasting CLI dumps for a different board/firmware or blind tuning |
| ESC / motors | Exact FC/ESC documentation and supported configurator | Identify hardware and confirm motor order/direction props-off | Flashing ESC firmware without identifying hardware target |
| Video | Exact manufacturer's settings/firmware | Record video system version and verify live view | Power/region modifications or transmitting without correct antenna/cooling |

## Change protocol

1. State the symptom or goal.
2. Find the official documentation for the exact model/revision.
3. Save a backup or export where available; take a screenshot of relevant settings.
4. Make one change.
5. Test the specific expected result.
6. Record evidence and whether the result improved.
7. Revert if the outcome is worse or ambiguous. Never fly while an unresolved safety-critical question remains.

## Configuration log

Copy [`config-change.md`](https://github.com/luckyhegde6/buildFPV/blob/main/docs/learning-log/templates/config-change.md), or open a GitHub issue using the repository's Configuration / Customisation template.

- Device and hardware revision:
- Firmware before → after:
- Backup location:
- Goal:
- Change:
- Expected:
- Observed:
- Decision: Keep / revert / needs test
- Evidence:

> [!WARNING]
> For Betaflight setup, firmware flashing, motor test, and bench troubleshooting, remove **all propellers**. Disconnect the battery before wiring/soldering changes. Read the exact manufacturer guide before making voltage, VTX, RF power, or firmware changes.
