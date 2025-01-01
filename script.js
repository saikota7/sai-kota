// Example for smooth scroll (like before, for section navigation)

const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Intersection Observer to detect when elements are in the viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view'); // Add class when element is in view
      observer.unobserve(entry.target); // Stop observing once it's in view
    }
  });
}, {
  threshold: 0.5 // Trigger when 50% of the element is visible
});

// Observe all text elements that need animation
const textElements = document.querySelectorAll('.text-content h1 .greeting, .text-content h1 .name, .text-content h2, .text-content .social-icons');
textElements.forEach(element => observer.observe(element));
