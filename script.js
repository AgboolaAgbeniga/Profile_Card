document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card-buttons button');
  const sections = document.querySelectorAll('.card-section');
  const timeEl = document.getElementById('time');

  // Update time every second
  function updateTime() {
    timeEl.textContent = Date.now();
  }
  updateTime();
  setInterval(updateTime, 1000);

  // Section switching logic
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-section');

      buttons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');

      sections.forEach((section) => {
        section.classList.remove('is-active');
        if (section.id === target) section.classList.add('is-active');
      });
    });
  });

  // --- NEW: Match hobbies/dislikes height to about section ---
  function adjustListHeights() {
    const aboutSection = document.getElementById('about_p');
    const hobbiesList = document.querySelector('#hobbies ul');
    const dislikesList = document.querySelector('#dislikes ul');

    if (aboutSection && hobbiesList && dislikesList) {
      const aboutHeight = aboutSection.offsetHeight;
      hobbiesList.style.maxHeight = aboutHeight + 'px';
      hobbiesList.style.overflowY = 'auto';

      dislikesList.style.maxHeight = aboutHeight + 'px';
      dislikesList.style.overflowY = 'auto';
    }
  }

  // Run once on load
  adjustListHeights();

  // Optional: re-run on window resize to keep things consistent
  window.addEventListener('resize', adjustListHeights);
});

// Toggle mobile menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});
// === Close Menu When Clicking Outside ===
document.addEventListener("click", (e) => {
  const nav = document.querySelector(".nav-links");
  const toggle = document.querySelector(".menu-toggle");

  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("active");
  }
});

// === Close Menu When Clicking Any Link ===
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});


// === CONTACT FORM VALIDATION ===
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const successMessage = document.getElementById("test-contact-success");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Clear old messages
    document.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");
    successMessage.textContent = "";

    // Reset all input borders
    contactForm.querySelectorAll("input, textarea").forEach(el => {
      el.style.borderColor = "#ccc"; // default
    });

    let isValid = true;

    // Field references
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Name validation
    if (!name.value.trim()) {
      document.getElementById("test-contact-error-name").textContent = "Full name is required.";
      name.style.borderColor = "red";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email.value.trim()) {
      document.getElementById("test-contact-error-email").textContent = "Email is required.";
      email.style.borderColor = "red";
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      document.getElementById("test-contact-error-email").textContent = "Please enter a valid email (name@example.com).";
      email.style.borderColor = "red";
      isValid = false;
    }

    // Subject validation
    if (!subject.value.trim()) {
      document.getElementById("test-contact-error-subject").textContent = "Subject is required.";
      subject.style.borderColor = "red";
      isValid = false;
    }

    // Message validation
    if (!message.value.trim()) {
      document.getElementById("test-contact-error-message").textContent = "Message is required.";
      message.style.borderColor = "red";
      isValid = false;
    } else if (message.value.trim().length < 10) {
      document.getElementById("test-contact-error-message").textContent = "Message must be at least 10 characters.";
      message.style.borderColor = "red";
      isValid = false;
    }

    // Show success if valid
    if (isValid) {
      successMessage.textContent = "Your message has been sent successfully! We'll get back to you soon.";
      contactForm.querySelectorAll("input, textarea").forEach(el => {
        el.style.borderColor = "green";
      });
      contactForm.reset();
    }
  });
}