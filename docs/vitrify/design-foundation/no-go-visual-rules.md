# vitrify no-go visual rules

These rules apply to both:

- the vitrify promo website
- the vitrify Flutter PWA UI redesign

They exist because the product must not drift into generic SaaS, Figma-canvas mockup aesthetics, or default tech typography.

---

## No pseudo-device mockups

Do not use fake device frames that look like:

- weird wide phones
- narrow iPads
- generic app-store screenshots
- decorative device shells
- floating phone mockups
- 3D phone renders

Screenshots should appear as evidence, not as gadget decoration.

Use:

- direct screenshot crops
- simple bordered image panels
- annotated product evidence
- compact screenshot rows
- before/after UI audit panels

Avoid making the screenshot container more important than the screenshot.

---

## No checkered or Figma-canvas background

Do not use:

- checkered backgrounds
- grid backgrounds
- Figma-canvas style backgrounds
- design-tool presentation backgrounds
- decorative graph-paper fields
- fake workspace/canvas effects

The site should feel like a precise product document, not a design file preview.

Use:

- flat non-beige background
- thin section dividers
- quiet blocks of pastel structure
- rows and records

---

## No huge unbalanced titles

Do not use giant theatrical landing-page type.

Avoid:

- billboard-sized hero titles
- extreme SaaS headline scale
- tiny subtitle under huge headline
- oversized display typography that breaks page balance

Use:

- proportional headline and body scale
- strong but controlled hierarchy
- readable body copy
- editorial rhythm
- compact proof near copy

The product should feel confident, not loud.

---

## No default tech sans feeling

Supreme is the primary typeface.

The design must not fall back visually into:

- Helvetica-like neutrality
- Inter
- Sora
- San Francisco
- system-default tech UI
- generic startup sans-serif
- Vercel/Next default typography
- app-template typography

The deployed website must self-host Supreme.

Fallbacks are emergency only and should not define the look.

Preferred fallback stack:

Supreme, Avenir Next, Gill Sans, Trebuchet MS, sans-serif

Do not use Inter as the documented fallback.

Do not use system-ui as the documented fallback.

---

## Screenshot presentation rule

Real current app screenshots are allowed, even if the app UI is unfinished.

But present them as:

- current app evidence
- current-state UI
- audit material
- implementation proof

Do not wrap them in fake phones.

Do not make them look more polished than they are.

Do not pretend raw UI is final.

---

## Final rule

If the page looks like a Figma presentation, it is wrong.

If it looks like a generic Next.js template, it is wrong.

If it looks like a SaaS hero with a fake device mockup, it is wrong.

If it looks like system-font tech UI, it is wrong.


---

## vitrify wordmark rule

The word `vitrify` should not be bolded with markdown-style emphasis everywhere.

It should have a deliberate wordmark treatment when used as the product name.

Use three levels:

### 1. Wordmark use

Use a styled wordmark for:

- header
- hero
- footer
- selected screenshot/evidence labels

Wordmark treatment:

- always lowercase
- heavier than body text
- visually recognizable
- possibly slightly larger
- deliberately plain
- consistent across the site

### 2. Normal text use

In body paragraphs, write vitrify normally.

Example:

vitrify records the physical life of ceramic work.

Do not bold every mention in paragraph copy.

### 3. Emphasis use

Occasional emphasis is allowed, but should be rare.

Example:

vitrify is not ecommerce.

Do not make every product-name mention look like documentation or markdown emphasis.