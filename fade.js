function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  const sections = document.querySelectorAll('.fade-in-section');
  
  function fadeInSection() {
    sections.forEach((section) => {
      if (isElementInViewport(section)) {
        section.style.opacity = 1;
      }
    });
  }
  
  window.addEventListener('scroll', fadeInSection);
  window.addEventListener('load', fadeInSection); // Trigger on initial load