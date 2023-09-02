const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shown");
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.remove("shown");
      entry.target.classList.add("hidden");
    }
  });
});

const elementsToObserve = document.querySelectorAll("section");

elementsToObserve.forEach((element) => {
  observer.observe(element);
});

//----------------------------------------------------------------------------------------
let clickCount = 0;

document.addEventListener("DOMContentLoaded", function () {
  const themeSwitch = document.getElementById("themeSwitch");
  const lightElements = document.querySelector("html");
  const logo = document.querySelector(".switch-logo");

  themeSwitch.addEventListener("click", function () {
    clickCount++;
    if (clickCount % 2 == Math.abs(1)) {
      lightElements.setAttribute("data-bs-theme", "dark");
      logo.style.background = "url(images/sun.svg)";
    } else {
      lightElements.setAttribute("data-bs-theme", "light");
      logo.style.background = "url(images/moon.svg)";
    }
  });
});

//----------------------------------------------------------------------------------------

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");

  if (window.scrollY > 0) {
    nav.classList.add("shadow-lg");
  } else {
    nav.classList.remove("shadow-lg");
  }
});

//----------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function (event) {
  var dataText = ["BiteYT VIP Mod Menu", "The Best Mod Menu On Android"];

  function typeWrite(text, i, fnCallback) {
    if (i < text.length) {
      document.querySelector("h1").innerHTML =
        text.substring(0, i + 1) + '<span id="tw" aria-hidden="true"></span>';

      setTimeout(function () {
        typeWrite(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    }
  }
  function startAnim(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        startAnim(0);
      }, 5000);
    }
    if (i < dataText[i].length) {
      typeWrite(dataText[i], 0, function () {
        startAnim(i + 1);
      });
    }
  }
  startAnim(0);
});
