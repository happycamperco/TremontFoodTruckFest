// Pierogi Palooza - Main JavaScript

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile navigation toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
menuToggle.addEventListener('click', () => mobileNav.classList.toggle('hidden'));

// Close mobile nav when link is clicked
document.querySelectorAll('#mobileNav a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.add('hidden'));
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 120, behavior: 'smooth' });
        }
    });
});
