const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
// ferme le menu au click du lien
document.querySelectorAll(".nav-link").forEach(e => e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
} ))