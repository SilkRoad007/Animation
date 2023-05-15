document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(animateSection, { threshold: 0.1 }); // Modification du seuil

  function animateSection(entries) {
    entries.forEach(entry => {
      const title = entry.target.querySelector("h2");
      const img = entry.target.querySelector("img");
      const text = entry.target.querySelector("p");
      const thanks = entry.target.querySelector(".thanks");

      if (entry.isIntersecting) {
        title.classList.add("animate__fadeInDown");
        img.classList.add("animate__fadeInLeft");
        text.classList.add("animate__fadeInRight");
        thanks.classList.add("animate__bounceIn");
      } else {
        title.classList.remove("animate__fadeInDown");
        img.classList.remove("animate__fadeInLeft");
        text.classList.remove("animate__fadeInRight");
        thanks.classList.remove("animate__bounceIn");
      }
    });
  }

  sections.forEach(section => observer.observe(section));
});
