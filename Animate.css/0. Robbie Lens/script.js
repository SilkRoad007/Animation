// Fonction qui vérifie si un élément est visible à l'écran
function isElementVisible(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (
    rect.top <= (windowHeight * 0.5) &&
    rect.bottom >= (windowHeight * 0.5)
  );
}

// Fonction qui gère les animations de la section "accueil-introduction"
function handleIntroductionAnimations() {
  var introSection = document.querySelector('.accueil-introduction');

  var div = introSection.querySelector('div');
  var img = introSection.querySelector('img');

  if (isElementVisible(introSection)) {
    div.classList.add('animate__animated', 'animate__slideInLeft');
    img.classList.add('animate__animated', 'animate__slideInRight');
  } else {
    div.classList.remove('animate__animated', 'animate__slideInLeft');
    img.classList.remove('animate__animated', 'animate__slideInRight');
  }
}

// Ajoute les événements "load" et "scroll" à la fonction handleIntroductionAnimations
window.addEventListener('load', handleIntroductionAnimations);
window.addEventListener('scroll', handleIntroductionAnimations);


// Fonction qui gère les animations de la section "accueil-photos"
function handlePhotosAnimations() {
  var photosSection = document.querySelector('.accueil-photos');

  var divs = photosSection.querySelectorAll('div');

  if (isElementVisible(photosSection)) {
    divs.forEach(function (div) {
      div.classList.add('animate__animated', 'animate__slideInLeft');
    });
  } else {
    divs.forEach(function (div) {
      div.classList.remove('animate__animated', 'animate__slideInLeft');
    });
  }
}

// Ajoute les événements "load" et "scroll" à la fonction handlePhotosAnimations
window.addEventListener('load', handlePhotosAnimations);
window.addEventListener('scroll', handlePhotosAnimations);


// Fonction qui ajoute une classe d'animation à un élément
function addAnimationClass(el) {
  el.classList.add('animate__animated', 'animate__bounceInUp');
}

// Fonction qui retire une classe d'animation à un élément
function removeAnimationClass(el) {
  el.classList.remove('animate__animated', 'animate__bounceInUp');
}

// Fonction qui gère les animations du formulaire de contact
function handleFormAnimations() {
  var formSection = document.getElementById('contact');

  var form = formSection.querySelector('form');

  if (isElementVisible(formSection)) {
    addAnimationClass(form);
  } else {
    removeAnimationClass(form);
  }
}

// Ajoute les événements "load" et "scroll" à la fonction handleFormAnimations
window.addEventListener('load', handleFormAnimations);
window.addEventListener('scroll', handleFormAnimations);