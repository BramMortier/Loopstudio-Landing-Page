// variables
const hamburgerMenu = document.getElementById('hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenuBtn = document.querySelector('#close-btn');

hamburgerMenu.addEventListener('click', () => {
  console.log('clicked');
  mobileMenu.classList.add('mobile-open');
})

closeMobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-open');
})