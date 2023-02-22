'use strict';

// header scroll


// const navbarMenu = document.querySelector('.header__menu');
// navbarMenu.addEventListener('click', (event) => {
//   const id = event.target.dataset.section;
//   if (!id) return;
//   const target = document.getElementById(id);
//   const targetY = target.getBoundingClientRect().y;
//   const distance = window.pageYOffset + targetY - navbarHeight;
//   window.scroll({
//     top: distance,
//     left: 0,
//     behavior: 'smooth',
//   });
// });

const navbarMenu = document.querySelector('.header__menu');
navbarMenu.addEventListener('click', (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return;
  }
  console.log(event.target.dataset.link);
  const scrollTo =document.querySelector(link);
  scrollTo.scrollIntoView({behavior:'smooth'});
})

const homeContactBtn = document.querySelector('.frame');
homeContactBtn.addEventListener('click', () => {
  const scrollTo =document.querySelector('#context');
  scrollTo.scrollIntoView({behavior:'smooth'});
});

const home = document.querySelector('.frame-2');
home.addEventListener('click', () => {
  const scrollTo =document.querySelector('#content');
  scrollTo.scrollIntoView({behavior:'smooth'});
});




// about
// const aboutBtn =document.querySelector('.custom-btn btn-3');
// aboutBtn.addEventListener('click',()=>{
//   const scrollTo =document.querySelector('#about');
//   scrollTo.scrollIntoView({behavior:'smooth'});
// });






