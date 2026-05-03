# vitrify component language

This file defines the first component direction for both:

1. the private promotional website
2. the Flutter PWA app

The components should feel like an off-tone pastel production ledger: serious, structured, precise, colorful, slightly administrative, and not ceramic-branded.

---

## Component principles

Use components that feel like:

- ledger rows
- records
- labels
- tabs
- production slips
- filing systems
- operational notes
- small tables
- grouped lists
- traceable history

Avoid components that feel like:

- generic SaaS cards
- cute craft widgets
- ecommerce product cards
- decorative ceramic illustrations
- big rounded dashboard blocks
- startup feature tiles
- playful icon grids

---

## Structural rule

The interface should be built mostly from:

- rows
- dividers
- labels
- small modules
- tables
- compact sections
- status chips
- timelines
- record previews

Not from endless cards.

Cards are allowed only when they behave like record containers, not decorative boxes.

---

## 1. Page shell

### Website

The promotional site shell should use:

- narrow editorial content width
- strong top alignment
- quiet navigation
- visible but compact CTA
- thin horizontal rules
- pastel section markers
- screenshot-led proof areas

The website should feel like a product document, not a pitch deck.

### Flutter app

The app shell should use:

- mobile-first layout
- compact bottom navigation or clear section navigation
- readable rows
- fast access to active queues
- no visual noise
- no oversized app bars
- no decorative backgrounds

The app should feel usable in an atelier while moving between shelves, tables, and kilns.

---

## 2. Buttons

Buttons should be compact, clear, and serious.

### Primary button

Use for:

- Request access
- Save
- Create piece
- Complete firing
- Confirm outcome

Visual behavior:

- solid accent-primary fill
- dark or inverse readable text
- small radius
- no large pill shape
- no glow
- no gradient
- no oversized height

### Secondary button

Use for:

- See how it works
- Cancel
- Back
- Edit
- View details

Visual behavior:

- pastel or transparent fill
- thin border
- compact height
- restrained hover/tap state

### Destructive button

Use for:

- Delete
- Mark failed
- Abort firing
- Remove from batch

Visual behavior:

- use failed-state palette
- require confirmation for high-risk actions
- avoid dramatic red full-screen treatment unless the action is severe

---

## 3. Chips and status labels

Chips are a core part of the vitrify language.

Use chips for:

- production state
- context
- firing type
- stock status
- failure outcome
- owner type
- batch status

Chips should feel like small administrative labels.

They should be:

- compact
- rectangular
- slightly rounded at most
- bordered
- readable
- pastel-filled
- consistent

Avoid:

- pill badges everywhere
- bright saturated chips
- emoji labels
- icon-heavy labels
- default framework badge styling

Examples:

- to fire
- to glaze
- ready
- reserved
- sold
- failed
- missing
- stock
- student work
- class
- custom order
- external
- test

---

## 4. Ledger rows

Ledger rows are the main app component.

Use for:

- piece lists
- firing batch contents
- stock lists
- student pieces
- class output
- client/order pieces
- failure history
- export/import preview

A row should usually contain:

- primary object name
- secondary metadata
- state chip
- context chip
- small action or disclosure affordance

Example row structure:

piece name  
context / owner / date / batch reference  
[state chip] [context chip]

Rows should use thin dividers rather than heavy cards.

Rows should remain readable on mobile.

---

## 5. Record module

A record module shows one object in detail.

Use for:

- piece detail
- firing detail
- failure record
- stock derivation
- student/class context
- client/order context

A record module should have:

- clear title
- small metadata
- grouped fields
- thin section dividers
- compact labels
- editable values where appropriate
- history at the bottom

The record module should feel like a structured file, not a dashboard card.

---

## 6. Piece record component

The piece record is the central product object.

A piece record should expose:

- piece name
- unique piece identity
- production state
- purpose/context
- stock status
- owner/student/client/order connection
- firing history
- failure history
- value
- notes
- created date
- last updated date

The design should make clear that one piece equals one physical object.

If multiple similar pieces are grouped visually, the UI must still preserve individual records.

---

## 7. Grouped piece list

Grouped lists are useful when many similar pieces exist.

Example:

5 × small mug / blue

But expansion must reveal individual physical pieces.

A grouped piece row should show:

- group name
- quantity
- shared attributes
- mixed-state warning if not all pieces match
- expand action
- individual piece rows inside

Never let grouping erase the physical-object model.

---

## 8. Firing batch component

A firing batch should feel like a controlled production event.

A firing batch component should show:

- kiln
- firing type
- batch state
- date/time
- pieces loaded
- piece count
- pending outcomes
- completed outcomes
- notes
- failure records

Suggested structure:

1. batch identity
2. kiln and firing type
3. loaded pieces
4. completion outcome
5. failure/remake consequences
6. history

Avoid making this look like a fake kiln dashboard.

The kiln is context, not the visual brand.

---

## 9. Failure record component

Failure is an outcome, not a production stage.

A failure record should show:

- affected piece
- when failure was recorded
- related firing if relevant
- failure category
- notes
- remake needed
- value/loss if relevant
- resulting status

The component should be visible and calm.

Failure should not disappear.  
Failure should not become theatrical.

---

## 10. Stock derivation component

Stock should be shown as derived from real pieces.

A stock module may show:

- ready
- reserved
- sold
- delivered
- missing
- failed
- available

The design should communicate:

available stock = real ready pieces minus pieces that are reserved, sold, missing, failed, or otherwise unavailable.

Avoid abstract inventory-only design.

---

## 11. Timeline component

Use timelines for:

- firing history
- piece lifecycle
- failure/remake history
- class production output
- order progress

Timeline style:

- thin vertical or horizontal rule
- small date labels
- compact event titles
- state/context chips
- no decorative icons unless strictly useful

Example events:

- created
- bisque firing loaded
- bisque completed
- glaze applied
- final firing loaded
- failed
- remake created
- ready
- reserved
- delivered

---

## 12. Tables

Tables are allowed and encouraged when they make information clearer.

Use tables for:

- context matrix
- stock derivation
- failure summaries
- firing outcomes
- import/export previews
- operational questions
- production statistics

Table style:

- thin lines
- no heavy zebra striping
- compact rows
- readable headers
- pastel labels only where meaningful
- mobile-friendly transformations

On mobile, tables can become divided lists if needed.

---

## 13. Screenshot proof modules

The promotional site should use screenshots as evidence.

Screenshot modules should include:

- screenshot or placeholder mock
- short caption
- 1–3 annotations
- nearby explanatory copy

Do not use screenshots as decoration.

Every screenshot should answer a product question, for example:

- What needs attention now?
- What entered the kiln?
- What failed?
- What is actually available?
- Which pieces belong to a student?
- What changed after firing?

---

## 14. Placeholder screenshots

Until the real app UI is ready, placeholder screenshots are allowed.

But they must be designed as product targets, not fake decoration.

Placeholder screenshots should show realistic data:

- grouped pieces
- piece detail
- firing batch
- failure record
- stock derivation
- student/class context
- client/custom order context
- test/external pieces

The placeholder screenshots should later become implementation targets for Flutter.

---

## 15. Navigation

### Promotional website navigation

Recommended items:

- what it does
- pieces
- firings
- failures
- stock
- memory
- request access

Navigation should be quiet.

Avoid large sticky marketing nav unless it is useful.

### Flutter app navigation

The app should prioritize operational areas:

- Today / queues
- Pieces
- Firings
- Stock
- People / classes / orders
- History

The final names can change, but the navigation should reflect atelier work, not software categories.

---

## 16. Forms

Forms must be fast and forgiving.

Use:

- short labels
- clear grouping
- inline creation where useful
- autocomplete instead of long dropdowns
- sensible defaults
- late correction
- compact validation
- visible save/confirmation state

Avoid:

- long generic forms
- unnecessary required fields
- modal overload
- dropdowns with too many values
- forms that interrupt studio work

---

## 17. Empty states

Empty states should be dry and useful.

Avoid cute copy.

Good empty-state tone:

- No pieces waiting for firing.
- No failures recorded for this batch.
- No ready stock found.
- No external pieces in the kiln queue.

Avoid:

- Hooray!
- Nothing here yet!
- Your studio is sparkling clean!
- Add your first magical piece!

---

## 18. Copy tone inside UI

The UI should be:

- clear
- dry
- calm
- operational
- non-cute
- non-corporate

Use plain verbs:

- record
- load
- complete
- mark
- move
- reserve
- deliver
- remake
- export
- correct

Avoid hype verbs:

- supercharge
- unlock
- transform
- revolutionize
- delight

---

## 19. Mobile behavior

On mobile:

- rows should remain compact
- CTAs should not be huge
- dividers should structure the screen
- chips should wrap gracefully
- screenshots should appear early on the promo site
- forms should avoid long scrolling where possible
- primary actions should be reachable
- text should remain readable

Avoid desktop layouts squeezed into mobile.

---

## 20. Desktop behavior

On desktop:

- use more editorial whitespace
- allow two-column website sections
- allow wider records and tables
- keep screenshots beside explanations
- use matrices where useful
- do not create dashboard walls

Desktop is allowed to be more spacious, but not more decorative.

---

## Final rule

The component system should feel like:

serious records  
+ off-tone pastel labels  
+ thin administrative structure  
+ mobile atelier practicality

If the components look like generic SaaS cards, they are wrong.

If they look like pottery branding, they are wrong.

If they look cute, they are wrong.

If they look like a spreadsheet with colors added randomly, they are also wrong.
