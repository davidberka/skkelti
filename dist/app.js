const burgerMenu = document.querySelector(".burger");
const slideNav = document.querySelector(".navigation");

burgerMenu.addEventListener("click", () => {
  slideNav.classList.toggle("menu_active");
});
