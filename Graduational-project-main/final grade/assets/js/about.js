// Get buttons and sections
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdown = document.getElementById('dropdown');


// Event listener for dropdownBtn
dropdownBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");  
    dropdown.classList.toggle("py-2");  
});

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
  menuBtnIcon.setAttribute("class","fas fa-bars");
});