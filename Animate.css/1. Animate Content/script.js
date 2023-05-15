document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const animations = ["animate__fadeInDown", "animate__fadeInRight", "animate__fadeInLeft", "animate__fadeInUp"];
  const observer = new IntersectionObserver(animateSection, { threshold: 0.5 });

  function animateSection(entries) {
    entries.forEach(entry => {
      const sectionId = entry.target.id;
      const title = document.querySelector(`#${sectionId} div`);
      const animationIndex = parseInt(sectionId.replace("section", "")) - 1;
      const animationClass = animations[animationIndex];

      if (entry.isIntersecting) {
        title.classList.add(animationClass);
      } else {
        title.classList.remove(animationClass);
      }
    });
  }

  sections.forEach(section => observer.observe(section));
});
