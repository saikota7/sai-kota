const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelectorAll('.nav-bar ul li a');

// Toggle navbar visibility on hamburger click
hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

// Close navbar when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
  });
});
