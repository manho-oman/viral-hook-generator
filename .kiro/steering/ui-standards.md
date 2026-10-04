---
inclusion: auto
name: UI Standards
description: CSS framework and styling conventions
---

# UI Standards

## CSS Framework

**MANDATORY**: Always use Tailwind CSS via CDN for styling.

### Implementation

Include Tailwind CSS in all HTML files via CDN:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

### Design Philosophy

- **Minimalist aesthetic**: Use clean, uncluttered layouts
- **Modern UI patterns**: Follow contemporary web design conventions
- **No custom CSS**: Rely exclusively on Tailwind utility classes
- **Responsive by default**: Use Tailwind's responsive modifiers (sm:, md:, lg:, xl:)

### Common Patterns

**Container Layout:**
```html
<div class="container mx-auto px-4 py-8 max-w-4xl">
  <!-- Content -->
</div>
```

**Card Components:**
```html
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <!-- Card content -->
</div>
```

**Buttons:**
```html
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
  Button Text
</button>
```

**Typography:**
- Headers: Use `text-2xl`, `text-3xl`, `text-4xl` with `font-bold`
- Body text: Use `text-base` or `text-lg` with `text-gray-700`
- Spacing: Use consistent spacing scale (p-4, p-6, p-8, etc.)

### Color Scheme

Stick to Tailwind's default color palette:
- Primary actions: Blue (blue-600, blue-700)
- Success: Green (green-600)
- Warning: Yellow (yellow-500)
- Error: Red (red-600)
- Neutral: Gray scale (gray-50 to gray-900)

### Constraints

- Do NOT create custom CSS files unless absolutely necessary
- Do NOT use inline styles
- Do NOT mix other CSS frameworks with Tailwind
