/*==================== the number of Squeres ====================*/

const numDivs = 25;

const box = document.getElementById("box");

for (let i = 0; i < numDivs; i++) {
  const div = document.createElement("div");
  box.appendChild(div);
}

/*==================== typing text ====================*/

const textToType = "Hi, I'm Mohamed";
const typingSpeed = 100;
const loopDelay = 1000;

const typedTextElement = document.getElementById("home-title");

function typeText() {
  let typedText = "";
  let index = 0;

  const typingInterval = setInterval(() => {
    typedText += textToType[index];
    typedTextElement.textContent = typedText;
    index++;
    if (index === textToType.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        typedTextElement.textContent = "";
        typeText();
      }, loopDelay);
    }
  }, typingSpeed);
}

typeText();
/*==================== counter ====================*/
// const counters = document.querySelectorAll(".num");

// // Function to animate each counter to a specific value
// function animateCounter(counter, targetValue) {
//   let count = 0;
//   const increment = targetValue / 200; // Adjust the speed of animation

//   const interval = setInterval(() => {
//     counter.textContent = Math.round(count); // Round up the current value
//     count += increment;
//     if (count >= targetValue) {
//       clearInterval(interval);
//     }
//   }, 10); // Adjust the interval for smoothness
// }

// // Call the function to start the counter animation for each counter
// animateCounter(document.getElementById("num1"), 2); // Change the target value as needed
// animateCounter(document.getElementById("num2"), 10); // Change the target value as needed
// animateCounter(document.getElementById("num3"), 2); // Change the target value as needed

/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*===== MENU HIDDEN =====*/

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills-content");
skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-close";
  }
  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });

    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });

    tab.classList.add("qualification-active");
  });
});

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll(".services-modal"),
  modalBtns = document.querySelectorAll(".services-button"),
  modaleCloses = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modaleCloses.forEach((modaleClose) => {
  modaleClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    Clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  // mousewheel: true,
  // keyboard: true,
});
/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper(".testimonial-container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    Clickable: true,
    dynamicBullets: true,
  },
  breakPoints: {
    568: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    delay: 2000,
  },
  // mousewheel: true,
  // keyboard: true,
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== loading page ====================*/

const loaderContainer = document.querySelector(".loader-container");
const pageContent = document.querySelector("#page-content");
window.addEventListener("load", () => {
  loaderContainer.classList.add("hidden");
  pageContent.classList.add("visible");
});

/*==================== animate sections ====================*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenEle = document.querySelectorAll(".hidden");

hiddenEle.forEach((el) => observer.observe(el));
