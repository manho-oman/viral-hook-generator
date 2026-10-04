# Requirements Document

## Introduction

The Viral Hook Generator is a single-page web application that generates attention-grabbing YouTube video hooks for content creators. The application generates six niche-specific hooks per generation, each with a viral score based on psychological triggers. Users can select from different content niches, copy hooks to clipboard, view variations, export hooks, and access their generation history.

## Glossary

- **Hook_Generator**: The web application system that generates and displays YouTube video hooks
- **YouTube_Hook**: A single attention-grabbing title/opener for a YouTube video, scored for viral potential
- **Niche**: A content category (Gaming, Business, Fitness, Tech, Lifestyle, Education) with specialized hook templates
- **Template_System**: The JavaScript-based mechanism that combines niche-specific patterns with topic substitution
- **Viral_Score**: A numerical score (0-100) indicating the hook's potential for engagement based on psychological triggers
- **Generation**: A single execution that produces hooks for a given topic and niche
- **User**: The content creator interacting with the web application

## Requirements

### Requirement 1: Niche Selection

**User Story:** As a User, I want to select from different content niches, so that I receive hooks tailored to my content category

#### Acceptance Criteria

1. THE Hook_Generator SHALL provide six niche options: Gaming, Business, Fitness, Tech, Lifestyle, Education
2. THE Hook_Generator SHALL visually indicate the currently selected niche
3. WHEN a User selects a niche, THE Hook_Generator SHALL use that niche's templates for generation
4. THE Hook_Generator SHALL set Gaming as the default niche on page load

### Requirement 2: Hook Generation with Scoring

**User Story:** As a User, I want to generate YouTube hooks with viral scores, so that I can assess their potential effectiveness

#### Acceptance Criteria

1. WHEN a User provides a topic and clicks generate, THE Hook_Generator SHALL produce hooks for that topic
2. THE Hook_Generator SHALL generate hooks using the selected niche's template patterns
3. THE Hook_Generator SHALL substitute the topic into template placeholders
4. THE Hook_Generator SHALL calculate a Viral_Score (0-100) for each hook based on psychological triggers
5. THE Hook_Generator SHALL display each hook with its Viral_Score

### Requirement 3: Viral Scoring System

**User Story:** As a User, I want hooks scored on viral potential, so that I can choose the most engaging ones

#### Acceptance Criteria

1. THE Hook_Generator SHALL assign a base score of 50 to all hooks
2. WHEN a hook contains numbers, THE Hook_Generator SHALL add 15 points
3. WHEN a hook contains trigger words (don't, secret, truth), THE Hook_Generator SHALL add 10 points
4. WHEN a hook contains dollar signs, THE Hook_Generator SHALL add 10 points
5. WHEN a hook contains question words (why, how), THE Hook_Generator SHALL add 8 points
6. THE Hook_Generator SHALL cap the maximum score at 100

### Requirement 4: Copy to Clipboard

**User Story:** As a User, I want to copy hooks to my clipboard, so that I can use them immediately

#### Acceptance Criteria

1. THE Hook_Generator SHALL provide a Copy button for each hook
2. WHEN a User clicks a Copy button, THE Hook_Generator SHALL copy that hook's text to the clipboard
3. WHEN a hook is copied, THE Hook_Generator SHALL provide visual feedback (button text changes to "Copied!")
4. THE Hook_Generator SHALL reset the button appearance after 2 seconds

### Requirement 5: Hook Variations

**User Story:** As a User, I want to see variations of each hook, so that I have more options to choose from

#### Acceptance Criteria

1. THE Hook_Generator SHALL provide a "Show Variations" option for each hook
2. WHEN a User clicks "Show Variations", THE Hook_Generator SHALL generate 4-5 variations of that hook
3. THE Hook_Generator SHALL create variations using prefixes (SHOCKING:, NEW:, WARNING:) and suffixes ((watch now), (going viral))
4. THE Hook_Generator SHALL allow copying each variation independently

### Requirement 6: History Tracking

**User Story:** As a User, I want to see my generation history, so that I can revisit previous topics

#### Acceptance Criteria

1. THE Hook_Generator SHALL save each generation to a history list
2. THE Hook_Generator SHALL display history in a sidebar showing topic and niche
3. THE Hook_Generator SHALL store up to 20 most recent generations
4. WHEN a User clicks a history item, THE Hook_Generator SHALL load that topic and niche and regenerate hooks
5. THE Hook_Generator SHALL provide a "Clear History" option

### Requirement 7: Export Functionality

**User Story:** As a User, I want to export all generated hooks, so that I can save them for later use

#### Acceptance Criteria

1. THE Hook_Generator SHALL provide an Export button
2. WHEN a User clicks Export, THE Hook_Generator SHALL create a text file containing all current hooks
3. THE text file SHALL include the topic and all hook texts with numbering
4. THE Hook_Generator SHALL download the file with a filename format: hooks-{topic}.txt

### Requirement 8: Theme Customization

**User Story:** As a User, I want to customize the visual theme, so that the interface matches my preferences

#### Acceptance Criteria

1. THE Hook_Generator SHALL provide four theme options: Light, Dark, Ocean, Sunset
2. WHEN a User selects a theme, THE Hook_Generator SHALL apply that theme's color scheme
3. THE Hook_Generator SHALL persist the theme selection using localStorage
4. THE Hook_Generator SHALL load the saved theme on page reload

### Requirement 9: Visual Presentation

**User Story:** As a User, I want the hooks displayed in a professional interface, so that the application is easy to use

#### Acceptance Criteria

1. THE Hook_Generator SHALL use Tailwind CSS for all styling
2. THE Hook_Generator SHALL display hooks in cards with clear separation
3. THE Hook_Generator SHALL use gradient backgrounds and modern UI patterns
4. THE Hook_Generator SHALL be responsive across mobile, tablet, and desktop devices
