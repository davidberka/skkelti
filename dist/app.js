// MENU - START
const burgerMenu = document.querySelector(".burger");
const slideNav = document.querySelector(".navigation");

burgerMenu.addEventListener("click", () => {
  slideNav.classList.toggle("menu_active");
});

if (window.innerWidth < 1024) {
  const navLinks = document.querySelectorAll(".nav__link > a");
  const dropdownMenus = document.querySelectorAll(".dropdown_menu");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // remove active className
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
// MENU - END

// ROSTER FILTERS - START
const rosterFilters = document.querySelectorAll(".roster_filter");
const allPositions = document.querySelectorAll(".roster_section");

if (document.querySelector(".roster_filter[data-id='all']")) {
  document
    .querySelector(".roster_filter[data-id='all']")
    .classList.add("active");
}

rosterFilters.forEach((filter) => {
  filter.addEventListener("click", function () {
    const filterType = filter.getAttribute("data-id");

    let current = document.querySelector(".roster_filter.active");
    current.className = current.className.replace(" active", "");
    this.classList.add("active");

    allPositions.forEach((position) => {
      if (
        position.getAttribute("data-id") == filterType ||
        filterType === "all"
      ) {
        position.style.display = "block";
        position.animate([{ opacity: "0" }, { opacity: "1" }], {
          duration: 400,
        });
      } else {
        position.style.display = "none";
      }
    });
  });
});
// ROSTER FILTERS - END
