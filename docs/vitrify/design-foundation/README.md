# vitrify design foundation

vitrify is a production journal for professional ceramic ateliers.

This document defines the visual, UX, and product-design direction for both:

1. the private promotional website at `vitrify.resfactae.xyz`
2. the Flutter PWA product at `vitrify.app`

The promotional website is not only a marketing surface. It is the first polished expression of the vitrify design system and should act as the design source of truth for the app.

---

## Core product sentence

vitrify records the physical life of ceramic work: what exists, where it is in production, who it belongs to, what entered the kiln, what came out, what failed, what is ready, and what the atelier can learn from that history.

---

## Positioning

vitrify is a production memory system for ceramic ateliers.

It is not:

- ecommerce
- CRM software
- a kiln controller
- an app for students
- a generic inventory app
- another spreadsheet

It is for professional studios that need to trace real physical pieces through production, firings, failures, stock, students, classes, clients, orders, tests, and external work.

---

## Design goal

The product should feel like an off-tone pastel production ledger.

It should feel:

- serious
- quiet
- structured
- readable
- professional
- operational
- colorful
- mobile-first
- evidence-led
- calm but not cold
- precise but not sterile
- slightly strange
- anti-generic

It should not feel:

- cute
- playful
- crafty
- startup-like
- dashboard-heavy
- ecommerce-like
- decorative
- generic SaaS
- fake handmade
- ceramic-lifestyle
- beige
- earthy
- brown
- maroon
- clay-like
- glaze-inspired
- porcelain-inspired

---

## Forbidden visual references

Do not use ceramic cliché colors or material references.

Forbidden:

- beige
- cream
- sand
- tan
- clay
- terracotta
- rust
- ochre
- brown
- maroon
- burgundy
- wine red
- earth tones
- porcelain white as a visual concept
- glaze colors
- glaze gradients
- kiln flame colors
- handmade texture effects

The product is for ceramic ateliers, but the interface must not visually imitate ceramics.

---

## Visual metaphor

The guiding metaphor is:

> a refined production ledger with off-tone pastel administrative colors

Think:

- colored filing tabs
- inventory stickers
- archive labels
- municipal forms
- school register sheets
- old office folders
- serious information with slightly wrong colors

Not:

- a dashboard
- a portfolio
- a shop
- a student app
- a cute atelier notebook
- a pottery lifestyle brand

The interface should feel like a serious record of physical objects, states, events, outcomes, and accumulated studio memory — structured like a ledger, but colored with off-tone pastel administrative logic rather than ceramic references.

---

## Core interface principles

### 1. The piece is the source of truth

A piece is one real physical object.

If five identical mugs are made, they are five pieces, even when the interface groups them visually.

The app should always preserve this distinction.

---

### 2. Failure is an outcome, not a production stage

Failure should be visible, traceable, and useful.

A failed piece should not simply disappear from production history.

Failure records should help with:

- remakes
- loss analysis
- kiln history
- production decisions
- recurring issue detection
- atelier learning over time

---

### 3. Stock is derived from real pieces

Stock is not an abstract number typed into a table.

Stock comes from real pieces with statuses such as:

- ready
- reserved
- sold
- delivered
- missing
- failed
- remade

The UI should make this distinction clear.

---

### 4. Statistics emerge from ordinary records

vitrify should not feel like a dashboard for vanity metrics.

Statistics should emerge naturally from normal atelier activity:

- pieces made
- pieces fired
- pieces failed
- pieces sold
- stock movement
- recurring losses
- kiln outcomes
- student output
- class output
- remakes
- custom-order problems

The goal is better studio memory and better operational decisions.

---

### 5. Mobile is the primary workspace

The app is for people in a working atelier.

The interface must be usable:

- near shelves
- near kilns
- while loading batches
- while checking student work
- while correcting records late
- while moving quickly between tasks

Desktop can be more spacious, but mobile is primary.

---

## Visual direction

Use:

- light non-beige backgrounds
- dark graphite text
- off-tone pastel structure
- thin dividers
- compact rows
- quiet tables
- small status labels
- restrained chips
- screenshot-led proof
- mostly typographic hierarchy
- controlled spacing
- colorful operational labels

Avoid:

- floating gradients
- giant rounded cards
- animated icons
- playful craft illustrations
- 3D ceramic renders
- flame colors
- clay-orange clichés
- beige, earth, brown, maroon, or clay colors
- glaze or porcelain-inspired colors
- fake handmade textures
- dashboard explosion hero sections
- oversized buttons

---

## Typography direction

Main typeface:

- Supreme

The typography should feel:

- controlled
- precise
- modern
- readable
- not sterile
- not cute
- not luxury-fashion
- not playful craft

Use weight, spacing, line-height, and alignment more than oversized type.

Avoid excessive uppercase.

Use lowercase naturally, especially for:

- vitrify
- res factae

---

## Product surfaces

### `vitrify.resfactae.xyz`

Private promotional website.

Purpose:

- explain the product
- define the visual system
- present placeholder screenshots
- document product direction
- support private preview access
- become the public product site later

---

### `vitrify.app`

Actual Flutter PWA.

Purpose:

- production journal
- atelier workspace
- piece records
- firing records
- stock records
- student/class/client/order contexts

---

### `demo.vitrify.app`

Demo Flutter environment.

Purpose:

- safe public/private demo
- seeded data
- no real atelier risk
- product walkthrough

Use `demo`, not `try`, because it feels more controlled and professional.

---

## Design-source-of-truth rule

The promo website should define the design language.

The Flutter app should translate that language into operational UI.

The website and app do not need to be identical, but they should clearly belong to the same product system.

---

## Design tension

The final design should hold this tension:

serious information  
+ off-tone pastel color  
+ precise ledger structure  
+ mobile atelier practicality

If the design becomes too tasteful, it is wrong.

If the design becomes too cute, it is wrong.

If the design becomes too grey, it is wrong.

If the design becomes too SaaS, it is wrong.

If the design looks like ceramic branding, it is wrong.
