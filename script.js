// Smooth scroll (for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form validation (basic)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const school = form.school.value.trim();
    const interest = form.interest.value.trim();

    if (!name || !email || !school || !interest) {
      alert('Please fill in all required fields.');
      e.preventDefault();
    }
  });
});

// Fade in on scroll (optional if not using ScrollReveal)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.content-section').forEach(section => {
  section.classList.add('fade-section');
  observer.observe(section);
});
