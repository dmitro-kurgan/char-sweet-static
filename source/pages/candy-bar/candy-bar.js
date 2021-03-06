import '../../components/scss/style.scss';

import '../../components/js/bootstrap.min';

import '../../components/js/header';

import 'slick-carousel';

var SlickPortfolioFor = $(".slick-portfolio-for");
var SlickPortfolioNav = $(".slick-portfolio-nav");

SlickPortfolioFor.slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	// dots: true,
	asNavFor: '.slick-portfolio-nav',
	// customPaging : function(slider, i) {
 //    var thumb = $(slider.$slides[i]).data();
 //    return '<a>'+i+'</a>';},
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

console.log('in portfolio-pg-1.js');
console.log($);
console.log(jQuery);