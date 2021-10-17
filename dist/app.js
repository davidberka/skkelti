const burgerMenu = document.querySelector(".burger");
const slideNav = document.querySelector(".navigation");

burgerMenu.addEventListener("click", () => {
  slideNav.classList.toggle("menu_active");
});

if (window.innerWidth < 1024) {
  const navLinks = document.querySelectorAll(".nav__link > a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // remove active className
      const dropdownMenus = document.querySelectorAll(".dropdown_menu");
      dropdownMenus.forEach((menu) => {
        if (link.parentNode != menu.parentNode) {
          menu.classList.remove("active");
        }
      });
      // add active className to current dropdown
      const dropdownMenu = link.nextElementSibling;
      if (dropdownMenu) {
        dropdownMenu.classList.toggle("active");
      }
    });
  });
}
