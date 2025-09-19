/* =========================
   Petite Jewels JavaScript
   Handles scroll animations, footer year,
   and smooth scrolling for nav links
========================= */

// -------------------------
// Footer Year Update
// -------------------------
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// -------------------------
// Scroll Reveal Animation
// -------------------------
const revealElements = document.querySelectorAll(
  ".slides figure, .content, .about-section img, .about-text, .contact-section, .hero h1, .hero p, .hero .btn"
);

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add("show");
    } else {
      el.classList.remove("show"); // re-enable animation when scrolling back
    }
  });
}

// Run on scroll and page load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// -------------------------
// Smooth Scroll for Internal Links
// -------------------------
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");

  // only apply to same-page anchors like #about
  if (href && href.startsWith("#")) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    });
  }
});

// -------------------------
// Contact Form Validation (Optional)
// -------------------------
const contactForm = document.querySelector(".contact-section form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector("textarea");

    if (!name.value || !email.value || !message.value) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    // basic email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("✅ Thank you for contacting Petite Jewels!");
    contactForm.reset();
  });
}
