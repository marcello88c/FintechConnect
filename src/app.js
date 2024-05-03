// accordion
function toggleAccordion() {
  this.parentElement.classList.toggle("active");
}
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((item) => {
  const head = item.querySelector(".accordion-head");
  head.addEventListener("click", toggleAccordion);
});

// header scroll
const header = document.querySelector(".header");
function addScrolledClass() {
  header.classList.add("scrolled");
}
function removeScrolledClass() {
  header.classList.remove("scrolled");
}
function handleScroll() {
  if (window.scrollY >= 10) {
    addScrolledClass();
    localStorage.setItem("scrolled", "true");
  } else {
    removeScrolledClass();
    localStorage.setItem("scrolled", "false");
  }
}
const isScrolled = localStorage.getItem("scrolled") === "true";
if (isScrolled) {
  addScrolledClass();
}
window.addEventListener("scroll", handleScroll);

// header menu
let burger = document.querySelector(".header-burger");
let wrap = document.querySelector(".header-wrap");
let overlay = document.querySelector(".header-overlay");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  wrap.classList.toggle("active");
  overlay.classList.toggle("active");

  if (burger.classList.contains("active")) {
    scrollLock.disablePageScroll();
  } else {
    scrollLock.enablePageScroll();
  }
});

overlay.addEventListener("click", function () {
  burger.classList.remove("active");
  wrap.classList.remove("active");
  overlay.classList.remove("active");
  scrollLock.enablePageScroll();
});

// swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  loop: false,
  navigation: false,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return number < 10 ? "0" + number : number;
    },
    formatFractionTotal: function (number) {
      return number < 10 ? "0" + number : number;
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
