let menuToggler = document.querySelector('.menu-toggle');
let body = document.querySelector('body');
const navLinks = document.querySelectorAll(".nav-link");

menuToggler.addEventListener('click', () => {
  body.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove("open");
  });
});