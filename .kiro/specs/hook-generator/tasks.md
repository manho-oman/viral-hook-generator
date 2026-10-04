# Implementation Plan: Hook Generator

## Overview

This implementation plan breaks down the Hook Generator feature into discrete coding tasks. The application is a single-page web app that generates three distinct story hooks using a template-based system with randomization. The implementation follows a bottom-up approach: starting with data structures and core logic, then building the template engine, and finally wiring everything together with the UI controller.

## Tasks

- [ ] 1. Set up project structure and HTML foundation
  - Create `index.html` with semantic structure, meta tags, and container elements
  - Create `styles.css` file for custom styling
  - Create `app.js` file for application logic
  - Link CSS framework (Bootstrap, Tailwind, or similar) via CDN
  - Include basic page structure: header, hooks container, and regenerate button
  - _Requirements: 1.1, 1.3, 5.1, 5.3_

- [ ] 2. Implement Storage Layer with templates and element banks
  - [ ] 2.1 Define template patterns data structure
    - Create `TEMPLATES` array with at least 5 template patterns
    - Each template must include: id, pattern string with placeholders, and placeholders array
    - Ensure variety in template structures (different numbers and types of placeholders)
    - _Requirements: 3.2, 3.3_
  
  - [ ] 2.2 Define element banks data structure
    - Create `ELEMENTS` object with arrays for each placeholder type
    - Include at least 8-10 options per element type to ensure variety
    - Element types should include: character, action, setting, conflict, time_limit, discovery, event, rule, world_a, world_b, consequence
    - _Requirements: 3.3, 3.4_

- [ ] 3. Implement Template Engine core functions
  - [ ] 3.1 Implement random selection utilities
    - Write `selectRandomElement(array)` function that returns a random element from an array
    - Write `selectRandomTemplate()` function that returns a random template from TEMPLATES
    - Write `generateId()` function to create unique identifiers for hooks
    - _Requirements: 2.4, 3.4_
  
  - [ ] 3.2 Implement template substitution logic
    - Write `substituteTemplate(pattern, substitutions)` function
    - Function should replace all `{placeholder}` occurrences with corresponding values from substitutions map
    - Handle multiple occurrences of the same placeholder
    - _Requirements: 3.2, 3.5_
  
  - [ ] 3.3 Implement single hook generation
    - Write `generateHook()` function that returns a Hook object `{id, text, templateId, timestamp}`
    - Randomly select a template
    - For each placeholder in the template, randomly select an element from the corresponding element bank
    - Use `substituteTemplate()` to create the final hook text
    - _Requirements: 2.3, 3.1, 3.4, 3.5_
  
  - [ ]* 3.4 Write property test for single hook generation
    - **Property: Every generated hook contains only text from predefined templates and elements**
    - **Validates: Requirements 2.3, 3.5**
    - Generate 100 hooks and verify none contain placeholder syntax `{...}`
    - Verify all hooks are grammatically coherent (no undefined or null in text)
  
  - [ ] 3.5 Implement distinct hook generation
    - Write `generateDistinctHooks(count)` function that returns an array of distinct Hook objects
    - Use Set data structure to track hook text for distinctness checking
    - Implement retry logic with maximum attempts limit (count × 100)
    - Throw error if unable to generate required distinct hooks
    - _Requirements: 2.2, 6.1, 6.2, 6.3_
  
  - [ ]* 3.6 Write property test for distinct hook generation
    - **Property 1: Generation Produces Distinct Hooks**
    - **Validates: Requirements 2.2, 6.1**
    - For 100 iterations, generate 3 hooks and verify all three have distinct text content
    - Use Set to check distinctness
  
  - [ ]* 3.7 Write property test for randomization variation
    - **Property 2: Randomization Produces Variation**
    - **Validates: Requirements 2.4**
    - Generate 50 sets of 3 hooks each (150 total hooks)
    - Verify that not all sets are identical (at least some variation exists)
    - Track unique hook texts across all generations
  
  - [ ]* 3.8 Write property test for template element variation
    - **Property 3: Template Element Selection Varies**
    - **Validates: Requirements 3.4**
    - For each template, generate 30 hooks using that template
    - Verify that multiple different element selections occur (not all identical)
    - Check that each placeholder position shows variation

- [ ] 4. Implement UI Controller functions
  - [ ] 4.1 Implement DOM rendering functions
    - Write `renderHooks(hooks)` function to display hooks in the DOM
    - Create hook card elements for each hook with proper structure and classes
    - Write `clearDisplay()` function to remove existing hooks from DOM
    - Insert hooks into `#hooks-container` element
    - _Requirements: 4.3, 5.2, 5.4_
  
  - [ ] 4.2 Implement regenerate handler
    - Write `handleRegenerate()` function
    - Call `generateDistinctHooks(3)` to create new hooks
    - Call `clearDisplay()` to remove old hooks
    - Call `renderHooks()` to display new hooks
    - Ensure no page reload occurs
    - _Requirements: 4.2, 4.3, 4.4_
  
  - [ ]* 4.3 Write property test for regeneration replacement
    - **Property 4: Regeneration Replaces Previous Hooks**
    - **Validates: Requirements 4.2, 4.4**
    - Simulate 20 regeneration cycles
    - After each regeneration, verify exactly 3 hook cards exist in DOM
    - Verify no accumulation of old hooks
  
  - [ ] 4.4 Implement application initialization
    - Write `initializeApp()` function
    - Generate initial three hooks using `generateDistinctHooks(3)`
    - Render initial hooks to DOM
    - Set up event listener for regenerate button
    - Call `initializeApp()` on DOMContentLoaded event
    - _Requirements: 1.2, 2.1, 4.1_

- [ ] 5. Checkpoint - Ensure core functionality works
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Implement styling and visual presentation
  - [ ] 6.1 Style the hook cards
    - Add CSS for `.hook-card` class with padding, border, background, and shadow
    - Style `.hook-number` with distinct color or typography
    - Style `.hook-text` with readable font size and line height
    - Add hover effects for visual feedback
    - _Requirements: 5.2, 5.4_
  
  - [ ] 6.2 Style the controls and layout
    - Style the regenerate button with CSS framework classes and custom styles
    - Implement responsive grid layout for the three hook cards
    - Add spacing and alignment using CSS
    - Ensure mobile responsiveness
    - _Requirements: 5.1, 5.3_
  
  - [ ] 6.3 Apply color scheme and polish
    - Define and apply consistent color palette
    - Style the header section
    - Add transitions for smooth UI updates
    - Ensure text readability and contrast
    - _Requirements: 5.4_

- [ ]* 7. Write unit tests for edge cases
  - Test behavior when element banks are small (potential distinctness issues)
  - Test template substitution with missing placeholders
  - Test DOM manipulation when hooks container doesn't exist
  - Test regenerate button event listener attachment
  - _Requirements: 3.5, 6.2_

- [ ] 8. Final integration and validation
  - Verify initial page load displays exactly three distinct hooks
  - Verify regenerate button produces three new distinct hooks without page reload
  - Verify all templates and element banks are properly populated
  - Test in multiple browsers (Chrome, Firefox, Safari, Edge)
  - _Requirements: 1.1, 1.2, 2.1, 2.2, 4.2, 4.3_

- [ ] 9. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- The implementation uses vanilla JavaScript (ES6+) with no external dependencies beyond a CSS framework
- Checkpoints ensure incremental validation of core functionality
- Property tests validate universal correctness properties across many randomized inputs
- Unit tests validate specific examples and edge cases
- All generated hooks must be distinct within a single generation (Requirements 2.2, 6.1)
- The application is fully client-side with no server requirements

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1"] },
    { "id": 1, "tasks": ["2.1", "2.2"] },
    { "id": 2, "tasks": ["3.1", "3.2"] },
    { "id": 3, "tasks": ["3.3"] },
    { "id": 4, "tasks": ["3.4", "3.5"] },
    { "id": 5, "tasks": ["3.6", "3.7", "3.8"] },
    { "id": 6, "tasks": ["4.1"] },
    { "id": 7, "tasks": ["4.2"] },
    { "id": 8, "tasks": ["4.3", "4.4"] },
    { "id": 9, "tasks": ["6.1", "6.2", "6.3"] },
    { "id": 10, "tasks": ["7"] },
    { "id": 11, "tasks": ["8"] }
  ]
}
```
