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

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', function() {
  
    const themeSwitch = document.getElementById('themeSwitch');
    const lightElements = document.querySelectorAll('.bg-light')
    themeSwitch.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('bg-dark')
        localStorage.setItem('theme', 'dark-mode');
      } else {
        document.body.classList.replace('bg-dark', 'bg-light');
        localStorage.setItem('theme', 'light-mode');
      }
    });
  });