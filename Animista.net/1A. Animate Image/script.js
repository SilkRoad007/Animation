document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(animateSection, { threshold: 0.8 });

  function animateSection(entries) {
    entries.forEach(entry => {
      const sectionId = entry.target.id;
      const title = document.querySelector(`#${sectionId} img`);
      const animationClass = `animation${sectionId.replace("section", "")}`;

      if (entry.isIntersecting) {
        title.classList.add(animationClass);
      } else {
        title.classList.remove(animationClass);
      }
    });
  }

  sections.forEach(section => observer.observe(section));
});