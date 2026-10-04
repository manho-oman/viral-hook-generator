# Theme: Brand

## About

A modern, professional brand theme with deep blue primary colors, warm amber accents, and a vibrant chart palette. Designed for clarity, accessibility, and visual appeal across both light and dark modes.

## shadCN CSS Variables

Standard shadCN variables that components reference. These follow the `--name` / `--name-foreground` convention and are registered as Tailwind utilities via `@theme inline`.

### Core Variables

| CSS Variable | Light (oklch) | Light (hex) | Dark (oklch) | Dark (hex) |
|-------------|---------------|-------------|--------------|------------|
| `--background` | `oklch(0.99 0.005 240)` | `#fafbfc` | `oklch(0.16 0.01 240)` | `#0f1419` |
| `--foreground` | `oklch(0.2 0.015 240)` | `#1a2332` | `oklch(0.95 0.005 240)` | `#f0f2f5` |
| `--card` | `oklch(1 0 0)` | `#ffffff` | `oklch(0.22 0.012 240)` | `#1c2532` |
| `--card-foreground` | `oklch(0.2 0.015 240)` | `#1a2332` | `oklch(0.95 0.005 240)` | `#f0f2f5` |
| `--popover` | `oklch(1 0 0)` | `#ffffff` | `oklch(0.25 0.012 240)` | `#242d3d` |
| `--popover-foreground` | `oklch(0.2 0.015 240)` | `#1a2332` | `oklch(0.95 0.005 240)` | `#f0f2f5` |
| `--primary` | `oklch(0.48 0.15 255)` | `#2563eb` | `oklch(0.65 0.18 255)` | `#60a5fa` |
| `--primary-foreground` | `oklch(0.99 0.005 240)` | `#fafbfc` | `oklch(0.15 0.015 240)` | `#0a1120` |
| `--secondary` | `oklch(0.95 0.008 240)` | `#e8ecf1` | `oklch(0.28 0.012 240)` | `#2d3748` |
| `--secondary-foreground` | `oklch(0.25 0.015 240)` | `#1f2937` | `oklch(0.92 0.005 240)` | `#e5e9ee` |
| `--muted` | `oklch(0.96 0.006 240)` | `#f1f4f8` | `oklch(0.26 0.012 240)` | `#283140` |
| `--muted-foreground` | `oklch(0.55 0.01 240)` | `#64748b` | `oklch(0.68 0.008 240)` | `#94a3b8` |
| `--accent` | `oklch(0.75 0.12 65)` | `#f59e0b` | `oklch(0.72 0.14 55)` | `#fbbf24` |
| `--accent-foreground` | `oklch(0.2 0.015 65)` | `#1f1506` | `oklch(0.15 0.015 65)` | `#1a1002` |
| `--destructive` | `oklch(0.58 0.22 25)` | `#dc2626` | `oklch(0.68 0.20 25)` | `#f87171` |
| `--destructive-foreground` | `oklch(0.99 0.005 25)` | `#fef9f8` | `oklch(0.15 0.015 25)` | `#1a0505` |
| `--border` | `oklch(0.90 0.006 240)` | `#d9e0e8` | `oklch(0.30 0.012 240)` | `#344155` |
| `--input` | `oklch(0.88 0.008 240)` | `#cbd5e1` | `oklch(0.32 0.012 240)` | `#394a60` |
| `--ring` | `oklch(0.48 0.15 255)` | `#2563eb` | `oklch(0.65 0.18 255)` | `#60a5fa` |

| CSS Variable | Value |
|-------------|-------|
| `--radius` | `0.5rem` |

### Chart Variables

| CSS Variable | Light (oklch) | Light (hex) | Dark (oklch) | Dark (hex) |
|-------------|---------------|-------------|--------------|------------|
| `--chart-1` | `oklch(0.48 0.15 255)` | `#2563eb` | `oklch(0.65 0.18 255)` | `#60a5fa` |
| `--chart-2` | `oklch(0.58 0.18 160)` | `#10b981` | `oklch(0.68 0.16 165)` | `#34d399` |
| `--chart-3` | `oklch(0.75 0.12 65)` | `#f59e0b` | `oklch(0.72 0.14 55)` | `#fbbf24` |
| `--chart-4` | `oklch(0.62 0.24 305)` | `#a855f7` | `oklch(0.70 0.22 310)` | `#c084fc` |
| `--chart-5` | `oklch(0.60 0.20 15)` | `#ef4444` | `oklch(0.68 0.18 20)` | `#f87171` |

### Sidebar Variables

| CSS Variable | Light (oklch) | Light (hex) | Dark (oklch) | Dark (hex) |
|-------------|---------------|-------------|--------------|------------|
| `--sidebar` | `oklch(0.98 0.006 240)` | `#f8fafc` | `oklch(0.20 0.012 240)` | `#1a2332` |
| `--sidebar-foreground` | `oklch(0.25 0.015 240)` | `#1f2937` | `oklch(0.92 0.005 240)` | `#e5e9ee` |
| `--sidebar-primary` | `oklch(0.48 0.15 255)` | `#2563eb` | `oklch(0.65 0.18 255)` | `#60a5fa` |
| `--sidebar-primary-foreground` | `oklch(0.99 0.005 240)` | `#fafbfc` | `oklch(0.15 0.015 240)` | `#0a1120` |
| `--sidebar-accent` | `oklch(0.94 0.008 240)` | `#e2e8f0` | `oklch(0.28 0.012 240)` | `#2d3748` |
| `--sidebar-accent-foreground` | `oklch(0.25 0.015 240)` | `#1f2937` | `oklch(0.92 0.005 240)` | `#e5e9ee` |
| `--sidebar-border` | `oklch(0.90 0.006 240)` | `#d9e0e8` | `oklch(0.26 0.012 240)` | `#283140` |
| `--sidebar-ring` | `oklch(0.48 0.15 255)` | `#2563eb` | `oklch(0.65 0.18 255)` | `#60a5fa` |

### Typography Variables

| CSS Variable | Value |
|-------------|-------|
| `--font-sans` | `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| `--font-mono` | `ui-monospace, "Cascadia Code", "SF Mono", Monaco, "Courier New", monospace` |

---

## Tailwind Mapping

Tailwind utilities map directly to the shadCN CSS variables above via the `@theme inline` directive in shadCN v4:

| Tailwind Utility Pattern | CSS Variable | Example |
|-------------------------|-------------|---------|
| `bg-{name}` | `--{name}` | `bg-primary` → `var(--primary)` |
| `text-{name}` | `--{name}` (foreground) | `text-primary-foreground` → `var(--primary-foreground)` |
| `border-{name}` | `--{name}` | `border-border` → `var(--border)` |
| `ring-{name}` | `--{name}` | `ring-ring` → `var(--ring)` |

## Global Styles

### Body

- Background: `var(--background)` — `oklch(0.99 0.005 240)` / `#fafbfc` (light), `oklch(0.16 0.01 240)` / `#0f1419` (dark)
- Text color: `var(--foreground)` — `oklch(0.2 0.015 240)` / `#1a2332` (light), `oklch(0.95 0.005 240)` / `#f0f2f5` (dark)
- Font family: `var(--font-sans)` — System fonts

### Surfaces

- Card: `oklch(1 0 0)` / `#ffffff` (light), `oklch(0.22 0.012 240)` / `#1c2532` (dark)
- Popover: `oklch(1 0 0)` / `#ffffff` (light), `oklch(0.25 0.012 240)` / `#242d3d` (dark)
- Muted surfaces: `oklch(0.96 0.006 240)` / `#f1f4f8` (light), `oklch(0.26 0.012 240)` / `#283140` (dark)
- Sidebar: `oklch(0.98 0.006 240)` / `#f8fafc` (light), `oklch(0.20 0.012 240)` / `#1a2332` (dark)

### Color Rationale

**Primary (Deep Blue)**
- Light mode: Rich, saturated blue `#2563eb` that conveys professionalism and trust
- Dark mode: Brighter `#60a5fa` for better contrast and reduced eye strain
- Used for: Primary buttons, links, focus rings, key UI elements

**Accent (Warm Amber)**
- Light mode: Golden amber `#f59e0b` that adds warmth and energy
- Dark mode: Slightly brighter `#fbbf24` for visibility
- Used for: Hover states, highlights, secondary CTAs

**Destructive (Red)**
- Light mode: Clear danger red `#dc2626`
- Dark mode: Softer `#f87171` to avoid harshness
- Used for: Delete buttons, error states, warnings

**Charts**
- 5-color palette with high contrast and color-blind friendly differentiation
- Blue, Green, Amber, Purple, Red sequence

**Backgrounds & Surfaces**
- Subtle blue tint throughout maintains brand consistency
- Careful contrast ratios ensure WCAG 2.2 AA compliance (4.5:1 minimum for text)

### Typography

- Font family: System font stack for optimal performance and native feel
- Font family monospace: Modern monospace stack for code display
- Text sizes follow Tailwind scale (`text-xs` through `text-xl`)
- Font weights: `font-normal` (400), `font-medium` (500), `font-semibold` (600), `font-bold` (700)

## Usage Notes

This brand theme provides a modern, professional appearance with:
- Deep blue primary colors for trust and professionalism
- Warm amber accents for energy and visual interest
- Carefully calibrated light/dark modes with proper contrast
- WCAG 2.2 AA compliant color combinations
- Subtle blue tint throughout for brand cohesion

All colors use the dual-format (oklch + hex) for maximum browser compatibility while leveraging oklch's perceptual uniformity benefits.

---

## Theme UI Rules

Rules specific to the Brand theme. These apply when this theme is active and supplement the general design guidelines. If a theme UI rule conflicts with a general guideline, the theme rule takes precedence for this theme.

1. **Primary actions should use the blue primary color** - The deep blue conveys trust and professionalism, making it ideal for primary CTAs
2. **Use accent color sparingly** - The warm amber is attention-grabbing; reserve it for hover states and secondary emphasis
3. **Maintain the subtle blue tint** - The consistent cool tone throughout backgrounds creates brand cohesion
