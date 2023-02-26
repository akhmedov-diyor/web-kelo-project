const hamburgerEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".header__section-nav");

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("active");
  navEl.classList.toggle("active");
});

document.querySelectorAll(".header__nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerEl.classList.remove("active");
    navEl.classList.remove("active");
  })
);
