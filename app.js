const hamburger = document.querySelector(".hamburguer");
const navLinks = document.querySelector(".navlinks_mobile");



hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });