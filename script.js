// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Typed.js for hero
const typed = new Typed('#typed', {
  strings: ["Web Developer", "MERN Stack Enthusiast", "Creative Coder"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Back to top button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
