document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(animateSection, { threshold: 0.5 });

  function animateSection(entries) {
    entries.forEach(entry => {
      const title = entry.target.querySelector("h2");
      const img = entry.target.querySelector("img");
      const text = entry.target.querySelector("p");

      if (entry.isIntersecting) {
        title.classList.add("animate__fadeInDown");
        img.classList.add("animate__fadeInLeft");
        text.classList.add("animate__fadeInRight");
      } else {
        title.classList.remove("animate__fadeInDown");
        img.classList.remove("animate__fadeInLeft");
        text.classList.remove("animate__fadeInRight");
      }
    });
  }

  sections.forEach(section => observer.observe(section));
});
