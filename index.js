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
  const lightElements = document.querySelectorAll('div');

  themeSwitch.addEventListener('change', function() {
    if (this.checked) {
      document.body.style.backgroundColor = '#3b3b3b'
      lightElements.forEach(function(element) {
        element.classList.replace('bg-light', 'bg-dark');
        element.classList.replace('text-bg-light', 'text-bg-dark');
      });
    } else {
      lightElements.forEach(function(element) {
        document.body.style.backgroundColor = 'rgb(238, 238, 238)'
        element.classList.replace('bg-dark', 'bg-light');
        element.classList.replace('text-bg-dark', 'text-bg-light');
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
