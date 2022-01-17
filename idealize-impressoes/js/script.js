let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () => {
  contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = () => {
  contactInfo.classList.remove('active');
};

document.querySelector('#whats-btn').onclick = () => {
  window.open('https://api.whatsapp.com/send?l=pt&phone=5551982992523');
};

window.onscroll = () => {
  navbar.classList.remove('active');
  contactInfo.classList.remove('active');
};

var swiper = new Swiper('.home-slider', {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

lightGallery(document.querySelector('.projects .box-container'));
