window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const scrolled = window.scrollY > 0;
    nav.classList.toggle('scrolled', scrolled);
});

const observer  = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
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