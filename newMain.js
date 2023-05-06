const inpuiryButton = document.querySelector(".button_moblie");
const seeGallery = document.querySelector(".SeeAll");
const gallery = document.querySelector(".layoutGallery");
const closeButton = document.querySelector(".closeButton");
const forrmInpuiry = document.getElementById("from");
const taptour = document.querySelectorAll(".SingelTaps");
const layoutviews = document.querySelectorAll(".sectionView");
// taps tour function
function add_and_remove_active_class() {
  //for in will not work with DOM elements
  taptour.forEach((elem, i) => {
    elem.addEventListener("click", () => {
      for (let index = 0; index < taptour.length; index++) {
        taptour[index].classList.remove("active");
        layoutviews[index].classList.remove("active");
      }
      elem.classList.add("active");
      layoutviews[i].classList.add("active");
    });
  });
}
add_and_remove_active_class();
// button inqure on scroll event and on click event go to from
inpuiryButton &&
  inpuiryButton.addEventListener("click", () => {
    forrmInpuiry.scrollIntoView(false);
    setTimeout(() => {
      inpuiryButton.classList.add("close");
    }, 1500 / 2);
  });
window.addEventListener("scroll", () => {
  if (inpuiryButton.classList.contains("close")) {
    inpuiryButton.classList.remove("close");
  }
});
// open and close gallery
seeGallery &&
  seeGallery.addEventListener("click", () => {
    gallery.classList.add("open");
    document.body.style.overflow = "hidden";
  });
//  close gallery
closeButton &&
  closeButton.addEventListener("click", () => {
    gallery.classList.remove("open");
    document.body.style.overflow = "auto";
  });
// slider swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// reviews slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#reviewSection", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "20px",
    breakpoints: {
      1024: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
      autoScroll: {
        speed: 2,
      },
      autoScroll: {
        speed: 1,
      },
    },
    pagination: false,
  }).mount(window.splide.Extensions);
});
