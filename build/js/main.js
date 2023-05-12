const initApp = () => {
    const hamburgerBtn = document.getElementById('menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach(slide => {
    slide.style.opacity = '0';
  });
  slides[currentSlide].style.opacity = '1';
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
}

setInterval(showSlide, 3000);
