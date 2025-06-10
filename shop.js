// Hamburger menu toggle
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Simple animation for the heading
window.addEventListener('DOMContentLoaded', () => {
    const animatedText = document.querySelector('.animated-text');
    if (animatedText) {
        animatedText.classList.add('show');
    }
});