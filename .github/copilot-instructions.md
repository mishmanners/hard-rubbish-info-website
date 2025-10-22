# GitHub Copilot Instructions for RePurposeful

## Repository Summary

**RePurposeful** is a website designed to help users find the best way to dispose of hard rubbish (large household items that can't go in regular garbage). The website provides search functionality to find recycling, upcycling, and donation options for unwanted items, with a focus on Merri-Bek Council area in Melbourne, Australia. The goal is to reduce landfill waste and promote environmental sustainability.

Key features include:
- **Search functionality**: Users can search for disposal information by item type and condition
- **Informational pages**: Educational content about hard rubbish disposal
- **Contact form**: Users can submit inquiries and suggest new disposal information
- **Future plans**: Web scraping, user authentication, Facebook integration, gamification

## High-Level Repository Information

### Project Type
- **Type**: Static website with client-side JavaScript
- **Size**: Small (~36 files, 15MB including assets)
- **Deployment**: Designed for static hosting (GitHub Pages, Netlify)

### Technologies & Frameworks

#### Frontend
- **HTML5**: Four main pages (index, about, search, contact)
- **CSS3**: Custom styling in `src/css/styles.css`
- **Vanilla JavaScript**: Form handling and dynamic content in `src/forms/searchForm.js`

#### Development Tools
- **Node.js**: Runtime for development server and tooling
- **sirv-cli**: Development server (`npm run start`)
- **Playwright**: End-to-end testing framework
- **npm**: Package manager

#### Future/Planned Technologies
- **axios & cheerio**: For web scraping functionality (not yet fully implemented)
- **Netlify**: For form handling and deployment

### Languages
- JavaScript (ES6+)
- HTML5
- CSS3

## Build and Validation Instructions

### Setup
```bash
# Install dependencies
npm install

# Install Playwright browsers (required for testing)
npx playwright install
```

### Development Server
```bash
# Start local development server on http://localhost:8080
npm run start
```

The development server uses `sirv-cli` and serves the static files from the root directory.

### Testing
```bash
# Run all Playwright tests
npm test

# Run tests with UI mode (interactive debugging)
npm run test:ui
```

**Test Files Location**: `src/tests/`
- `index_test.spec.js` - Homepage tests
- `about_test.spec.js` - About page link validation
- `contact_test.spec.js` - Contact form tests
- `submit_test.spec.js` - Search form functionality tests

**Test Configuration**: 
- Tests run on `http://localhost:8080` (configured in `playwright.config.js`)
- Automatic server startup via webServer configuration
- Tests verify page loads, form functionality, and link integrity

### Linting
Currently, there is no linting configuration. If adding code, follow the existing code style:
- Use semicolons
- Use single quotes for strings
- 4-space indentation for JavaScript
- Descriptive variable names

### Web Scraping (Future Feature)
```bash
# Run the scraper (not fully implemented yet)
npm run scrape
```

## Project Layout and Architecture

### Directory Structure

```
/
├── .github/                    # GitHub-specific files (workflows, instructions)
├── src/                        # Source files
│   ├── css/                    # Stylesheets
│   │   └── styles.css          # Main stylesheet
│   ├── forms/                  # Form handling JavaScript
│   │   └── searchForm.js       # Search form logic and results display
│   ├── images/                 # Images, icons, and assets
│   │   └── favicon.ico         # Site favicon
│   ├── scraping/               # Web scraping utilities (future feature)
│   │   ├── scraper.js          # Scraping logic for council websites
│   │   └── runScraper.js       # Scraper execution script
│   └── tests/                  # Playwright test files
│       ├── *.spec.js           # Test specifications
│       └── playwright.config.ts # Test-specific config
├── index.html                  # Homepage
├── about.html                  # About page with resources
├── search.html                 # Search form page
├── contact.html                # Contact form page
├── package.json                # Dependencies and scripts
├── playwright.config.js        # Playwright configuration
└── README.md                   # Project documentation
```

### Key Architecture Details

#### Search Functionality (`src/forms/searchForm.js`)
The search feature is the core of the application:

1. **Dynamic Form**: The condition dropdown updates based on the selected item type
   - `updateConditionOptions()`: Updates condition options based on item type
   - Different item types have different condition options (e.g., "Working/Not Working" for electronics)

2. **Hardcoded Database**: Search results are currently hardcoded in JavaScript
   - `fetchInformation(searchCriteria)`: Returns HTML-formatted results based on type and condition
   - Results include links to local charities, recycling centers, and disposal options
   - Covers 15+ item categories: furniture, electronics, appliances, clothing, batteries, etc.

3. **Form Submission**: 
   - `handleSearchFormSubmission()`: Processes form data and displays results
   - Results are injected into the `#results` div on the same page

**Important**: The database is hardcoded as JavaScript functions. Future plans include:
- Moving to JSON format for easier maintenance
- Adding web scraping to fetch live data
- Implementing user-submitted data via PR automation

#### Page Structure
All HTML pages follow a consistent structure:
- **Header**: Site title, navigation menu (Home, About, Search, Contact)
- **Main**: Page-specific content sections
- **Footer**: Attribution to MishManners
- **Metadata**: SEO tags, Open Graph, Twitter Card metadata

#### Styling (`src/css/styles.css`)
- Responsive design
- Custom styling for forms, buttons, navigation
- Color scheme focused on environmental/green themes

#### Testing Strategy
Tests focus on:
- Page load verification
- Form element presence and functionality
- Link validation (ensuring all links work)
- User interaction flows (filling forms, submitting searches)

### Key Facts for Code Changes

1. **Search Results Location**: All disposal information is in `src/forms/searchForm.js` in the `fetchInformation()` function
   - Each item type and condition combination has a specific HTML response
   - To add new items: Add to dropdown in `search.html` AND add cases to `updateConditionOptions()` and `fetchInformation()`

2. **Styling**: All CSS is in `src/css/styles.css` - single stylesheet for entire site

3. **Navigation**: Consistent across all pages - update all 4 HTML files if changing navigation structure

4. **Testing**: Add new tests to `src/tests/` following the existing Playwright patterns
   - Tests use `page.goto()`, `page.getByRole()`, and `expect()` from Playwright
   - Each test file focuses on one page or feature

5. **Assets**: Images and icons go in `src/images/`

6. **No Backend**: This is a purely static site. Contact forms and user submissions need external services (planned: Netlify Forms)

7. **Local Focus**: Content is specific to Merri-Bek Council area in Melbourne - keep this in mind when adding disposal options

### Common Development Tasks

#### Adding a New Item Type to Search
1. Add option to `<select id="type">` in `search.html`
2. Add condition options in `updateConditionOptions()` in `src/forms/searchForm.js`
3. Add result cases in `fetchInformation()` in `src/forms/searchForm.js`
4. Add test case in `src/tests/submit_test.spec.js`

#### Adding a New Page
1. Create `pagename.html` in root directory
2. Follow the structure of existing HTML files (header, nav, main, footer)
3. Link stylesheet: `<link rel="stylesheet" href="src/css/styles.css">`
4. Add navigation link to all existing HTML pages
5. Create test file: `src/tests/pagename_test.spec.js`

#### Updating Styles
1. Edit `src/css/styles.css`
2. Test with development server: `npm run start`
3. Verify responsive behavior at different viewport sizes

### Known Issues and TODOs

From README.md, planned improvements include:
- Connect to Netlify for contact form handling
- Implement web scraping to fetch live disposal data
- Convert hardcoded database to JSON format
- Add user submission form that creates PRs to update the database
- Future features: Login, Facebook integration, location expansion, gamification

### Code Style Guidelines

- **Comments**: Add comments for complex logic or non-obvious code. Existing code has some console.log statements for debugging
- **Functions**: Use descriptive function names (e.g., `updateConditionOptions`, `fetchInformation`)
- **HTML**: Use semantic HTML5 elements
- **Accessibility**: Include labels for form inputs, alt text for images, proper heading hierarchy
- **Links**: Use `target="blank"` for external links (already established pattern)
- **Error Handling**: Currently minimal - consider adding for future features

### External Resources

The site links to many external resources:
- Local charities: St Vincent de Paul, Salvation Army, RIMERN
- Recycling services: Darebin Resource Recovery Centre, Officeworks
- Council services: Merri-Bek Council hard rubbish collection
- Social networks: Facebook groups for local item exchange

When adding new resources, verify links are valid and services are actively accepting items.

---

**Note**: This website was built for a hackathon and is actively being developed. Code is well-structured for a small project but may benefit from refactoring as features are added (particularly moving from hardcoded data to a proper database system).
