# Brand Theme

Your custom design system theme, professionally crafted with accessibility and modern design in mind.

## 🎨 Color Philosophy

### Primary: Deep Blue
- **Light Mode**: `#2563eb` - Rich, saturated blue that conveys professionalism and trust
- **Dark Mode**: `#60a5fa` - Brighter blue for better contrast and reduced eye strain
- **Used For**: Primary buttons, links, focus rings, key UI elements

### Accent: Warm Amber
- **Light Mode**: `#f59e0b` - Golden amber that adds warmth and energy
- **Dark Mode**: `#fbbf24` - Slightly brighter for visibility
- **Used For**: Hover states, highlights, secondary CTAs

### Destructive: Red
- **Light Mode**: `#dc2626` - Clear danger red
- **Dark Mode**: `#f87171` - Softer to avoid harshness
- **Used For**: Delete buttons, error states, warnings

## 📊 Chart Colors

5-color palette with high contrast and color-blind friendly differentiation:
1. Blue (`#2563eb` / `#60a5fa`)
2. Green (`#10b981` / `#34d399`)
3. Amber (`#f59e0b` / `#fbbf24`)
4. Purple (`#a855f7` / `#c084fc`)
5. Red (`#ef4444` / `#f87171`)

## ♿ Accessibility

- **WCAG 2.2 AA Compliant**: All color combinations maintain minimum 4.5:1 contrast ratios for text
- **Color-blind Friendly**: Chart colors are distinguishable across common color vision deficiencies
- **Dark Mode Optimized**: Reduced eye strain with carefully calibrated brightness levels

## 🚀 Usage

### HTML
```html
<html class="theme-brand">
  <!-- Your content -->
</html>
```

### With Dark Mode
```html
<html class="theme-brand dark">
  <!-- Your content -->
</html>
```

### CSS Variables
```css
/* Primary button */
.button-primary {
  background: var(--primary);
  color: var(--primary-foreground);
}

/* Card */
.card {
  background: var(--card);
  color: var(--card-foreground);
  border: 1px solid var(--border);
}
```

## 📦 Files

- **brand.md** - Complete theme specification with all color values
- **styles.css** - Ready-to-use CSS implementation
- **theme-demo.html** - Interactive demo showcasing all components

## 🔄 Theme Toggle

Toggle between light and dark modes:

```javascript
document.documentElement.classList.toggle('dark');
```

## 🎯 Design Guidelines

1. **Primary actions should use the blue primary color** - Conveys trust and professionalism
2. **Use accent color sparingly** - The warm amber is attention-grabbing; reserve for emphasis
3. **Maintain the subtle blue tint** - Consistent cool tone creates brand cohesion

## 📐 Technical Details

- **Color Format**: oklch (primary) + hex (fallback) for maximum browser compatibility
- **Border Radius**: 0.5rem (8px)
- **Typography**: System font stack for optimal performance
- **Monospace**: Modern monospace stack for code display

## 🌈 Preview

Open `theme-demo.html` in your browser to see the theme in action with:
- Color palette swatches
- Button variants
- Form elements
- Cards and surfaces
- Typography scales
- Light/Dark mode toggle

---

**Created with**: design-system-scaffold Kiro Power
**License**: MIT
