const inpuiryButton = document.querySelector(".button_moblie");
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
