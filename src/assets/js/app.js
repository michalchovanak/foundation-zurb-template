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
    Controller,
    A11y,
    EffectFade
  } from "swiper";
  Swiper.use([Navigation, Pagination, Scrollbar, A11y, Controller, EffectFade]);
    



$(document).foundation();


const swiper = new Swiper(".swiper--timeline", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 20,
    breakpoints: {
      640: {
        spaceBetween: 30,
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
    centeredSlides: false,
    spaceBetween: 20,
    breakpoints: {
      640: {
        spaceBetween: 30,
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

  let swiperBatteriesText = new Swiper(".swiper--batteries-text", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    effect: 'fade',
    breakpoints: {
      640: {
        slidesPerView: 1,
        centeredSlides: false,
      }
    },
    fadeEffect: {
        crossFade: true
      },
  });

  let swiperBatteriesStats = new Swiper(".swiper--batteries-stats", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    effect: 'fade',
    breakpoints: {
      640: {
        slidesPerView: 1,
        centeredSlides: false,
      }
    },
    fadeEffect: {
        crossFade: true
      },
  });




  let swiperBatteries = new Swiper(".swiper--batteries", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: 1,
        centeredSlides: false,
      }
    },
    navigation: {
      nextEl: '.swiper-controls--batteries .swiper-button--next',
      prevEl: '.swiper-controls--batteries .swiper-button--prev',
    },
    pagination: {
        el: '.swiper-pagination--batteries',
        clickable: true,
      },
    controller: {
        control: [ swiperBatteriesStats, swiperBatteriesText],
        by: 'container'
    },
  });





  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});