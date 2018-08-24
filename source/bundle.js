import './components/scss/style.scss';

import './components/js/bootstrap.min';

import './components/js/header';

import wow from 'wowjs';

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       25,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

import 'slick-carousel';

var SlickBanner = $('.slick-banner');
var SlickPortfolioFor = $(".slick-portfolio-for");
var SlickPortfolioNav = $(".slick-portfolio-nav");

SlickBanner.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	// arrows: false,
	dots: true,
	fade: true
})

SlickPortfolioFor.slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slick-portfolio-nav',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true
      }
    }
  ]
});

SlickPortfolioNav.slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slick-portfolio-for',
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1470,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

import pickmeup from './components/js/pickmeup.min';

import './components/js/map';

import './components/js/jquery.scrollbar.min';

jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

$(document).ready(function () {
  if ($('#scroll-filling').hasClass('scroll-scrolly_visible')) {
    $('.constructor_chose_filling').css("border-right", "none");
  }
  if ($('#scroll-types').hasClass('scroll-scrolly_visible')) {
    $('.constructor_chose_types').css("border-right", "none");
  }
  if ($('#scroll-filling-mob').hasClass('scroll-scrolly_visible')) {
    $('.constructor_chose_filling').css("border-right", "none");
  }
  if ($('#scroll-types-mob').hasClass('scroll-scrolly_visible')) {
    $('.constructor_chose_types').css("border-right", "none");
  }
});