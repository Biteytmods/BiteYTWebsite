const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('shown');
      entry.target.classList.remove('hidden');
    } else {
      entry.target.classList.remove('shown');
      entry.target.classList.add('hidden');
    }
  });
});

const elementsToObserve = document.querySelectorAll('section');

elementsToObserve.forEach((element) => {
  observer.observe(element);
});

//----------------------------------------------------------------------------------------
let clickCount = 0;

document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('themeSwitch');
  const lightElements = document.querySelector("html");
  const logo = document.querySelector('.switch-logo');

  themeSwitch.addEventListener('click', function() {
    clickCount++;
    if (clickCount % 2 == Math.abs(1)) {
      lightElements.setAttribute('data-bs-theme', 'dark');
      logo.style.background = 'url(images/sun.svg)';
    } else {
      lightElements.setAttribute('data-bs-theme', 'light');
      logo.style.background = 'url(images/moon.svg)';
    }
  });
});

//----------------------------------------------------------------------------------------

window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');

  if (window.scrollY > 0) {
    nav.classList.add('shadow-lg');
  } else {
    nav.classList.remove('shadow-lg');
  }
});