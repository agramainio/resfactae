# vitrify promotional website structure

The promotional website at `vitrify.resfactae.xyz` is private for now.

It should act as:

1. a private product explanation
2. a design source of truth for the Flutter app
3. a place to test the vitrify visual system
4. a future public landing page

The site should not start from the current Astro page.

The planned stack is:

- Next.js
- Sanity CMS
- Firebase App Hosting
- private access gate
- placeholder screenshots until the app UI is ready

---

## Primary page goal

Explain vitrify clearly:

vitrify is a production journal for professional ceramic ateliers.

It records real physical pieces, production states, firings, failures, stock, students, classes, clients, orders, tests, external pieces, and the history that accumulates around them.

---

## Site tone

The site should feel:

- precise
- editorial
- serious
- calm
- colorful
- slightly off-tone
- product-focused
- operational

It should not feel:

- public SaaS template
- craft brand
- pottery lifestyle page
- ecommerce site
- portfolio
- studio agency page
- beige ceramic page
- dashboard explosion

---

## Page structure

### 1. Private gate

Before the site becomes public, visitors should see a simple access screen.

Purpose:

- keep the promo page private
- allow placeholder screenshots
- allow unfinished copy
- protect early product positioning
- make it safe to iterate publicly on Firebase App Hosting

The gate should be minimal:

- vitrify wordmark
- short sentence
- password field or access token
- compact submit button

Tone:

Private product preview.

No cute language.

---

### 2. Hero

Headline:

Production journal for ceramic ateliers.

Subcopy:

vitrify records what exists, where it is in production, who it belongs to, what entered the kiln, what came out, what failed, what is ready, and what the atelier can learn from that history.

CTA pair:

- Request access
- See how it works

Visual:

- mobile placeholder screenshot
- current queues or grouped pieces by production state

---

### 3. Problem

Headline:

The studio remembers too much.

Explain that ceramic work is spread across shelves, kilns, notebooks, spreadsheets, messages, and memory.

Use operational questions instead of dramatic marketing copy.

Example questions:

- Which student pieces still need firing?
- Which custom-order pieces are blocked by failure?
- What is actually available stock?
- What failed in the last firing?
- What needs to be remade?
- Which external pieces are waiting in the kiln queue?
- Which stock is ready but not moving?

---

### 4. What vitrify does

Headline:

vitrify tracks the physical life of ceramic work.

Explain that vitrify tracks real physical pieces through production states, firings, failures, stock, students, classes, clients, orders, tests, and external pieces.

Visual:

- placeholder piece detail screenshot
- state
- context
- firing history
- notes
- failure status

---

### 5. The piece is the source of truth

Headline:

One real object. One record.

Explain:

A piece is one real physical object. If five identical pieces are made, they are five records, even when grouped visually.

Use a compact piece-record module.

---

### 6. Production contexts

Headline:

Stock is only one part of the atelier.

Show contexts:

- stock
- student work
- class or workshop piece
- custom order
- client order
- test or experiment
- external or brought-in piece

Use a matrix, not large cards.

---

### 7. Firings

Headline:

Kiln batches become part of the record.

Explain how firing batches connect many individual pieces to one production event.

Visual:

- firing batch placeholder
- loaded pieces
- kiln event
- completion outcome
- failure outcome

Avoid fake kiln-dashboard visuals.

---

### 8. Failure

Headline:

Failure is not a stage. It is an outcome.

Explain that failure should remain visible and useful for remakes, loss analysis, and studio learning.

Visual:

- failure record
- simple operational loss summary

---

### 9. Stock

Headline:

Stock is not an abstract number.

Explain that stock is derived from real pieces.

Show:

ready  
minus reserved  
minus sold  
minus missing  
minus failed  
equals available stock

---

### 10. Atelier memory

Headline:

The record becomes more useful with every firing.

Explain the long-term value:

- recurring failures
- firing patterns
- stock movement
- class output
- custom-order problems
- production learning

---

### 11. Closing CTA

Headline:

Know what exists, where it is, what happened to it, and what should happen next.

CTA pair:

- Request access
- See how it works

Secondary:

- Contact res factae

---

## Mobile behavior

Mobile should not feel like desktop squeezed down.

Rules:

- short hero
- screenshot appears early
- sections are divided by thin rules
- no endless card stacks
- compact modules
- readable line length
- small but clear CTAs
- chips wrap cleanly
- screenshot captions stay readable

---

## Desktop behavior

Desktop can be more editorial.

Use:

- two-column sections
- screenshot beside explanation
- production-context matrix
- wider proof modules
- restrained sticky side navigation only if useful

Avoid:

- dashboard walls
- decorative layout tricks
- oversized hero drama

---

## Screenshot rule

Screenshots are evidence, not decoration.

Each screenshot should answer a product question.

Examples:

- What needs attention now?
- What entered the kiln?
- What failed?
- What is actually available?
- Which pieces belong to a student?
- What changed after firing?

