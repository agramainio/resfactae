# vitrify Sanity CMS content model

The vitrify promotional website should use Sanity CMS so that the content can be updated without editing code.

The CMS should control product messaging, page structure, screenshots, CTAs, feature explanations, private-preview copy, and future public launch content.

Sanity should not be used for real atelier production data.

Real product data belongs to the Flutter app and Firebase.

---

## CMS purpose

Sanity is for public/product content:

- landing page copy
- section order
- CTA labels
- screenshots and captions
- feature groups
- production context descriptions
- product examples
- private preview messaging
- FAQ
- changelog
- release notes
- future case studies

Sanity is not for:

- real pieces
- real firings
- real students
- real clients
- real orders
- app authentication
- studio records
- production database data

---

## Main document types

### 1. Site settings

Global website settings.

Fields:

- site title
- site description
- default SEO title
- default SEO description
- social preview image
- primary CTA label
- primary CTA URL
- secondary CTA label
- secondary CTA URL
- contact email
- preview mode enabled
- maintenance message

---

### 2. Landing page

The main page at `vitrify.resfactae.xyz`.

Fields:

- internal title
- hero section
- ordered page sections
- closing CTA section
- SEO title
- SEO description
- social image
- publish status

---

### 3. Hero section

Fields:

- headline
- subcopy
- eyebrow label
- primary CTA
- secondary CTA
- hero screenshot
- screenshot caption
- supporting note

Default headline:

Production journal for ceramic ateliers.

---

### 4. Page section

Reusable structured section.

Fields:

- section title
- short heading
- body copy
- section type
- visual type
- screenshot reference
- CTA reference
- supporting list
- proof module
- display order
- background treatment

Allowed section types:

- problem
- product explanation
- piece source of truth
- production contexts
- firings
- failure
- stock
- statistics
- atelier memory
- closing CTA

---

### 5. CTA

Reusable call-to-action object.

Fields:

- label
- URL
- style
- destination type
- opens in new tab
- internal note

Allowed labels should stay controlled:

- Request access
- See how it works
- Contact res factae
- Follow development
- Ask about vitrify
- Join the private preview

Avoid aggressive SaaS CTAs.

---

### 6. Screenshot

Screenshot or placeholder visual.

Fields:

- title
- image
- alt text
- caption
- screenshot type
- related product area
- annotations
- placeholder status
- approval status
- internal notes

Screenshot types:

- hero queue
- piece detail
- production contexts
- firing batch
- failure record
- stock derivation
- statistics preview
- app navigation

All screenshots must use fake or approved data.

---

### 7. Screenshot annotation

Small annotation attached to a screenshot.

Fields:

- label
- description
- position x
- position y
- annotation style

Annotations should be sparse.

Screenshots are evidence, not decoration.

---

### 8. Feature group

A grouped explanation of capabilities.

Fields:

- title
- intro copy
- features
- related screenshot
- product area
- display order

Feature examples:

- Record physical pieces
- Track production states
- Load and complete firings
- Record failures and losses
- Derive stock from real objects
- Link pieces to students, classes, clients, and orders
- Preserve atelier history over time
- Import and export data
- Connect to a Shopify webstore
- Allow late recording and correction

---

### 9. Feature item

Fields:

- title
- short description
- product area
- optional screenshot
- status
- internal note

Feature status values:

- planned
- in progress
- available
- private preview
- later

The public site should not overpromise unfinished features.

---

### 10. Production context

Editable list of piece contexts.

Fields:

- name
- short description
- operational use
- example
- color token
- display order

Required contexts:

- Stock
- Student work
- Class or workshop piece
- Custom order
- Client order
- Test or experiment
- External or brought-in piece

---

### 11. Operational question

Questions shown in the problem section.

Fields:

- question
- related product area
- why it matters
- display order

Examples:

- Which student pieces still need firing?
- Which custom-order pieces are blocked by failure?
- What is actually available stock?
- What failed in the last firing?
- Which stock is ready but not moving?

---

### 12. Piece example

Synthetic product example used in page modules or screenshots.

Fields:

- piece name
- production state
- context
- owner label
- firing history summary
- failure outcome
- stock status
- notes
- fake data confirmation

Piece examples must never use real private data.

---

### 13. Firing example

Synthetic firing example.

Fields:

- firing title
- kiln name
- firing type
- batch state
- pieces loaded count
- completed count
- failed count
- notes
- fake data confirmation

---

### 14. Failure example

Synthetic failure/loss example.

Fields:

- piece name
- failure category
- stage at failure
- related firing
- remake needed
- estimated loss label
- notes
- fake data confirmation

---

### 15. FAQ item

Fields:

- question
- answer
- category
- display order
- public/private visibility

Useful FAQ categories:

- product
- access
- demo
- data
- Shopify
- export/import
- studio workflow

---

### 16. Changelog entry

For future public development notes.

Fields:

- title
- date
- summary
- body
- related product area
- visibility
- version label

Visibility values:

- private
- public
- hidden

---

## Content safety

Sanity content must use:

- placeholder screenshots
- synthetic records
- fake names
- fake orders
- fake class names
- fake production history

Do not publish:

- real client names
- real student names
- real private atelier records
- real sales numbers
- real sensitive production data
- unapproved screenshots

---

## Editorial rules

Always write:

- vitrify
- res factae

Use lowercase unless grammar makes it unavoidable.

Avoid:

- startup hype
- cute craft language
- pottery lifestyle language
- dashboard vanity language
- exaggerated claims

Preferred tone:

- precise
- dry
- calm
- operational
- mature
- product-focused

---

## Final rule

The CMS should make the site easy to update without making the page feel like a generic flexible marketing builder.

Content should be structured enough to protect the product language and design system.
