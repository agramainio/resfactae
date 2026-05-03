# vitrify phase 1 design foundation handoff

Branch:

feat/vitrify-design-foundation

Purpose:

This branch defines the first design foundation for the vitrify promotional website and Flutter PWA UI redesign.

The promo site will be built later with:

- Next.js
- Sanity CMS
- Firebase App Hosting
- private access gate
- real current app screenshots
- Supreme self-hosted font

The promo site is not only a marketing page. It is the design source of truth for the future vitrify app UI.

---

## Current state

The Flutter app already functions.

The UI is not concept-only and should not be treated as fake.

Current app screenshots should be used as:

- product evidence
- design audit material
- before/after comparison material
- proof of working logic

The current UI is visually unfinished, but the workflows exist.

---

## Main product positioning

vitrify is a production journal for professional ceramic ateliers.

It records real physical pieces, production states, firings, failures, stock, students, classes, clients, orders, tests, external pieces, and the practical history that accumulates around them.

vitrify is not:

- ecommerce
- CRM software
- a kiln controller
- an app for students
- a generic inventory app
- a spreadsheet clone

---

## Core headline

Production journal for ceramic ateliers.

---

## Core product sentence

vitrify records what exists, where it is in production, who it belongs to, what entered the kiln, what came out, what failed, what is ready, and what the atelier can learn from that history.

---

## Design direction

The design direction is:

off-tone pastel production ledger

It should feel like:

- production ledger
- colored filing tabs
- inventory stickers
- archive labels
- municipal forms
- school register sheets
- old office folders
- serious information with slightly wrong colors

It should not feel like:

- ceramic branding
- pottery lifestyle branding
- beige minimalism
- luxury minimalism
- generic SaaS
- cute craft app
- dashboard toy
- ecommerce site

---

## Forbidden visual references

Do not use:

- beige
- cream
- tan
- sand
- clay
- terracotta
- rust
- ochre
- brown
- maroon
- burgundy
- wine red
- warm earth tones
- porcelain white as a concept
- glaze gradients
- ceramic surface references
- kiln flame colors
- handmade texture effects

The product is for ceramic ateliers, but the UI must not visually imitate ceramic material.

---

## Typography

Primary typeface:

Supreme

Supreme should be self-hosted from:

public/fonts/supreme/

Committed files:

- Supreme-Variable.woff2
- Supreme-VariableItalic.woff2

The deployed website should not rely on fonts installed on the end user's device.

---

## Promo site architecture

Domain:

vitrify.resfactae.xyz

Status:

private preview, not public launch

Stack:

- Next.js
- Sanity CMS
- Firebase App Hosting

The first deployed version should include a simple private access gate.

The access gate is not real security. It is only to prevent casual public browsing while the site is being designed.

---

## App domains

Production app:

vitrify.app

Demo app:

demo.vitrify.app

Use `demo`, not `try`, because it feels more controlled and professional.

---

## Screenshot strategy

Use real current screenshots from the working Flutter app.

Use them honestly:

- as current-state app UI
- as proof that workflows exist
- as UI audit material
- as redesign reference

Do not pretend the current visual UI is final.

Before public launch, screenshots should be reviewed, redesigned, or replaced.

---

## Key app UI principles

The Flutter app should become a mobile production ledger.

It should use:

- thin dividers
- compact rows
- small chips
- off-tone pastel labels
- record modules
- grouped lists
- firing timelines
- failure records
- stock derivation views

Avoid:

- endless cards
- giant rounded buttons
- decorative dashboards
- fake kiln UI
- ceramic visual clichés
- cute empty states
- generic CRUD screens

---

## Core object model principle

The piece is the source of truth.

A piece is one real physical object.

If five identical pieces are made, they are still five pieces, even when grouped visually.

The UI must never erase that distinction.

---

## Failure principle

Failure is not a production stage.

Failure is an outcome.

It should remain visible, traceable, and useful for:

- remakes
- loss analysis
- firing history
- production decisions
- recurring issue detection
- atelier learning

---

## Stock principle

Stock is derived from real pieces.

It is not an abstract number typed into a spreadsheet.

Available stock should come from real ready pieces minus pieces that are reserved, sold, delivered, missing, failed, or otherwise unavailable.

---

## Statistics principle

Statistics should emerge from ordinary production records.

The goal is not vanity dashboards.

The goal is better studio memory and better operational decisions.

Useful statistics include:

- pieces made
- pieces fired
- pieces failed
- pieces sold
- stock movement
- recurring losses
- kiln outcomes
- class output
- student output
- remakes
- custom-order problems

---

## Existing documentation in this branch

Design foundation:

- docs/vitrify/design-foundation/README.md
- docs/vitrify/design-foundation/tokens.md
- docs/vitrify/design-foundation/components.md
- docs/vitrify/design-foundation/font-delivery.md

Promo site:

- docs/vitrify/promo-site/website-structure.md
- docs/vitrify/promo-site/page-copy.md

Flutter app UI:

- docs/vitrify/flutter-app-ui/app-ui-direction.md

Screenshots:

- docs/vitrify/screenshots/placeholder-screenshot-plan.md

CMS:

- docs/vitrify/cms/sanity-content-model.md

Private preview:

- docs/vitrify/private-preview/access-gate-plan.md

Source notes:

- docs/vitrify/source-notes/promo-site-raw-prompts/

---

## Next implementation phase

After this design foundation is accepted, create a new implementation branch for the actual promo site rebuild.

Suggested branch:

feat/vitrify-next-sanity-promo

That branch should:

1. ignore the old Astro vitrify page
2. create the Next.js promo site foundation
3. add Sanity schema definitions
4. configure Firebase App Hosting
5. implement the private access gate
6. self-host Supreme
7. create the first page layout using current copy
8. add screenshot slots for real app screenshots
9. preserve the design foundation as the source of truth

---

## Final rule

The website and app do not need to look identical.

But they must clearly belong to the same product system.

The website defines the design language.

The Flutter app translates that language into operational UI.
