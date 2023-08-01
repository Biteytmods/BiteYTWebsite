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

document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.getElementById('themeSwitch');
  const lightElements = document.querySelector("html")

  themeSwitch.addEventListener('change', function() {
    if (this.checked) {
      lightElements.setAttribute('data-bs-theme', 'dark')
      });
    }
  });
});

//----------------------------------------------------------------------------------------

window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');

  if (window.scrollY > 0) {
    nav.classList.add('shadow');
  } else {
    nav.classList.remove('shadow');
  }
});
