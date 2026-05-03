# vitrify Flutter app UI direction

This file translates the vitrify design foundation into direction for the Flutter PWA.

The app is currently raw. The promotional website will act as the design source of truth, but the app must become the real operational expression of that system.

---

## App design goal

The Flutter app should feel like a mobile production ledger for ceramic ateliers.

It should be:

- fast
- readable
- precise
- colorful
- mobile-first
- operational
- structured
- forgiving
- easy to correct later
- usable while moving around the atelier

It should not feel like:

- a generic CRUD app
- a Firebase demo
- ecommerce
- CRM software
- a student app
- a cute pottery notebook
- a dashboard toy
- a beige ceramic brand
- a spreadsheet clone

---

## Visual identity

The app should use the same off-tone pastel administrative language as the promo site.

Think:

- colored filing tabs
- inventory stickers
- archive labels
- municipal forms
- school register sheets
- compact production records

Do not use:

- beige
- earth tones
- clay colors
- brown
- maroon
- porcelain references
- glaze references
- kiln flame colors
- handmade texture effects

The product is for ceramic studios, but the UI should not imitate ceramic material.

---

## Main app metaphor

The app is a production memory system.

The main objects are not screens or dashboards.

The main objects are:

- pieces
- firings
- failures
- stock states
- people
- classes
- orders
- tests
- external pieces
- history

The UI should always help answer:

- what exists?
- where is it?
- who does it belong to?
- what happened to it?
- what should happen next?

---

## Primary navigation

The exact labels can evolve, but the app should organize around atelier work.

Recommended navigation areas:

1. Today / queues
2. Pieces
3. Firings
4. Stock
5. People / classes / orders
6. History

Avoid navigation based only on database objects.

The app should feel like work, not admin tables.

---

## Today / queues

This should be the operational home.

It should show what needs attention now.

Possible queue groups:

- to fire
- to glaze
- ready
- waiting outcome
- failures needing remake
- external pieces waiting
- custom orders blocked
- student/class work pending

Design:

- compact sections
- thin dividers
- state chips
- quick actions
- no dashboard wall
- no giant cards

---

## Pieces screen

The Pieces screen should allow browsing and correcting real physical objects.

It should support:

- grouped visual display
- expansion to individual pieces
- search
- filters by state
- filters by context
- filters by person/order/class
- fast edit
- delete with confirmation
- manual correction of state when needed

Important rule:

A grouped row may show 5 similar pieces, but expansion must preserve the fact that they are five individual physical objects.

---

## Piece detail screen

The piece detail screen should feel like a record.

It should show:

- piece identity
- production state
- context
- person/client/student/order/class connection
- stock status
- firing history
- failure history
- value
- notes
- timestamps
- correction actions

Structure:

1. identity
2. current state
3. context
4. production history
5. failure history
6. stock/commercial status
7. notes
8. actions

Use dividers and rows, not nested cards.

---

## New piece flow

The New Piece flow must be fast.

It should support:

- choosing or creating piece type
- choosing purpose/context
- choosing quantity
- choosing colors or attributes if relevant
- linking to stock/student/class/client/order/test/external context
- creating multiple pieces as individual physical records
- sensible defaults
- late correction later

Use autocomplete and inline creation where possible.

Avoid long dropdowns.

Avoid forcing complete data before the atelier can record the object.

---

## Firing workflow

The firing workflow should feel like a controlled production event.

Recommended flow:

1. choose kiln
2. choose firing type
3. load pieces
4. review batch
5. start or record firing
6. complete firing
7. record outcomes
8. handle failures/remakes

Important:

A firing is not just a date. It is a batch event that changes the history of many physical pieces.

The UI should make clear:

- what entered
- what came out
- what moved forward
- what failed
- what needs correction
- what needs remake

Avoid fake kiln dashboard aesthetics.

---

## Failure handling

Failure is an outcome, not a production state.

The UI should allow failure to be recorded:

- during firing completion
- after the fact
- from a piece detail page
- from a grouped piece list
- from a correction flow

Failure record should include:

- affected piece
- related firing if relevant
- failure category
- notes
- remake needed
- value/loss if relevant
- resulting status
- date recorded

Failure should stay visible in history.

Do not let failed pieces silently disappear.

---

## Stock screen

Stock should be derived from real pieces.

The stock screen should not be a manually typed inventory table.

It should show counts from pieces by status:

- ready
- available
- reserved
- sold
- delivered
- missing
- failed
- remade

The UI should make clear that available stock comes from real ready pieces minus unavailable pieces.

---

## People, classes, and orders

The app should connect pieces to people and contexts without becoming CRM software.

People may be:

- students
- clients
- both

Class/workshop context should group pieces from a session while preserving individual physical records.

Order context should connect pieces to client/custom-order work while preserving production states, failures, replacements, and completion status.

Keep this operational.

Avoid CRM-style pipelines, sales dashboards, and customer-management bloat.

---

## History and statistics

Statistics should emerge from ordinary records.

Useful views:

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
- custom orders blocked by failure

Avoid vanity dashboards.

The goal is better atelier memory and better operational decisions.

---

## Forms

Forms should be compact and forgiving.

Use:

- short field labels
- autocomplete
- inline creation
- sensible defaults
- editable records
- late correction
- confirmation after save

Avoid:

- long generic forms
- too many required fields
- modal overload
- huge dropdowns
- save flows that interrupt work

---

## Mobile rules

Mobile is primary.

On mobile:

- rows should be compact
- dividers should structure information
- CTAs should be reachable but not huge
- chips should wrap cleanly
- text must remain readable
- forms must be fast
- editing must be possible without hunting
- screens should avoid nested card stacks

The app should be usable by someone standing in a studio, not sitting at a desk with perfect attention.

---

## Desktop rules

Desktop can be more spacious.

Use desktop for:

- wider tables
- more filters
- side-by-side details
- historical views
- export/import review
- richer statistics

But desktop should not become a dashboard wall.

---

## Copy tone

Use plain operational language.

Good verbs:

- record
- load
- complete
- mark
- move
- reserve
- deliver
- remake
- correct
- export
- import

Avoid hype language:

- supercharge
- unlock
- revolutionize
- delight
- magic
- effortless

Empty states should be dry and useful.

Examples:

- No pieces waiting for firing.
- No failures recorded for this batch.
- No external pieces in the kiln queue.
- No ready stock found.

---

## Final design rule

The Flutter app should feel like:

serious records  
+ off-tone pastel labels  
+ thin administrative structure  
+ real atelier practicality

If it looks like generic SaaS, it is wrong.

If it looks like pottery branding, it is wrong.

If it looks cute, it is wrong.

If it looks like a spreadsheet with random colors, it is wrong.
