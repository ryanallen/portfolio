// JavaScript from https://ryfarlane.com/article/fade-in-on-scroll-vanilla-javascript-css
const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");
if (elementsToFadeInUpOnScroll) {
  window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  });
} 