---
name: Artisan Ethos
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#131414'
  on-primary: '#ffffff'
  primary-container: '#282828'
  on-primary-container: '#908f8e'
  inverse-primary: '#c8c6c5'
  secondary: '#5f5f4f'
  on-secondary: '#ffffff'
  secondary-container: '#e5e4cf'
  on-secondary-container: '#656555'
  tertiary: '#2a0902'
  on-tertiary: '#ffffff'
  tertiary-container: '#441d10'
  on-tertiary-container: '#bd816f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e5e4cf'
  secondary-fixed-dim: '#c8c8b4'
  on-secondary-fixed: '#1b1c10'
  on-secondary-fixed-variant: '#474839'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#fab7a3'
  on-tertiary-fixed: '#341005'
  on-tertiary-fixed-variant: '#693a2c'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
  warm-stone: '#E5E1DA'
  soft-sage: '#D1D3C4'
  muted-clay: '#C9A799'
  off-white: '#F9F8F6'
  ink: '#1A1A1A'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 36px
    fontWeight: '300'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  gallery-gutter: 24px
  container-max: 1440px
  margin-mobile: 20px
  margin-desktop: 60px
---

## Brand & Style

The design system is centered on the concept of "The Gallery as a Sanctuary." It is designed for a multidisciplinary artist where the UI serves as a quiet, respectful frame for the work rather than a competitor for attention. The brand personality is premium, handmade, and authentic, evoking the feeling of walking into a high-end, sun-drenched studio.

The design style is **Minimalism** with a **Tactile** soul. While the layouts are strictly organized and clean, the color palette and subtle depth ensure the experience feels human and warm rather than clinical. It prioritizes breathability, using intentional negative space to allow the textures and details of the art to be the primary focus. The system is bi-directional, ensuring the same premium "breathtaking" feel in both English (LTR) and Hebrew (RTL) contexts.

## Colors

The palette is rooted in organic, earthy tones that reflect raw materials like stone, clay, and paper. 

- **Primary (Ink):** Used for primary text and high-contrast iconography. It is a softened black to avoid harshness against the light backgrounds.
- **Neutral (Off-White/Warm Stone):** These form the foundation of the UI. Backgrounds should use `off-white` (#F9F8F6), while secondary surfaces and sections use `warm-stone`.
- **Secondary (Soft Sage):** Used for subtle accents, success states, or low-priority interactive elements.
- **Tertiary (Muted Clay):** Used sparingly for highlights, special call-to-actions, or to denote "handmade" or "warm" focus areas.

Avoid using pure `#000000` or `#FFFFFF` for large surfaces. The goal is a "paper-like" quality that feels softer on the eyes and more artisanal.

## Typography

The typography pairing creates a balance between the "Artisan" (Serif) and the "Professional" (Sans-Serif).

- **Source Serif 4:** Chosen for headlines to provide a literary, authoritative, and elegant feel. It excels in both English and Hebrew-like aesthetics (when paired with appropriate RTL fonts), offering a premium editorial look. Use light weights (300) for large displays to emphasize the delicate nature of the art.
- **Hanken Grotesk:** A contemporary, clean sans-serif used for body copy and functional labels. It provides excellent legibility and a modern contrast to the serif headlines.

**Bi-directional Guidelines:** Ensure line heights are generous (1.6x for body) to accommodate Hebrew diacritics and character heights, preventing the layout from feeling cramped.

## Layout & Spacing

The layout follows a **Fluid Grid** with a "Breathtaking" philosophy—which translates to significantly more whitespace than a standard portfolio.

- **The Grid:** A 12-column system is used for desktop. However, content should rarely span all 12 columns. Centered, 8-column blocks for text or offset 6-column masonry layouts for images are preferred to create a dynamic, rhythmic flow.
- **Spacing Rhythm:** Use a base unit of 8px. Section gaps are intentionally large (120px+) to ensure each piece of art or project description has its own "air."
- **Responsive Behavior:** On mobile, margins reduce to 20px, and the grid collapses to a single column. Gallery items should switch to a simplified vertical stack or a tight 2-column grid to maintain focus.
- **RTL Support:** All horizontal spacing, gutters, and alignment must flip for Hebrew. Text alignment should be 'start' (Right for Hebrew, Left for English).

## Elevation & Depth

This design system avoids traditional heavy shadows. Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines**.

1.  **Surfaces:** The base background is `off-white`. Overlays or cards use `warm-stone` or a very subtle 1px border in `soft-sage` at 30% opacity.
2.  **Interaction:** Buttons and interactive cards do not lift; instead, they might subtly shift color (e.g., from `warm-stone` to `soft-sage`) or use a very soft, diffused ambient shadow (40px blur, 4% opacity) to suggest a gentle hover.
3.  **Imagery:** High-quality art photography provides the "natural" depth. The UI should remain flat to let the 3D nature of the physical art pop.

## Shapes

The shape language is **Soft** and intentional. While the overall grid is architectural and structured, the subtle rounding of corners (4px - 8px) prevents the design from feeling sharp or "tech-heavy."

- **Cards & Inputs:** Use the `soft` (0.25rem) radius for a gentle touch.
- **Buttons:** Can be either sharp (0px) for a more brutalist/artistic look or soft (4px) to match the containers. Avoid pill shapes, as they feel too "app-like" and modern for an artisan portfolio.
- **Image Treatment:** Images should generally have sharp corners to maintain the "framed print" aesthetic, unless they are secondary UI elements (like thumbnails in a list).

## Components

- **Buttons:** Primary buttons are outlined or solid `ink` with `off-white` text. They use the `label-caps` typography style for a refined, high-fashion look. No heavy gradients or shadows.
- **Gallery Cards:** Minimalist frames with no borders. Captions appear in `label-caps` or `body-md` below the image with generous padding.
- **Input Fields:** Bottom-border only (underlined style) using `ink` at 20% opacity. This mimics a signature line or a sketchpad.
- **Chips/Tags:** Used for "Medium" or "Year" categorization. Small, `warm-stone` background with `ink` text, using the `label-caps` style at a smaller scale.
- **Navigation:** Transparent background that blurs slightly on scroll. Links are spaced widely apart to emphasize the breathable nature of the system.
- **Breadcrumbs:** Use `label-caps` in a muted tone to help users navigate deep project archives without cluttering the view.