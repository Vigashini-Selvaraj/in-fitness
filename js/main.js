/**
 * Main Initialization Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Reusable Components
    if (typeof renderNavbar === 'function') renderNavbar();
    if (typeof renderFooter === 'function') renderFooter();

    // 2. Initialize Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 3. Initialize Theme and RTL/LTR
    if (typeof initTheme === 'function') initTheme();

    // 4. Initialize Navigation and Sliders
    if (typeof initNavigation === 'function') initNavigation();
    if (typeof initTestimonialSlider === 'function') initTestimonialSlider();

    // 5. Intersection Observer for Scroll Animations
    initScrollAnimations();

    // 6. Init Counters
    initCounters();
});

function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in, .slide-up, .fade-in-left, .fade-in-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    fadeElements.forEach(el => observer.observe(el));
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // lower is faster

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                
                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
                observer.unobserve(counter); // Run once
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}
