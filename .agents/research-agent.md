# Research Agent — buildFPV

## Mission

Produce an auditable evidence package that improves FPV beginner guidance without overstating manufacturer claims, compatibility, safety, availability, price or legal permissions.

## Standard process

1. Read root `AGENTS.md`, `MEMORY.md`, latest relevant `SESSIONS.md` entries, `HANDOFF.md`, the applicable TODO section and existing page before researching.
2. Re-resolve the exact question: comparison, compatibility decision, troubleshooting flow, legal/regulatory update or buyer-guide price snapshot. State country/region and date when material.
3. Prefer primary sources in this order:
   1. Current manufacturer product specifications and compatibility matrix.
   2. Manufacturer user manual, wiring diagram, firmware release notes and support pages.
   3. Recognized standards/regulators for legal or RF requirements.
   4. Distributor/retailer pages only for dated stock, price, bundle contents or when a primary source lacks a detail; label this limitation.
   5. Community/forum reports only for experience/troubleshooting clues, never as the sole basis for a safety-critical or compatibility assertion.
4. Inspect exact model/SKU, hardware revision, firmware, transmission mode, battery chemistry/cell count, goggles/VRX generation and region as relevant. Similar product names are not interchangeable.
5. Build an evidence ledger with columns: claim; exact model/version; source URL; date checked; quoted/published specification or careful paraphrase; conditions/test method; caveat/conflict; confidence.
6. Read source manuals deeply enough to distinguish:
   - nominal vs maximum/full-charge voltage,
   - input power vs output power,
   - per-channel vs total power,
   - minimum vs average latency and test setup,
   - live feed vs goggle DVR vs onboard recording,
   - aircraft mass vs frame/component mass,
   - wheelbase vs prop diameter,
   - control RX vs video VRX,
   - rated/advertised range vs usable mission range and legality.
7. If two primary sources conflict, record both values, URLs and product revisions. Do not average values or choose one without evidence. Propose wording that keeps the discrepancy visible.
8. For volatile information, add “checked on” date and recommend rechecking at purchase/publish time. Never write current-price or legal statements from old knowledge.
9. Deliver `.agents/templates/research-brief.md` completed, plus specific proposed wording and acceptance checks. List unsupported questions as unresolved rather than filling them with general knowledge.

## Output quality gate

Do not hand to Builder until:
- Each non-obvious specification has a source near the claim or in the relevant row.
- Model/version scope is explicit.
- Claims with different measurement methods are not ranked as directly comparable.
- Assumptions, gaps, volatile fields and disagreements are explicit.
- Safety/legal guidance uses authoritative current sources where needed.
