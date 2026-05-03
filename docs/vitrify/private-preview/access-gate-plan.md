# vitrify private preview access gate

The promotional website at `vitrify.resfactae.xyz` should not be public during the early design and product-definition phase.

The site will contain:

- unfinished product positioning
- placeholder screenshots
- design-system experiments
- early app UI direction
- private preview language
- non-final CTA flows

Because of this, the first version should include a simple private access gate.

---

## Goal

The access gate should make the site safe to deploy while the product and design system are still being shaped.

It should prevent casual public browsing, but it does not need to be high-security authentication.

This is a preview gate, not a user account system.

---

## Recommended first version

Use a simple password gate.

Flow:

1. visitor opens `vitrify.resfactae.xyz`
2. access screen appears
3. visitor enters preview password
4. if correct, website content becomes visible
5. access state is remembered locally for convenience

---

## Access screen copy

### Title

vitrify private preview

### Body

This product site is currently used to define the vitrify design system, product language, and app interface direction.

### Field label

Access code

### Button

Enter preview

### Error message

Access code not recognized.

---

## Visual style

The access gate should follow the same design language as the site:

- Supreme typeface
- light non-beige background
- dark graphite text
- thin dividers
- off-tone pastel accent
- compact input
- compact button
- no centered SaaS login card
- no playful illustration
- no ceramic imagery

The gate should feel like an administrative access slip, not a login product.

---

## Technical approach

For the first implementation, the password can be checked client-side using an environment variable.

Example environment variable:

`NEXT_PUBLIC_VITRIFY_PREVIEW_CODE`

This is acceptable only for early preview gating because it is not true security.

Later, if needed, replace with:

- Firebase Authentication
- server-side middleware
- invite-only access
- Sanity preview mode
- protected staging environment

---

## Important limitation

A client-side password gate is not secure against a technical user.

It is only meant to prevent casual public access while the site is being designed.

Do not put confidential business data, real client data, real student data, or private atelier records behind this simple gate.

---

## Content safety rules

While the preview gate is simple, the site should only use:

- placeholder screenshots
- synthetic data
- fake people
- fake orders
- fake class names
- fake firing batches
- fake production history

Do not use real atelier data.

Do not use real client or student names.

Do not use real private business numbers.

---

## Future public release

When the site becomes public:

1. remove the access gate
2. replace placeholder screenshots with approved screenshots
3. review all copy
4. verify CTA destinations
5. confirm privacy/legal pages if collecting email addresses
6. confirm domain setup
7. confirm analytics, if used
8. confirm no private preview-only notes remain visible

---

## Final rule

The access gate exists so the website can be deployed early without pretending to be finished.

It should make iteration safe, not become a product feature.
