---
name: Patria y Fe
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#404850'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#707881'
  outline-variant: '#bfc7d1'
  surface-tint: '#006399'
  primary: '#005d90'
  on-primary: '#ffffff'
  primary-container: '#0077b6'
  on-primary-container: '#f3f7ff'
  inverse-primary: '#94ccff'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#4b5a6f'
  on-tertiary: '#ffffff'
  tertiary-container: '#647288'
  on-tertiary-container: '#f5f7ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cde5ff'
  primary-fixed-dim: '#94ccff'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#004b74'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is built to balance the solemnity of a state visit with the warmth of a pastoral encounter. It targets a broad demographic—from devout pilgrims to international media—requiring an interface that is institutional yet deeply accessible.

The design style is **Corporate / Modern** with a lean toward **Minimalism**. It prioritizes heavy whitespace to allow the photography of the event to breathe, while using high-quality typography to convey authority. The aesthetic is "Humanist Institutional," utilizing clean lines and a crisp, light-flooded interface to evoke feelings of hope and transparency.

## Colors

The palette is rooted in the symbolic intersection of the Argentine Flag and the Holy See. 

- **Primary (Sky Blue):** Used for primary actions, header accents, and structural significance. It represents the host nation.
- **Secondary (Vatican Gold):** Reserved for high-priority alerts, badges, and "Call to Action" highlights. Use sparingly to maintain its impact.
- **Background (Off-White):** A soft, neutral canvas that reduces eye strain compared to pure white, providing a sophisticated "paper" feel.
- **Text (Dark Slate):** Provides high-contrast legibility for long-form reading and navigation.

## Typography

This design system utilizes **Inter** exclusively to ensure maximum legibility across all digital touchpoints. The type scale is generous, favoring larger body text for an aging demographic.

- **Headlines:** Use Bold weights with slight negative letter-spacing for a compact, authoritative look.
- **Body:** Regular weight with ample line-height to ensure reading comfort for itineraries and long-form messages.
- **Labels:** Use the uppercase bold style for metadata, dates, or location tags to create clear visual hierarchy.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum container width to prevent line lengths from becoming unreadable on ultra-wide displays.

- **Grid:** 12-column system for desktop, 4-column for mobile.
- **Rhythm:** An 8px base unit governs all dimensions. Content blocks should use `stack-lg` (32px) for vertical separation to maintain an airy, solemn feel.
- **Adaptation:** On mobile, margins shrink to 16px to maximize content area, while card padding remains consistent at 24px to ensure a premium feel.

## Elevation & Depth

To maintain a clean and modern appearance, the design system utilizes **Tonal Layers** combined with **Ambient Shadows**.

- **Level 0 (Base):** Off-white background (#f8fafc).
- **Level 1 (Cards/Surface):** Pure white (#ffffff) with a very soft, diffused shadow (0px 4px 20px rgba(15, 23, 42, 0.05)).
- **Level 2 (Interaction/Sticky):** Sticky headers use a subtle backdrop blur (10px) with a semi-transparent white fill (opacity 90%) and a 1px bottom border in a light slate tint to separate it from the content scroll.
- **Depth Hierarchy:** Higher elevation is reserved for active modals and dropdowns, using a more pronounced shadow to indicate focus.

## Shapes

The shape language is **Soft**. It avoids harsh 90-degree angles to remain approachable, yet avoids the playfulness of fully rounded "pill" shapes to maintain its institutional dignity.

- **Standard Radius:** 0.25rem (4px) for small inputs and buttons.
- **Large Radius:** 0.5rem (8px) for content cards and image containers.
- **Extra Large:** 0.75rem (12px) for featured hero banners or large modals.

## Components

### Buttons
- **Primary:** Solid Sky Blue (#0077b6) with white text. High-contrast, 48px height for accessibility.
- **Secondary:** Vatican Gold (#f59e0b) background with Dark Slate text. Used exclusively for "Donate" or "Register" actions.
- **Ghost:** Transparent background with a 1px slate border for less critical actions.

### Cards
- Use white backgrounds with 8px corner radius.
- Padding should be 24px. 
- Titles use `headline-md`, and metadata (dates/location) uses `label-caps` in the primary color.

### Sticky Header
- Always visible. Contains the logo, primary navigation, and a single "Live Stream" button in the accent gold. 
- Use a 1px border-bottom (#e2e8f0) for crispness.

### Input Fields
- 48px height with a light gray border. 
- Focus state: 2px Sky Blue border with no "glow" effect, keeping it clean.

### Chips/Badges
- Small status indicators (e.g., "Confirmed," "Press Only").
- Use light tints of the primary/secondary colors with dark text for maximum readability.