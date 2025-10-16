# Profile Card

A responsive, interactive profile card web app showcasing a user's avatar, bio, social links, hobbies, and dislikes. Built with HTML, CSS, and JavaScript.

## Features

- **Profile Overview:** Displays avatar, name, job title, and social media links.
- **Tabbed Sections:** Switch between About, Hobbies, and Dislikes using accessible buttons.
- **Live Time:** Shows the current time (in milliseconds) updating every second.
- **Responsive Design:** Optimized for desktop and mobile screens.
- **Accessible:** Uses ARIA attributes for improved accessibility.

## Project Structure

- `index.html`: Main HTML file.
- `style.css`: Styles for layout and responsiveness.
- `script.js`: Handles tab switching, live time, and dynamic list heights.

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor for customization (VS Code recommended)
- No additional dependencies required

### Local Development
1. **Clone or Download:**
   ```bash
   git clone https://github.com/yourusername/profile-card.git
   cd profile-card
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

### Testing
- **Browser Testing:**
  - Test in different browsers to ensure cross-browser compatibility
  - Verify responsive design using browser developer tools
  - Test keyboard navigation through tab buttons
  - Verify screen reader compatibility

- **Performance Testing:**
  - Check timer accuracy
  - Verify smooth tab transitions
  - Test on different screen sizes
  - Monitor memory usage with long-running timer

### Known Issues
- Timer precision may vary slightly between browsers
- Tab animation performance might be affected on older devices

## Customization

- **Avatar & Info:** Update the avatar URL, name, job title, and bio in `index.html`.
- **Social Links:** Change the social media URLs as needed.
- **Hobbies/Dislikes:** Edit the lists in the HTML to reflect your interests.

## Accessibility

- Uses `aria-pressed`, `role`, and `aria-labelledby` for better screen reader support.
- Keyboard navigation is supported for tab buttons.

## License

This project is open source and free to use.