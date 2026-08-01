const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");
const year = document.querySelector("#current-year");

menuButton.addEventListener("click", () => {
  const menuIsOpen = navLinks.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", menuIsOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

year.textContent = new Date().getFullYear();