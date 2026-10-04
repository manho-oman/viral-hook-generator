# Technical Design Document: Hook Generator

## Overview

The Hook Generator is a single-page web application that generates creative story hooks for writers. The system uses a template-based approach with randomization to produce three distinct story hooks per generation, allowing users to explore different creative prompts with a simple regenerate action.

## Architecture

### System Components

The application follows a simple client-side architecture with three main components:

1. **Template Engine**: Core logic for generating story hooks from templates
2. **UI Controller**: Manages user interactions and display updates
3. **Storage Layer**: Holds template patterns and randomizable elements

```
┌─────────────────────────────────────────┐
│         Single HTML Page                │
│  ┌───────────────────────────────────┐  │
│  │      UI Controller                │  │
│  │  - Event handlers                 │  │
│  │  - DOM manipulation               │  │
│  │  - Display management             │  │
│  └────────────┬──────────────────────┘  │
│               │                          │
│               ▼                          │
│  ┌───────────────────────────────────┐  │
│  │     Template Engine               │  │
│  │  - Hook generation                │  │
│  │  - Randomization                  │  │
│  │  - Distinctness verification      │  │
│  └────────────┬──────────────────────┘  │
│               │                          │
│               ▼                          │
│  ┌───────────────────────────────────┐  │
│  │     Storage Layer                 │  │
│  │  - Template patterns              │  │
│  │  - Randomizable elements          │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

## Component Design

### 1. Template Engine

The Template Engine is responsible for generating story hooks by combining template patterns with randomly selected elements.

#### Data Structures

**Template Pattern:**
```javascript
{
  id: string,              // Unique template identifier
  pattern: string,         // Template string with placeholders (e.g., "A {character} must {action}")
  placeholders: string[]   // List of placeholder names (e.g., ["character", "action"])
}
```

**Element Bank:**
```javascript
{
  character: string[],     // Array of character types
  action: string[],        // Array of actions
  setting: string[],       // Array of settings
  conflict: string[],      // Array of conflicts
  // ... additional element types
}
```

**Generated Hook:**
```javascript
{
  id: string,              // Unique hook identifier (generated)
  text: string,            // Complete hook text with substitutions
  templateId: string,      // Source template identifier
  timestamp: number        // Generation timestamp
}
```

#### Core Functions

**`generateHook(): Hook`**
- Randomly selects a template pattern
- For each placeholder, randomly selects an element from the corresponding element bank
- Substitutes placeholders with selected elements
- Returns a Hook object with complete text

**`generateDistinctHooks(count: number): Hook[]`**
- Generates hooks until `count` distinct hooks are produced
- Uses set-based distinctness checking on hook text
- Implements retry logic with maximum iteration limit to prevent infinite loops
- Returns array of distinct Hook objects

**`substituteTemplate(pattern: string, substitutions: Map<string, string>): string`**
- Takes a template pattern and a map of placeholder→value pairs
- Replaces all placeholders in the pattern with corresponding values
- Returns the completed string

**`isDistinct(hooks: Hook[]): boolean`**
- Compares the text content of all hooks
- Returns true if all hooks have unique text content
- Uses Set data structure for efficient comparison

### 2. UI Controller

The UI Controller manages the user interface and coordinates between user actions and the Template Engine.

#### Core Functions

**`initializeApp(): void`**
- Called on page load
- Generates initial three hooks
- Sets up event listeners for the regenerate button
- Renders hooks to the DOM

**`handleRegenerate(): void`**
- Called when user clicks regenerate button
- Generates three new distinct hooks via Template Engine
- Updates the DOM to display new hooks
- Does not trigger page reload

**`renderHooks(hooks: Hook[]): void`**
- Clears existing hook display
- Creates DOM elements for each hook
- Inserts hooks into the display container
- Applies styling classes

**`clearDisplay(): void`**
- Removes all existing hook elements from the DOM
- Prepares display area for new hooks

### 3. Storage Layer

The Storage Layer contains the template patterns and element banks used for hook generation.

#### Template Patterns

The system includes multiple template patterns to ensure variety. Example patterns:

```javascript
const TEMPLATES = [
  {
    id: "char-must-action",
    pattern: "A {character} must {action} before {time_limit}",
    placeholders: ["character", "action", "time_limit"]
  },
  {
    id: "setting-conflict",
    pattern: "In a {setting} where {rule}, a {character} discovers {discovery}",
    placeholders: ["setting", "rule", "character", "discovery"]
  },
  {
    id: "two-worlds",
    pattern: "When {event} connects {world_a} and {world_b}, {consequence}",
    placeholders: ["event", "world_a", "world_b", "consequence"]
  },
  // ... additional templates
];
```

#### Element Banks

Element banks store the randomizable components:

```javascript
const ELEMENTS = {
  character: [
    "reluctant hero",
    "wise mentor",
    "mysterious stranger",
    "ordinary person",
    "skilled thief",
    // ... more options
  ],
  action: [
    "save their village",
    "uncover the truth",
    "master a forbidden skill",
    "escape their past",
    // ... more options
  ],
  setting: [
    "world without colors",
    "city built on clouds",
    "underground metropolis",
    // ... more options
  ],
  // ... additional element types
};
```

## User Interface Design

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Story Hook Generator</title>
  <link rel="stylesheet" href="[CSS Framework]">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header>
      <h1>Story Hook Generator</h1>
    </header>
    
    <main>
      <div id="hooks-container">
        <!-- Three hook cards will be rendered here -->
      </div>
      
      <div class="controls">
        <button id="regenerate-btn" class="btn-primary">
          Generate New Hooks
        </button>
      </div>
    </main>
  </div>
  
  <script src="app.js"></script>
</body>
</html>
```

### Hook Display Card

Each hook is displayed in a card component:

```html
<div class="hook-card">
  <div class="hook-number">Hook #{number}</div>
  <p class="hook-text">{generated_hook_text}</p>
</div>
```

### Styling Framework

The application uses a CSS framework (e.g., Bootstrap, Tailwind, or similar) for:
- Responsive grid layout
- Button styling
- Typography
- Card components
- Spacing and alignment

Custom CSS provides:
- Hook card styling
- Color scheme
- Hover effects
- Responsive breakpoints

## Data Flow

### Initial Page Load

```
1. Browser loads HTML, CSS, JavaScript
2. DOM Content Loaded event fires
3. initializeApp() called
4. Template Engine generates 3 distinct hooks
5. UI Controller renders hooks to DOM
6. Application ready for user interaction
```

### Regenerate Action

```
1. User clicks "Generate New Hooks" button
2. handleRegenerate() event handler called
3. UI Controller calls Template Engine.generateDistinctHooks(3)
4. Template Engine:
   a. Generates hooks until 3 distinct ones are produced
   b. Returns array of 3 Hook objects
5. UI Controller:
   a. Calls clearDisplay() to remove old hooks
   b. Calls renderHooks() with new hooks
   c. Updates DOM without page reload
6. User sees three new hooks
```

## Algorithm Details

### Distinct Hook Generation Algorithm

```javascript
function generateDistinctHooks(count) {
  const hooks = new Set();
  const maxAttempts = count * 100; // Prevent infinite loops
  let attempts = 0;
  
  while (hooks.size < count && attempts < maxAttempts) {
    const hook = generateHook();
    hooks.add(hook.text); // Set automatically handles distinctness
    attempts++;
  }
  
  if (hooks.size < count) {
    throw new Error(`Could not generate ${count} distinct hooks after ${maxAttempts} attempts`);
  }
  
  // Convert Set back to Hook objects
  return Array.from(hooks).map((text, index) => ({
    id: generateId(),
    text: text,
    templateId: extractTemplateId(text),
    timestamp: Date.now()
  }));
}
```

### Template Substitution Algorithm

```javascript
function substituteTemplate(pattern, substitutions) {
  let result = pattern;
  
  for (const [placeholder, value] of substitutions.entries()) {
    const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
    result = result.replace(regex, value);
  }
  
  return result;
}
```

### Random Element Selection

```javascript
function selectRandomElement(elementArray) {
  const index = Math.floor(Math.random() * elementArray.length);
  return elementArray[index];
}

function selectRandomTemplate() {
  return selectRandomElement(TEMPLATES);
}
```

## Error Handling

### Generation Failures

**Scenario:** Cannot generate enough distinct hooks
- **Cause:** Insufficient template/element variety or unlucky randomization
- **Handling:** 
  - Set maximum attempt limit (e.g., count × 100)
  - Throw descriptive error if limit reached
  - Display user-friendly error message
  - Provide retry option

### Missing Elements

**Scenario:** Template references placeholder not in element bank
- **Cause:** Configuration error or template/element mismatch
- **Handling:**
  - Validate templates against element banks on initialization
  - Log warning for missing elements
  - Use fallback text (e.g., "[MISSING: {placeholder}]")
  - Allow application to continue functioning

### DOM Manipulation Errors

**Scenario:** Cannot find required DOM elements
- **Cause:** HTML structure mismatch
- **Handling:**
  - Validate required elements exist on initialization
  - Throw clear error if critical elements missing
  - Prevent further execution to avoid cascade failures

## Performance Considerations

### Generation Efficiency

- **Hook generation**: O(1) for single hook (constant template/element size)
- **Distinctness checking**: O(n) using Set data structure where n = count
- **Total generation**: O(count × attempts) worst case, typically O(count) with good variety

### Memory Usage

- Templates and elements loaded once on initialization
- No persistent storage of generated hooks (stateless)
- DOM updated in-place without accumulation
- Minimal memory footprint

### Optimization Strategies

1. **Pre-validate templates** on initialization rather than per-generation
2. **Use Set for distinctness** checking instead of nested loops
3. **Limit maximum attempts** to prevent infinite loops
4. **Batch DOM updates** when rendering multiple hooks

## Testing Strategy

The testing approach combines unit tests for specific scenarios with property-based tests for universal correctness guarantees.

### Unit Tests

- Verify initial page load displays exactly three hooks
- Verify regenerate button exists and is properly labeled
- Verify clicking regenerate doesn't cause page reload
- Verify templates contain expected placeholders
- Verify element banks are populated
- Verify hooks with identical text are considered duplicates
- Verify template substitution produces complete strings without undefined values
- Verify hooks are displayed in separate DOM elements

### Property-Based Tests

Property-based tests validate universal behaviors across many randomized inputs. Each test should run a minimum of 100 iterations.

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Generation Produces Distinct Hooks

*For any* generation request, all three generated hooks SHALL have distinct text content (no two hooks with identical text).

**Validates: Requirements 2.2, 6.1**

### Property 2: Randomization Produces Variation

*For any* sequence of multiple generations, the system SHALL produce variation in the hooks (not generating identical sets repeatedly).

**Validates: Requirements 2.4**

### Property 3: Template Element Selection Varies

*For any* template with multiple element options, repeated hook generation SHALL eventually produce different element selections from that template.

**Validates: Requirements 3.4**

### Property 4: Regeneration Replaces Previous Hooks

*For any* application state with displayed hooks, triggering regeneration SHALL replace all previous hooks with exactly three new hooks (no accumulation, no partial replacement).

**Validates: Requirements 4.2, 4.4**

## Security Considerations

### Input Validation

- No user input is processed (read-only interaction)
- Templates and elements are static data
- No XSS risk from generation (controlled content only)

### Content Security

- All generated content is from predefined templates and elements
- No external data sources or API calls
- No sensitive data storage

### Client-Side Only

- No server communication required
- No authentication or authorization needed
- No data transmission risks

## Deployment

### Build Process

1. Validate HTML structure
2. Minify JavaScript (optional for production)
3. Minify CSS (optional for production)
4. Run test suite
5. Package as single-page application

### Deployment Target

- Static file hosting (e.g., GitHub Pages, Netlify, Vercel)
- No server-side requirements
- No database needed
- No environment configuration required

### Browser Compatibility

- Modern browsers with ES6 support
- No polyfills required for core functionality
- CSS framework handles responsive design
- Tested on: Chrome, Firefox, Safari, Edge

## Future Extensibility

### Potential Enhancements

1. **Hook Saving**: Allow users to save favorite hooks to local storage
2. **Custom Templates**: Let users add their own template patterns
3. **Genre Filtering**: Filter templates by genre (fantasy, sci-fi, mystery)
4. **Export Options**: Copy hooks to clipboard or export as text file
5. **Hook History**: View previously generated hooks in a session
6. **Adjustable Count**: Allow users to generate more or fewer than three hooks

### Extensibility Points

- Template and element banks are easily expandable (just add to arrays)
- Component-based architecture allows adding new UI features
- Template Engine is decoupled from UI for potential reuse
- Generation algorithm can be enhanced without affecting UI

## Appendix: Technology Stack

- **HTML5**: Structure and semantic markup
- **CSS Framework**: [To be selected: Bootstrap/Tailwind/Bulma]
- **Vanilla JavaScript (ES6+)**: Application logic
- **No external dependencies**: Self-contained application
- **No build tools required**: Can run directly in browser

## Appendix: File Structure

```
hook-generator/
├── index.html          # Main HTML file
├── styles.css          # Custom styles
├── app.js             # Application logic
└── README.md          # Documentation
```

## Summary

The Hook Generator is a straightforward single-page application that uses template-based generation with randomization to create creative story prompts. The architecture prioritizes simplicity and maintainability while ensuring correctness through distinct hook generation and proper UI state management. The system is fully client-side, requiring no server infrastructure, and can be easily deployed to static hosting platforms.
