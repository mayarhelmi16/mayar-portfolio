
// MOBILE NAVIGATION MENU
let menuIcon = document.querySelector('#menu-icon');
let navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.onclick = () => {
        navLinks.classList.toggle('active');
    };
}


// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    '.section-title, .grid-card, .gallery-card, .about-container, .contact'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add('reveal');
    revealObserver.observe(element);
});


// IMAGE GALLERY LIGHTBOX
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const closeLightbox = document.querySelector('#close-lightbox');

if (lightbox && lightboxImage && closeLightbox) {

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add('active');
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            lightbox.classList.remove('active');
        }
    });
}


// TYPING ANIMATION
const typingText = document.querySelector("#typing-text");

const text = "Multimedia Computing Student";
let characterIndex = 0;

function typeEffect() {
    if (typingText && characterIndex < text.length) {
        typingText.textContent += text.charAt(characterIndex);
        characterIndex++;

        setTimeout(typeEffect, 100);
    }
}

if (typingText) {
    typeEffect();
}


// BACK TO TOP BUTTON
const backToTop = document.querySelector("#back-to-top");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ACTIVE NAVIGATION HIGHLIGHT
const navSections = document.querySelectorAll(
    "#about, #projects, #contact"
);

const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
    let currentSection = "about";

    navSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 250) {
            currentSection = section.id;
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);
