# 🎬 Viral YouTube Hook Generator

A minimalist web app that generates three attention-grabbing YouTube script hooks based on your video topic.

## ✨ Features

- **Simple Input**: Enter any video topic
- **Instant Generation**: Get three distinct, hardcoded hooks immediately
- **Copy to Clipboard**: One-click copy functionality for each hook
- **Modern UI**: Clean, minimalist design using Tailwind CSS
- **Responsive**: Works perfectly on mobile, tablet, and desktop

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. Enter a video topic (e.g., "productivity tips")
3. Click "Generate Hooks"
4. Copy and use your hooks!

## 📁 Project Structure

```
monhooman/
├── index.html           # Main application
├── script.js            # Core JavaScript logic
├── test-properties.js   # Property-based tests
├── test-runner.html     # Test execution interface
├── styles.css           # Brand theme CSS
├── theme-demo.html      # Theme showcase
├── themes/
│   ├── brand.md         # Brand theme specification
│   └── README.md        # Theme documentation
├── .kiro/
│   ├── steering/
│   │   └── ui-standards.md    # UI/CSS guidelines
│   ├── hooks/
│   │   └── format-on-save.json # Auto-format hook
│   └── specs/
│       └── hook-generator/    # Feature specifications
└── README.md
```

## 🧪 Testing

### Property-Based Tests

The project includes comprehensive property-based tests that validate correctness properties:

1. **Property 1**: `generateHooks()` always returns exactly 3 hooks
2. **Property 2**: All hooks are non-empty strings
3. **Property 3**: Hooks incorporate the topic parameter
4. **Property 4**: All three hooks are distinct from each other

### Running Tests

Open `test-runner.html` in your browser and click "Run All Property Tests" to execute 100+ test iterations.

### Console Testing

You can also run tests directly in the browser console:

```javascript
// Open index.html or test-runner.html
// Open browser console (F12)
// Load test-properties.js if not already loaded

runAllPropertyTests();
```

## 💻 Core Function

### `generateHooks(topic)`

Generates exactly three hardcoded YouTube hooks based on the provided topic.

**Parameters:**
- `topic` (string): The video topic entered by the user

**Returns:**
- `string[]`: An array of exactly 3 hook strings

**Example:**

```javascript
const hooks = generateHooks("fitness");
// Returns:
// [
//   "What if I told you that fitness could change your life in just 7 days? Here'\''s the secret nobody talks about...",
//   "The BIGGEST mistake people make with fitness (and how to avoid it starting today)",
//   "I tried fitness for 30 days and the results were SHOCKING - You won'\''t believe what happened!"
// ]
```

## 🎨 Design Standards

This project follows strict UI standards with a custom brand theme:

- **Framework**: Tailwind CSS with custom theme
- **Theme**: Brand theme with deep blue primary, warm amber accents
- **Colors**: WCAG 2.2 AA compliant, supports light and dark modes
- **Style**: Minimalist, modern aesthetic
- **Responsive**: Mobile-first design

### Brand Theme

The project uses a professionally designed brand theme with:
- Deep blue primary colors for trust and professionalism
- Warm amber accents for energy and visual interest
- Full light and dark mode support
- 5-color chart palette for data visualization
- All CSS variables accessible via `var(--variable-name)`

**Preview**: Open `theme-demo.html` to see the complete theme showcase.

See `themes/README.md` for theme documentation and `.kiro/steering/ui-standards.md` for UI guidelines.

## 🔧 Development

### Auto-Formatting

The project includes an automatic formatting hook that runs Prettier on file save:

- Hook: `format-on-save.json`
- Trigger: PostFileSave
- Action: `npx prettier --write .`

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required
- No dependencies to install

## 📋 Implementation Details

### Hook Templates

The current implementation uses three hardcoded hook patterns:

1. **Life-Changing Secret**: "What if I told you that {topic} could change your life..."
2. **Biggest Mistake**: "The BIGGEST mistake people make with {topic}..."
3. **Shocking Results**: "I tried {topic} for 30 days and the results were SHOCKING..."

### Future Enhancements

Potential improvements for future iterations:

- [ ] Add more hook templates
- [ ] Implement true randomization with template system
- [ ] Add hook history/favorites
- [ ] Export hooks to clipboard or file
- [ ] Genre-specific hook categories
- [ ] Custom user-defined templates

## 🧩 Spec-Driven Development

This project was built using Kiro'\''s spec-driven development workflow:

1. **Requirements** → Formal EARS notation requirements
2. **Design** → Technical architecture and data structures
3. **Tasks** → Discrete implementation steps
4. **Testing** → Property-based correctness validation

See `.kiro/specs/hook-generator/` for complete specifications.

## 📄 License

This project is open source and available for use and modification.

## 🤝 Contributing

Contributions welcome! Please ensure:

1. All property tests pass
2. Tailwind CSS is used for styling (no custom CSS)
3. Code follows existing patterns
4. Functions include JSDoc comments

---

**Built with ❤️ using Kiro IDE**
