# Profile Card

A responsive, multi-page web application featuring a profile card, About page with reflective sections, and Contact form with validation. Built with HTML, CSS, and JavaScript, focusing on accessibility and semantic markup.

## Project Overview

This project extends a single profile card into a full multi-page application, implementing proper accessibility features, form validation, and responsive design.

## Features & Requirements


### 1. Profile Card (Home Page)
- **Profile Overview:** 
  - Avatar, name, job title, and social links
  - Card UI with hover effects and smooth transitions
  - Live time display updating every second
- **Tabbed Interface:**
  - About section
  - Hobbies section
  - Dislikes section
- **Data TestIDs:**
  - Profile Card: `test-profile-card`
  - User Avatar: `test-user-avatar`
  - Social Links: `test-user-social-links`

### 2. Contact Page
- **Form Fields with TestIDs:**
  - Full Name: `test-contact-name`
  - Email: `test-contact-email`
  - Subject: `test-contact-subject`
  - Message: `test-contact-message`
  - Submit Button: `test-contact-submit`
- **Validation Features:**
  - Error messages (TestIDs: `test-contact-error-<field>`)
  - Success message (TestID: `test-contact-success`)
  - Real-time validation
  - Email format verification
  - Minimum message length (10 characters)
- **Accessibility:**
  - ARIA labels and descriptions
  - Error message association
  - Keyboard navigation support
  - Focus management

### 3. About Page
- **Required Sections with TestIDs:**
  - Main wrapper: `test-about-page`
  - Bio: `test-about-bio`
  - Goals in program: `test-about-goals`
  - Areas of low confidence: `test-about-confidence`
  - Note to future self: `test-about-future-note`
  - Extra thoughts: `test-about-extra`
- **Semantic Structure:**
  - Proper heading hierarchy
  - Section organization
  - Semantic HTML elements

## Technical Implementation

### Accessibility Features
1. **Skip Links:**
   - Skip to main content functionality
   - Visible on keyboard focus
   - Proper positioning and styling

2. **ARIA Attributes:**
   - `aria-label` for buttons and links
   - `aria-describedby` for form fields
   - `aria-pressed` for toggle buttons
   - `role` attributes where needed

3. **Keyboard Navigation:**
   - Visible focus indicators
   - Logical tab order
   - Interactive elements accessible via keyboard
   - Enhanced focus styles

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor for customization (VS Code recommended)

1. **Clone or Download:**
  ```bash
  git clone https://github.com/AgboolaAgbeniga/Profile_Card.git
  cd Profile_Card
  ```

2. **Development Server (Optional):**
   - For live reloading during development, you can use any local server:
     - Using Python:
       ```bash
       python -m http.server 8000
       ```
     - Using Node.js's `live-server`:
       ```bash
       npm install -g live-server
       live-server
       ```
   - Or simply open `index.html` directly in your browser

3. **View the Project:**
   - If using a server, visit `http://localhost:8000` or `http://localhost:3000`
   - If opening directly, just double-click `index.html`


### Testing & Validation
1. **Accessibility Testing:**
   - Test with screen readers
   - Verify keyboard navigation
   - Check ARIA attributes
   - Validate skip links

2. **Form Testing:**
   - Test all validation rules
   - Verify error messages
   - Check success scenarios
   - Test keyboard interaction
   - Validate all data-testid attributes:
     ```html
     test-contact-name
     test-contact-email
     test-contact-subject
     test-contact-message
     test-contact-submit
     test-contact-error-*
     test-contact-success
     ```

3. **About Page Testing:**
   - Verify all required sections present:
     ```html
     test-about-page
     test-about-bio
     test-about-goals
     test-about-confidence
     test-about-future-note
     test-about-extra
     ```
   - Check semantic HTML structure
   - Validate heading hierarchy

4. **Responsive Testing:**
   - Test on multiple devices
   - Verify breakpoints
   - Check mobile navigation
   - Validate touch interactions

### Known Issues
- Timer precision may vary slightly between browsers
- Tab animation performance might be affected on older devices


## Customization

- **Avatar & Info:** Update the avatar URL, name, job title, and bio in `index.html`.
- **Social Links:** Change the social media URLs as needed.
- **Hobbies/Dislikes:** Edit the lists in the Home page HTML.
- **About Page:** Update your bio and goals in `about.html`.
- **Contact Page:** Adjust form fields or validation in `contact.html` and `script.js` if needed.


## Accessibility

- Uses `aria-pressed`, `role`, and `aria-labelledby` for better screen reader support.
- Keyboard navigation is supported for tab buttons and navigation links.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

## License

This project is open source and free to use.