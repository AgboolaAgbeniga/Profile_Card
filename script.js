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
