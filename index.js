let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');

}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop:true,
  });
  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  function fadeOut(){
setInterval(loader, 3000);
  }
  window.onload = fadeOut;