window.addEventListener('scroll',()=>{
    if(window.scrollY > 20){
        let navbar = document.querySelector('.navbar');
        navbar.classList.add("dynamic");
        let logIn = document.querySelector('.login');
        logIn.classList.add('dynamicLogIn');
    }else{
        let navbar = document.querySelector('.navbar');
        navbar.classList.remove("dynamic");
        logIn.classList.remove('dynamicLogIn');
    }
});

let menuBar = document.querySelector('.menuBar .fa-bars');
menuBar.addEventListener('click',()=>{
    let logIn = document.querySelector('.login');
    logIn.classList.add("animate__animated");
    logIn.classList.add("animate__slideInDown");
    logIn.style.cssText = 'display:flex';
    let xMark = document.querySelector('.menuBar .fa-xmark');
    xMark.style.cssText = 'display:block';
    menuBar.style.cssText = 'display:none';
});
let menuXmark = document.querySelector('.menuBar .fa-xmark');
menuXmark.addEventListener('click',()=>{
    let logIn = document.querySelector('.login');
    logIn.classList.add("animate__animated");
    logIn.classList.add("animate__slideInUp");
    logIn.style.cssText = 'display:none';
    let menuBar = document.querySelector('.menuBar .fa-bars');
    menuXmark.style.cssText = 'display:none';
    menuBar.style.cssText = 'display:block';
});

// menu Mobile
let menuBarMob = document.querySelector(".menuBarMobile .fa-bars");
menuBarMob.addEventListener('click',()=>{
    let menuItems = document.querySelector('.menu-mob');
    menuItems.style.cssText = 'display:flex';
    menuItems.classList.add("animate__animated");
    menuItems.classList.add("animate__slideInRight");
    let menuXmarkMob = document.querySelector(".menuBarMobile .fa-xmark");
    menuXmarkMob.style.cssText = 'display:flex';
    menuBarMob.style.cssText = 'display:none';
});

let menuXmarkMob = document.querySelector(".menuBarMobile .fa-xmark");
menuXmarkMob.addEventListener('click',()=>{
    let menuItems = document.querySelector('.menu-mob');
    menuItems.style.cssText = 'display:none';
    menuItems.classList.add("animate__animated");
    menuItems.classList.add("animate__slideInLeft");
    let menuBarMob = document.querySelector(".menuBarMobile .fa-bars");
    menuBarMob.style.cssText = 'display:flex';
    menuXmarkMob.style.cssText = 'display:none';
});
// swipper for team
function myFunction(x) {
  if (x.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
  });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
  });
  }
}
var x = window.matchMedia("(max-width: 851px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) 

// Animation When Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);