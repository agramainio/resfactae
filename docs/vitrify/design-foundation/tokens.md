# vitrify design tokens

This file defines the first shared visual tokens for the vitrify promotional website and the Flutter PWA.

The goal is an off-tone pastel production ledger: serious, structured, precise, but colorful in a slightly strange administrative way.

The design should feel like:

- a production ledger
- colored filing tabs
- inventory stickers
- archive labels
- municipal forms
- school register sheets
- old office folders
- serious information with slightly wrong colors

It should not feel like:

- beige ceramic branding
- clay branding
- porcelain branding
- glaze-inspired branding
- earth-tone branding
- luxury minimalism
- generic SaaS
- cute craft app
- wellness app
- pottery lifestyle brand

---

## Forbidden colors and references

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

The product is for ceramic ateliers, but the interface must not visually imitate ceramics.

---

## Color principles

The palette should be colorful, matte, and slightly off.

Use pastel colors as operational structure, not decoration.

Colors should feel:

- administrative
- odd
- clear
- useful
- memorable
- dry
- slightly anti-taste
- calm enough for daily use
- precise enough for production work

Avoid:

- perfect tasteful harmony
- natural material colors
- craft-market warmth
- glossy gradients
- cute candy UI
- wellness softness
- startup neon accents

---

## Core palette

### Background

surface-main: #F6F7FF
surface-raised: #FFFFFF
surface-muted: #EEF1FA
surface-cold: #E9F4FF
surface-grid: #D7DDEB

The default environment should be light and clean, but not ceramic-white, beige, or warm.

---

## Pastel paper surfaces

paper-blue: #D8ECF7
paper-cyan: #D7F3F0
paper-mint: #DDF3DF
paper-lime: #ECF5C7
paper-yellow: #FFF176
paper-pink: #F7D7EA
paper-lilac: #E3D8F7
paper-violet: #D7D4F5
paper-grey: #E5E7EF

These are for sections, labels, tabs, screenshots, app modules, and proof fragments.

Do not use them as decorative blobs.

---

## Text

text-primary: #20222A
text-secondary: #555B66
text-muted: #7D8491
text-inverse: #FFFFFF

The text should stay dark, crisp, and readable.

---

## Structure

line-soft: #D4DAE6
line-strong: #AAB4C3
structure-blue: #7EA7C4
structure-graphite: #30333B

Use thin lines, dividers, and table-like structure.

The interface should be built more with rules and alignment than with large cards.

---

## Accent palette

The accents should feel like office labels, not craft branding.

accent-primary: #355CFF
accent-primary-hover: #2446D8

accent-cyan: #4BC6D1
accent-green: #7FD66B
accent-lime: #D7E957
accent-yellow: #FFF176
accent-pink: #F28BC4
accent-lilac: #B7A0F5
accent-violet: #8B7CF6
accent-red: #FF6B6B

Use accent colors with restraint.

The palette is intentionally slightly wrong.

---

## Production state colors

State colors should be recognizable, useful, and off-tone.

They should not look like default Bootstrap badges.

state-to-fire-bg: #FFF176
state-to-fire-text: #343000
state-to-fire-border: #D9CB31

state-to-glaze-bg: #D8ECF7
state-to-glaze-text: #16445C
state-to-glaze-border: #7EA7C4

state-ready-bg: #DDF3DF
state-ready-text: #245A2B
state-ready-border: #7FD66B

state-reserved-bg: #F7D7EA
state-reserved-text: #6B2450
state-reserved-border: #F28BC4

state-sold-bg: #E5E7EF
state-sold-text: #3E4350
state-sold-border: #AAB4C3

state-failed-bg: #FFD7D7
state-failed-text: #842828
state-failed-border: #FF6B6B

state-missing-bg: #E3D8F7
state-missing-text: #453074
state-missing-border: #B7A0F5

Failure should be visible, not dramatic.

---

## Context colors

Contexts need their own pastel logic.

context-stock-bg: #DDF3DF
context-student-bg: #D8ECF7
context-class-bg: #FFF176
context-custom-order-bg: #F7D7EA
context-client-order-bg: #E3D8F7
context-test-bg: #D7F3F0
context-external-bg: #ECF5C7

Use context colors for small labels, tabs, section hints, and app grouping.

Do not flood full screens with color unless the layout remains calm.

---

## Typography

Main typeface:

Supreme

Fallback stack:

Supreme, Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

Use Supreme for:

- website
- app if licensing allows
- screenshots
- documentation examples
- product UI mockups

---

## Type scale

Use restrained, proportional scale.

Color can be strange. Typography should stay controlled.

### Hero headline

desktop: 52px / 58px
mobile: 34px / 39px
weight: 500 or 600
tracking: -0.02em

Large but not theatrical.

---

### Section headline

desktop: 32px / 38px
mobile: 25px / 31px
weight: 500 or 600
tracking: -0.015em

---

### Body

desktop: 18px / 29px
mobile: 16px / 25px
weight: 400

Body text should never feel tiny compared to the headline.

---

### Small labels

size: 12px / 16px
weight: 500
tracking: 0.02em

Use for captions, record labels, table headers, status metadata.

Avoid excessive uppercase.

---

### App row text

primary: 16px / 22px
secondary: 13px / 18px
metadata: 12px / 16px

---

## Spacing

Use a compact but calm spacing scale.

space-1: 4px
space-2: 8px
space-3: 12px
space-4: 16px
space-5: 24px
space-6: 32px
space-7: 48px
space-8: 64px
space-9: 96px

App screens should use tighter spacing than the website.

Website sections can breathe, but should not become theatrical.

---

## Radius

Use very little rounding.

radius-none: 0px
radius-small: 3px
radius-medium: 6px

Avoid large rounded cards.

Rounded corners should be practical, not cute.

---

## Borders

Default border:

1px solid line-soft

Important borders:

1px solid line-strong

Use borders and dividers as the main structural device.

Pastel backgrounds should still have visible borders.

---

## Shadows

Use shadows rarely.

Default preference:

no shadow

If needed:

shadow-subtle: 0 1px 2px rgba(32, 34, 42, 0.08)

Avoid floating SaaS cards.

---

## Buttons

### Primary CTA

background: accent-primary
text: text-inverse
border: accent-primary
radius: 3px
height: 40px desktop
height: 38px mobile
padding-x: 16px

Label examples:

- Request access
- See how it works
- Contact res factae

---

### Secondary CTA

background: paper-yellow
text: text-primary
border: line-strong
radius: 3px
height: 40px desktop
height: 38px mobile
padding-x: 16px

Secondary buttons may use off-tone pastel fills, but should remain compact.

Avoid oversized buttons.

---

## Chips

Chips should feel like operational labels or colored inventory stickers.

height: 22px
padding-x: 8px
radius: 3px
font-size: 12px
border: 1px solid matching state border

Use chips for:

- production state
- context
- stock status
- firing type
- failure outcome

Chips are one of the main places where the pastel identity should appear.

---

## Tables and rows

Rows should feel like ledger entries.

Use:

- thin dividers
- compact vertical rhythm
- readable labels
- status chips
- clear metadata
- grouped sections

Avoid:

- heavy cards
- big empty boxes
- excessive shadows
- dashboard tiles everywhere

---

## Screenshot and mockup styling

Placeholder screenshots should use the same token system.

They should look like real product evidence, not decorative mockups.

Use:

- mobile-first app fragments
- grouped piece rows
- firing batch previews
- piece detail records
- failure records
- small statistics modules
- colored operational chips

Avoid:

- fake shiny dashboards
- 3D phone renders
- ceramic object decoration
- decorative shelf illustrations
- overly perfect marketing screenshots

---

## Layout principles

Use:

- max-width containers
- two-column editorial sections on desktop
- single-column structured flow on mobile
- thin dividers between sections
- compact proof modules
- aligned text and screenshots
- tables where useful
- pastel section markers
- colored label systems
- app-like fragments

Avoid:

- endless stacked cards
- decorative grids
- oversized visual modules
- fake dashboard walls
- centered everything
- perfect beige tastefulness
- ceramic material references

---

## Motion

Motion should be minimal.

Allowed:

- subtle opacity transition
- small hover state
- gentle anchor scroll
- screenshot reveal if very restrained

Avoid:

- bouncy animation
- animated icons
- floating objects
- animated dashboards
- parallax
- object animations

---

## Design tension

The final design should hold this tension:

serious information
+
off-tone pastel color
+
precise ledger structure
+
mobile atelier practicality

If the design becomes too tasteful, it is wrong.

If the design becomes too cute, it is wrong.

If the design becomes too grey, it is wrong.

If the design becomes too SaaS, it is wrong.

If the design looks like ceramic branding, it is wrong.

---

## Font delivery rule

Supreme must be self-hosted for the promo site and, if licensing allows, embedded in the Flutter PWA.

The website should not rely on end-user system fonts.

Use local webfont files from:

public/fonts/supreme/

The public site should define Supreme with `@font-face` and use it as the first font in the stack.

Only optimized webfont files should be carried into the deployed site.

Do not commit unnecessary source font packages, desktop font folders, specimens, PDFs, or licensing archives into the public web assets.

Required minimum weights:

- Supreme Regular
- Supreme Medium
- Supreme Semibold
- Supreme Bold

Fallback stack:

Supreme, Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif


---

## Font delivery rule

Supreme must be self-hosted for the promo site and, if appropriate, embedded in the Flutter PWA.

The website should not rely on end-user system fonts.

Use local webfont files from:

public/fonts/supreme/

Required files:

- Supreme-Variable.woff2
- Supreme-VariableItalic.woff2

The public site should define Supreme with `@font-face` and use it as the first font in the stack.

Do not commit unnecessary source font packages, desktop font folders, EOT files, TTF files, specimen PDFs, or full font archives into the public web assets.

Fallback stack:

Supreme, Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
