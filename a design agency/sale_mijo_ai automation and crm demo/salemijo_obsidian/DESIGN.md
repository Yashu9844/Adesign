```markdown
# Design System Specification: The Architectural Curator

## 1. Overview & Creative North Star
The "Architectural Curator" is a design system built for Salemijo to redefine the CRM experience from a cluttered database into a premium agency tool. We move away from the "SaaS-standard" look of rigid grids and 1px borders, opting instead for **Editorial Logic**. 

**Creative North Star: The Digital Gallery.** 
Just as a high-end gallery uses lighting and spatial depth to highlight art, this system uses tonal layering and expansive negative space to highlight data. We create trust not through complexity, but through intentionality. Expect asymmetrical layouts, overlapping "frosted" surfaces, and a type scale that demands authority.

---

## 2. Color & Tonal Surface Strategy
This system utilizes a sophisticated palette of deep Navys (`primary_container`) and professional Teals (`secondary`).

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders for sectioning are strictly prohibited. 
Boundaries must be defined solely through background color shifts. For example, a `surface_container_low` sidebar sitting against a `surface` background provides all the definition a user needs without the "boxed-in" feeling of traditional CRM software.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface_container` tiers to create "nested" depth:
- **Base Layer:** `surface` (#f7f9fb)
- **Secondary Workspace:** `surface_container_low` (#f2f4f6)
- **Interactive Cards:** `surface_container_lowest` (#ffffff)
- **High-Intensity Data Panels:** `surface_container_high` (#e6e8ea)

### The "Glass & Gradient" Rule
For AI-driven features (using `tertiary` tokens), utilize **Glassmorphism**. Apply a backdrop-blur (12px–20px) to `surface_container_lowest` at 80% opacity. 
- **Signature Texture:** Use a subtle linear gradient from `primary` (#000000) to `primary_container` (#131b2e) for high-impact CTAs to provide a "midnight silk" finish that feels bespoke.

---

## 3. Typography: Editorial Authority
We pair the geometric precision of **Manrope** for high-level display with the functional clarity of **Inter** for data-heavy environments.

*   **Display & Headlines (Manrope):** Use `display-lg` (3.5rem) and `headline-md` (1.75rem) to break the layout. These should be set with tight letter-spacing (-0.02em) to feel like a premium magazine header.
*   **Body & Labels (Inter):** Use `body-md` (0.875rem) for all CRM data entries. The contrast between the expressive Manrope headlines and the utilitarian Inter body text creates an immediate sense of "Premium Agency" professionalism.
*   **Hierarchy Tip:** Never use bold for body text; use `on_surface_variant` (#45464d) for secondary info and `on_surface` (#191c1e) for primary info to create hierarchy through color rather than weight.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, mimicking natural light rather than digital "dropshadows."

*   **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container_low` background. This creates a soft "lift" that is easier on the eyes during long work sessions.
*   **Ambient Shadows:** If a floating element (like a modal) is required, use a shadow with a 40px blur at 6% opacity, tinted with `primary_container`. 
*   **The "Ghost Border" Fallback:** If a divider is functionally required for accessibility, use the `outline_variant` token at **15% opacity**. Never use 100% opacity borders.
*   **Glassmorphism:** AI insights panels should use `tertiary_container` at 10% opacity with a heavy backdrop blur to signify "Intelligence" floating above the raw data.

---

## 5. Components & Primitives

### Buttons
*   **Primary:** Background: `primary` (#000000). Text: `on_primary` (#ffffff). Shape: `md` (0.375rem).
*   **Secondary (AI-Focused):** Background: Gradient of `secondary` to `secondary_container`. Use for "Generate Insight" actions.
*   **Tertiary:** No background. Text: `primary`. Use for low-priority navigation.

### Input Fields
*   **Structure:** No bottom line or full border. Use a `surface_container_highest` background with a `sm` (0.125rem) radius.
*   **Focus State:** Shift background to `surface_container_lowest` and apply a 2px "Ghost Border" using `secondary`.

### Cards & Lists (The "Data Canvas")
*   **Rule:** Forbid divider lines.
*   **Execution:** Use the Spacing Scale `8` (1.75rem) to separate list items. For complex data tables, use alternating row colors between `surface` and `surface_container_low` instead of grid lines.

### Signature CRM Components
*   **Relationship Heatmap:** Use `secondary` (Teal) for healthy accounts and `tertiary_fixed` (Deep Purple) for AI-flagged opportunities.
*   **The "Context Rail":** A slim, vertical container (`surface_container_high`) on the far right for AI-assisted notes, using the Glassmorphism rule.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins. A wider left margin on dashboard headers creates an editorial, high-end feel.
*   **Do** use the Spacing Scale `20` (4.5rem) for section breathing room. CRM fatigue is real; space is the cure.
*   **Do** use `secondary_container` for positive data trends—it’s a sophisticated "success" color that avoids the "stoplight" cliché.

### Don’t
*   **Don't** use pure #000000 for text. Use `on_surface` (#191c1e) to maintain readability.
*   **Don't** use standard Material shadows. They are too "heavy" for a premium agency tool. Stick to tonal shifts.
*   **Don't** cram data. If a table has more than 8 columns, move secondary data into a "Glass" expansion panel.

---

## 7. Spacing & Geometry
*   **Radius:** Use `lg` (0.5rem) for main containers and `xl` (0.75rem) for large dashboard cards. This roundedness softens the professional Navys, making the tool feel "Human-Centric."
*   **Rhythm:** Always use multiples of the spacing scale. A `10` (2.25rem) gap between the header and the content is the mandatory minimum to maintain the "Architectural" feel.```