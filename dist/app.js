// MENU - START
const burgerMenu = document.querySelector(".burger");
const slideNav = document.querySelector(".navigation");

burgerMenu.addEventListener("click", () => {
  slideNav.classList.toggle("menu_active");
});

if (window.innerWidth < 1024) {
  const navLinks = document.querySelectorAll(".nav_link > a");
  const secondNavLinks = document.querySelectorAll(".second_nav_link > a");
  const dropdownMenus = document.querySelectorAll(".dropdown_menu");
  const secondDropdownMenus = document.querySelectorAll(".second_dropdown_menu");

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

  secondNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // remove active className
      secondDropdownMenus.forEach((menu) => {
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

// SHOW MORE ARTICLES BUTTON - START
const showArticlesBtn = document.querySelector(".show_articles.archive");
const articlesContainer = document.querySelector(".archive_clanky_container");

if (showArticlesBtn) {
  const articleContainerContent =
    document.querySelector(".clanek_container").innerHTML;

  showArticlesBtn.addEventListener("click", () => {
    const article = document.createElement("div");
    article.className = "clanek_container";
    article.innerHTML += articleContainerContent;
    articlesContainer.appendChild(article);
    articlesContainer.appendChild(article.cloneNode(true));
  });
}
// SHOW MORE ARTICLES BUTTON - END

// SCROLL UP BTN - START
const scrollUpBtn = document.querySelector(".scroll_up");

if (scrollUpBtn) {
  scrollUpBtn.style.display = "none";

  document.addEventListener("scroll", () => {
    if (window.scrollY < 500) {
      scrollUpBtn.style.display = "none";
    } else {
      scrollUpBtn.style.display = "block";
    }
  });

  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// SCROLL UP BTN - END

// SEARCH INPUT - START
const searchBtn = document.querySelector(".search_btn");
const searchInput = document.querySelector(".search_input");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    searchInput.classList.toggle("active");
  });
}
// SEARCH INPUT - END

// TRUNCATE - START
const articleTitles = document.querySelectorAll(".truncate_title");

function truncateTitle() {
  let titleLength = 60;
  articleTitles.forEach((title) => {
    if (window.innerWidth <= 425) {
      title.classList.add("truncate");
    }
    if (title.textContent.length > titleLength) {
      const truncated = title.textContent.substr(0, titleLength) + "...";
      title.textContent = truncated;
    } else {
      title.textContent;
    }
  });
}

truncateTitle();
// TRUNCATE - END

// CHECK DISTANCE FROM THE TOP - P ELEMENT - START
function checkDistanceFromTop(container, page) {
  const paragraphps = document.querySelectorAll(`${container}.ofTop_check p`);
  let pWidth = '';
  page === 'article' ? pWidth = '50%' : page === 'match' ? pWidth = '66.666667%' : pWidth = '0';
  paragraphps.forEach(paragraph => {
    const heightOfTheTop = paragraph.getBoundingClientRect().top + window.scrollY;
    if (heightOfTheTop < 900 && window.innerWidth >= 1024) {
      paragraph.style.width = pWidth;
    }
  })
}

checkDistanceFromTop('.text_container', 'article');
checkDistanceFromTop('.match_text', 'match');
// CHECK DISTANCE FROM THE TOP - P ELEMENT - END

 $('.matches_slick').slick({
    dots: false,
    arrows: false,
    infinite: false,
    draggable: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });