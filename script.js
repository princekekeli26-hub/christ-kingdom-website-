/* =====================================================
   CHRIST KINGDOM CHRISTIAN MISSION INTERNATIONAL
   JAVASCRIPT
===================================================== */


/* ================= HERO SLIDER ================= */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");

let currentSlide = 0;


function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}


/* Automatically change slides */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}


setInterval(nextSlide, 6000);


/* Slider dots */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

    });

});


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* Close menu after clicking a link */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    observer.observe(element);

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting Christ Kingdom Christian Mission International. We will get back to you."
    );

    contactForm.reset();

});


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(0, 0, 0, 0.97)";

    } else {

        navbar.style.background =
            "rgba(0, 0, 0, 0.88)";

    }

});