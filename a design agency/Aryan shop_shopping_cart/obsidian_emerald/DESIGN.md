```markdown
# Design System Specification: The Editorial Atelier

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Curator."** 

Moving away from the cluttered "warehouse" feel of traditional e-commerce, this system treats every product like a gallery piece. We achieve a premium, high-fidelity experience by prioritizing white space, intentional asymmetry, and tonal depth over rigid grids and borders. The goal is to create a digital environment that feels as tactile and sophisticated as a luxury editorial magazine. We break the "template" look by layering surfaces and using high-contrast typography scales to guide the user’s eye with authority and grace.

---

## 2. Colors: Tonal Architecture
Our palette is rooted in a sophisticated Emerald (`primary: #00342b`) and a range of soft, architectural neutrals. This isn't just a color list; it’s a system for building depth.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to section off content. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background creates a clear, sophisticated transition without the "cheapening" effect of a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine vellum.
*   **Base Layer:** `surface` (#f8f9fa) or `surface-container-lowest` (#ffffff).
*   **Secondary Layer:** Use `surface-container` (#edeeef) for content groupings.
*   **Prominence:** Use `surface-bright` to draw the eye to featured editorial content.

### The "Glass & Gradient" Rule
To elevate the experience, use **Glassmorphism** for floating elements (like navigation bars or quick-buy overlays). Apply a semi-transparent `surface` color with a `20px` backdrop blur. 
*   **Signature Textures:** For primary CTAs or Hero backgrounds, do not use flat colors. Apply a subtle linear gradient from `primary` (#00342b) to `primary-container` (#004d40) at a 135-degree angle. This adds "soul" and a professional luster that flat hex codes lack.

---

## 3. Typography: The Editorial Voice
We use a dual-font strategy to balance character with extreme readability.

*   **Display & Headlines (Manrope):** This is our "Editorial" voice. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) for hero sections to create a bold, authoritative impact.
*   **Body & Labels (Inter):** This is our "Functional" voice. Inter provides high legibility at smaller scales. Use `body-md` (0.875rem) for product descriptions to maintain a clean, modern aesthetic.
*   **Hierarchy as Identity:** By contrasting a massive `headline-lg` (2rem) against a quiet `label-sm` (0.6875rem) in `secondary` (#5d5e61), we create a sophisticated "fashion-mag" rhythm that feels intentional and high-end.

---

## 4. Elevation & Depth: Tonal Layering
We convey importance through light and layering, never through heavy shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift through color value alone.
*   **Ambient Shadows:** When a "floating" element (like a modal or dropdown) is required, use "Ambient Shadows."
    *   **Spec:** Blur: 40px, Spread: -10px, Color: `on-surface` (#191c1d) at 6% opacity.
    *   *Director's Note:* Shadows must look like natural light hitting a surface, not a dark gray smudge.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., input fields), use the `outline-variant` (#bfc9c4) at **20% opacity**. 100% opaque borders are strictly forbidden.
*   **Depth through Blur:** Use backdrop-blurs on `surface-variant` containers to allow the "spirit" of background imagery to bleed through, softening the edges of the UI.

---

## 5. Components: Functional Elegance

### Buttons
*   **Primary:** Background: `primary` (#00342b) gradient; Text: `on_primary` (#ffffff). Radius: `md` (0.375rem).
*   **Secondary:** Background: `secondary_container` (#e2e2e5); Text: `on_secondary_fixed` (#1a1c1e).
*   **Interaction:** On hover, primary buttons should shift to `primary_container` (#004d40) with a subtle `2px` vertical lift.

### Cards & Product Grids
*   **Forbid Dividers:** Do not use lines to separate products. Use the Spacing Scale (e.g., `8` (2.75rem)) to create breathing room.
*   **Asymmetric Layouts:** In hero sections, overlap a `surface-container-lowest` card by 20px over a product image to break the grid and create a "custom-built" feel.

### Input Fields
*   **Style:** No background color. Only a "Ghost Border" at the bottom (1px, 20% opacity `outline-variant`).
*   **Focus State:** The bottom border transitions to 2px `primary` (#00342b). Helper text uses `label-sm`.

### Glass Navigation Bar
*   **Placement:** Fixed top. 
*   **Style:** 70% opacity `surface` with a 15px backdrop-blur. No bottom border; use a subtle `surface-dim` (#d9dadb) shadow (4% opacity).

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace the Void:** Use the `12` (4rem) and `16` (5.5rem) spacing tokens between major sections to let the design breathe.
*   **Use Tonal Shifts:** Transition from a `surface` background to a `surface-container-low` background to signal a new content zone.
*   **Tighten Headlines:** Set `display` and `headline` types with -1% or -2% letter spacing for a more premium, "inked" look.

### Don’t:
*   **No "Hard" Borders:** Never use a 100% opaque stroke to define a container. 
*   **No Pure Black Shadows:** Shadows must be a tinted version of the surface color to maintain a professional "glow."
*   **No Center-Align Overload:** Use left-aligned editorial layouts for long-form content to maintain the "Curator" vibe.
*   **No Default Buttons:** Every CTA should feel weighted and intentional, using the Emerald primary palette to draw the eye with "soft power."```