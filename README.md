# Profile Card


A responsive, multi-page web app featuring a profile card, About page, and Contact form. Built with HTML, CSS, and JavaScript.

## Features


- **Navigation Bar:** Consistent navigation across Home, About, and Contact pages.
- **Profile Card (Home):** Displays avatar, name, job title, and social links. Includes tabbed sections (About, Hobbies, Dislikes) and a live time display.
- **About Page:** Details your bio and goals, with a clean, sectioned layout.
- **Contact Page:** Features a contact form with validation and feedback messages.
- **Responsive Design:** Optimized for desktop and mobile screens.
- **Accessible:** Uses ARIA attributes and supports keyboard navigation.
- **Dynamic UI:** JavaScript handles tab switching, live time, and dynamic list heights for a smooth user experience.

## Demo

![Profile Card Screenshot](demo-screenshot.png)

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
- **Browser Testing:**
  - Test all three pages (Home, About, Contact) in different browsers
  - Verify responsive design using browser developer tools
  - Test navigation bar and tab switching
  - Test keyboard navigation and screen reader compatibility

- **Form Testing:**
  - Submit the contact form with valid and invalid data to check validation and feedback

- **Performance Testing:**
  - Check timer accuracy on the Home page
  - Verify smooth tab and page transitions
  - Test on different screen sizes
  - Monitor memory usage with long-running timer

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