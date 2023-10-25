/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*validate if const NAVTOGGLE exists*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");
// navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  //METODO THEN( (CORRECT) , (ERROR) )
  e.preventDefault();

  emailjs.sendForm("service_w6yztbc", "template_yn51j4t", "#contact-form", "rqy1QM4Gzwp1T0cO0").then(() => {
    contactMessage.textContent = "Message sent successfully ✅";
    setTimeout(() => {
      contactMessage.textContent = "";
    }, 5000);

    contactForm.reset();
  });
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY <= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");

  scrollUp.scrollIntoView({
    behavior: "smooth",
  });
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
console.log(sections);
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((element) => {
    const sectionHeight = element.offsetHeight;
    const sectionTop = element.offsetTop - 58;
    const sectionId = element.getAttribute("id");
    const sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//localStorage PARA QUE RECARGAR BROWSER SE MANTENGA EL THEME
const selectedTheme = localStorage.getItem("selected-theme");
console.log(selectedTheme);
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line");

if (selectedTheme) {
  console.log(selectedTheme);

  //equivalente a document.body.classList.add(darkTheme), lo que añadiría la clase darkTheme al elemento body
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  console.log(darkTheme);
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top", //predeterminada
  distance: "60px",
  duration: 2500,
  delay: 300,
});

//reveal(target, options)
sr.reveal(`.home__perfil, .about__image`, { origin: "right" }); //replace the origin default
sr.reveal(
  `.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data`,
  { origin: "left" }
);
sr.reveal(`.services__card, .projects__card`, { interval: 100 }); //revelado escalonado para grupos de elementos
