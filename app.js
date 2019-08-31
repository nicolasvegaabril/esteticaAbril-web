window.addEventListener('load', inicio)

function inicio(){}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll('.nav-links li');
  //Nav 
  const openClose = () => {
    nav.classList.toggle("nav-active");
      //Link animation toggle
      navLinks.forEach((link, index) => {
      if (link.style.animation){
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`; 
      }
      });
      //Burger button animation
      burger.classList.toggle("toggle");}

  burger.addEventListener("click",openClose);

  navLinks.forEach((link)=>{    
  link.addEventListener("click",openClose)});
 
};

navSlide();



