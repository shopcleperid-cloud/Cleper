const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const progressBars = document.querySelectorAll('.progress');
const contactForm = document.querySelector('.contact-form');
const submitBtn = document.querySelector('.submit-btn');

// Toggle hamburger menu
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        }
    });
});

// Animate progress bars on scroll
const animateProgressBars = () => {
    const skillsSection = document.getElementById('skills');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        });
        window.removeEventListener('scroll', animateProgressBars);
    }
};

window.addEventListener('scroll', animateProgressBars);

// Handle contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('#home');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});