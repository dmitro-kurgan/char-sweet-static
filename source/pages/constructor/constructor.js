import '../../components/scss/style.scss';

import '../../components/js/bootstrap.min';

import '../../components/js/header';

$(function(){
	$('.input').mousedown(function(event){
	    event.stopPropagation();
	    // event.preventDefault();
	    // return false;
	});

	$('.minus').mousedown(function(event){
	    event.stopPropagation();
	    event.preventDefault(); 
	    return false;
	});

	$('.plus').mousedown(function(event){
	    event.stopPropagation();
	    event.preventDefault(); 
	    return false;
	});
	
	$('.plus').on('click', function(){
		
		var _this = $(this);
		var input = _this.next();
		var value = input.val();
		input.val(+value+1);

	});
	$('.minus').on('click', function(){
		var _this = $(this);
		var input = _this.prev();
		var value = input.val()
		if(value>1) {
			input.val(+value-1);
		}
	});
});

import pickmeup from '../../components/js/pickmeup.min';

pickmeup.defaults.locales['ru'] = {
	days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
};

addEventListener('DOMContentLoaded', function () {
	pickmeup('.date input', {
		position: 'bottom',
		locale: 'ru',
		separator: '.',
		format: 'd.m.Y',
		hide_on_select: true
	});
	pickmeup('.date-mobile', {
		flat: true,
		locale: 'ru'
	});
});

$('.chose_filling').click(function(e) {
	e.preventDefault();
	$('.order_filling').empty();
	$('.order_name--filling').empty();
	$(this).clone().appendTo('.order_filling');
	$(this).find('p').clone().appendTo('.order_name--filling');
});
$('.chose_type').click(function(e) {
	e.preventDefault();
	$('.order_type').empty();
	$('.order_name--type').empty();
	$(this).clone().appendTo('.order_type');
	$(this).find('p').clone().appendTo('.order_name--type');
});
$('#delete-filling').click(function(e) {
	e.preventDefault();
	$('.chose_filling').removeClass('active');
	$('.chose_filling:first-child').addClass('active');
	$('.order_filling').empty();
	$('.chose_filling:first-child').clone().appendTo('.order_filling');
	$('.order_name--filling').empty();
	$('.order_name--filling').text('Фруктовая');
});
$('#delete-type').click(function(e) {
	e.preventDefault();
	$('.chose_type').removeClass('active');
	$('.chose_type:first-child').addClass('active');
	$('.order_type').empty();
	$('.chose_type:first-child').clone().appendTo('.order_type');
	$('.order_name--type').empty();
	$('.order_name--type').text('Мастичный');
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

console.log('in constructor.js');
console.log($);
console.log(jQuery);