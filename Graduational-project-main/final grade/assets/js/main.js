
// ============================== Home Page =============================


const menuBtn = document.getElementById("menu-btn");
const navLinks =document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click",(e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "fas fa-times":"fas fa-bars")
});

navLinks.addEventListener("click",(e) =>{
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class","fas fa-bars");
});

const scrollRevealOption = {
  distance:"50px",
  origin:"bottom",
  duration:1000,
};

ScrollReveal().reveal(".header__image .RB_flask" ,{
  ...scrollRevealOption,
  origin:"right",
});
ScrollReveal().reveal(".header__content h1" ,{
  ...scrollRevealOption,
  delay:500,
});
ScrollReveal().reveal(".header__content .section__description" ,{
  ...scrollRevealOption,
  delay:1000,
});
ScrollReveal().reveal(".header__btns" ,{
  ...scrollRevealOption,
  delay:1500,
});