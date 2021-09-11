import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import { Fancybox } from "@fancyapps/ui";

import {
    Swiper,
    Navigation,
    Pagination,
    Scrollbar,
    A11y
  } from "swiper";
  Swiper.use([Navigation, Pagination, Scrollbar, A11y]);
    



$(document).foundation();


const swiper = new Swiper(".swiper--timeline", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: "auto",
        centeredSlides: false,
      }
    },
    navigation: {
      nextEl: '.swiper-controls--timeline .swiper-button--next',
      prevEl: '.swiper-controls--timeline .swiper-button--prev',
    },
    pagination: {
        el: '.swiper-pagination--timeline',
        clickable: true,
      }
  });


const swiperTeam = new Swiper(".swiper--team", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: "auto",
        centeredSlides: false,
      }
    },
    navigation: {
      nextEl: '.swiper-controls--team .swiper-button--next',
      prevEl: '.swiper-controls--team .swiper-button--prev',
    },
    pagination: {
        el: '.swiper-pagination--team',
        clickable: true,
      }
  });
