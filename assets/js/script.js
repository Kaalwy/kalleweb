window.addEventListener("scroll", function () {
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (window.scrollY === 0) {
    scrollIndicator.style.opacity = "1";
    scrollIndicator.style.pointerEvents = "auto";
  } else {
    scrollIndicator.style.opacity = "0";
    scrollIndicator.style.pointerEvents = "none";
  }
});
