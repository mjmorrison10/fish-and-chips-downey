/* ========== FISH & CHIPS DOWNEY — SCRIPT ========== */

// Scroll Progress Bar
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Open/Closed Indicator
function checkOpenStatus() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours + minutes / 60;
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');

    let isOpen = false;
    if (day >= 1 && day <= 6) { // Mon-Sat
        isOpen = currentTime >= 11 && currentTime < 21;
    } else if (day === 0) { // Sunday
        isOpen = currentTime >= 12 && currentTime < 20;
    }

    if (statusDot && statusText) {
        if (isOpen) {
            statusDot.classList.add('open');
            statusDot.classList.remove('closed');
            statusText.textContent = 'Open Now';
            statusText.style.color = '#22c55e';
        } else {
            statusDot.classList.add('closed');
            statusDot.classList.remove('open');
            statusText.textContent = 'Closed';
            statusText.style.color = '#ef4444';
        }
    }
}
checkOpenStatus();
setInterval(checkOpenStatus, 60000);

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal, .reveal-right, .reveal-left');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealElements.forEach(el => revealObserver.observe(el));

// Mobile CTA visibility
const mobileCta = document.getElementById('mobileCta');
if (mobileCta) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300 && window.innerWidth <= 768) {
            mobileCta.style.display = 'block';
        }
    });
}

// Form Validation
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        const name = document.getElementById('name');
        const phone = document.getElementById('phone');

        // Clear previous errors
        contactForm.querySelectorAll('input, textarea, select').forEach(input => {
            input.classList.remove('error');
        });

        if (!name.value.trim()) {
            name.classList.add('error');
            valid = false;
        }
        if (!phone.value.trim() || phone.value.trim().length < 7) {
            phone.classList.add('error');
            valid = false;
        }

        if (valid) {
            contactForm.style.display = 'none';
            formSuccess.classList.add('show');
            formSuccess.style.display = 'block';
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
