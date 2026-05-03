# vitrify font delivery

vitrify uses Supreme as the primary typeface for both the private promotional website and, if technically appropriate, the Flutter PWA.

The website must not depend on fonts installed on the end user's device.

Supreme should be self-hosted from:

public/fonts/supreme/

Only optimized webfont files should be committed.

Required files:

- Supreme-Variable.woff2
- Supreme-VariableItalic.woff2

Do not commit:

- desktop font packages
- source archives
- specimen files
- PDFs
- EOT files
- TTF files
- WOFF files if WOFF2 is available
- unnecessary individual static weights

---

## CSS font-face target

The future Next.js site should define Supreme like this:

@font-face {
  font-family: "Supreme";
  src: url("/fonts/supreme/Supreme-Variable.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Supreme";
  src: url("/fonts/supreme/Supreme-VariableItalic.woff2") format("woff2");
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}

:root {
  font-family: "Supreme", Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body {
  font-family: "Supreme", Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

---

## Rule

Supreme is part of the product identity.

If Supreme fails to load, the fallback stack is acceptable, but the deployed website should actively serve Supreme to users through local webfont files.
