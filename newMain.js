const inpuiryButton = document.querySelector(".button_moblie");
const seeGallery = document.querySelector(".SeeAll");
const gallery = document.querySelector(".layoutGallery");
const closeButton = document.querySelector(".closeButton");
const forrmInpuiry = document.getElementById("from");

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
