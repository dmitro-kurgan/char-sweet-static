$(function() {
    var h = $('.header');
    var h_ = '.header_';
    var menuToggle = $('#menuToggle');
    var menuDefault = $('#header_menu');
    var top;
    var desctab = '(min-width: 768px)';
    var tablet = '(max-width: 991px)';
    var mobile = '(max-width: 767px)';

    $(window).scroll(function(){
        top = $(this).scrollTop();
        if((top) > 0) {
            h.addClass('fixed');
            $(h_ + 'socials').appendTo(h_ + 'main');
            $('#border').css('height', '4px');
        } 
        else {
            h.removeClass('fixed');
            $(h_ + 'socials').appendTo(h_ + 'top');
        }
    });

    $(window).bind('resize', function () {	
        if (window.matchMedia(tablet).matches) {
    		$(h_ + 'menu').appendTo(menuToggle);
        }
        else {
        	$(h_ + 'menu').appendTo(menuDefault);      
        }
    }).trigger('resize');

    menuToggle.click(function() {
    	$(this).toggleClass('open');
    	$(h_ + 'menu').toggleClass('is-open');
    });
});

var jQuery = require("jquery-easing");


$('.header_menu > ul > li').hover(function () {
    $('.header_menu > ul > li.current-menu-item').addClass('current-menu-item-2');
});
$('.header_menu').mouseleave(function () {
    $('.header_menu > ul > li.current-menu-item').removeClass('current-menu-item-2');
});
$('.header_menu > ul > li.current-menu-item').hover(function () {
    $('.header_menu > ul > li.current-menu-item').removeClass('current-menu-item-2');
});
// $(document).ready(function () {
//     var style = 'easeOutExpo';
//     var default_left = Math.round($('.header_menu ul .header_menu_list.active').offset().left - $('.header_menu ul').offset().left);
//     var default_top = $('.header_menu ul .header_menu_list.active').height()-3;
//     var default_width = $('.header_menu ul .header_menu_list.active').outerWidth();
//     $('#border').css({left: default_left, top: default_top, width: default_width}); 
//     $('.header_menu ul .header_menu_list').hover(function () {
//         left = Math.round($(this).offset().left - $('.header_menu ul').offset().left);
//         width = $(this).outerWidth();
//         $('#border').stop(false, true).animate({left: left, width: width},{duration:500, easing: style});   
//     }).click(function () {
//         $('.header_menu ul .header_menu_list').removeClass('active'); 
//         $(this).addClass('active');
//     });
//     $('.header_menu').mouseleave(function () {
//         default_left = Math.round($('.header_menu ul .header_menu_list.active').offset().left - $('.header_menu ul').offset().left);
//         default_width = $('.header_menu ul .header_menu_list.active').outerWidth();
//         $('#border').stop(false, true).animate({left: default_left, width: default_width},{duration:1500, easing: style});  
//     });
// });

// $(document).ready(function () {
//     var style = 'easeOutExpo';
//     var default_left = Math.round($('.header_menu > ul > li.current-menu-item, .header_menu > ul > li.current-menu-parent').offset().left - $('.header_menu ul').offset().left);
//     var default_top = $('.header_menu > ul > li.current-menu-item, .header_menu > ul > li.current-menu-parent').height()-3;
//     var default_width = $('.header_menu > ul > li.current-menu-item, .header_menu > ul > li.current-menu-parent').outerWidth();
//     $('#border').css({left: default_left, top: default_top, width: default_width});
//     $('.header_menu > ul > li').hover(function () {
//         left = Math.round($(this).offset().left - $('.header_menu ul').offset().left);
//         width = $(this).outerWidth();
//         $('#border').stop(false, true).animate({left: left, width: width},{duration:500, easing: style});   
//     }).click(function () {
//         $('.header_menu > ul > li').removeClass('current-menu-item'); 
//         $('.header_menu > ul > li').removeClass('current-menu-parent'); 
//         $(this).addClass('current-menu-item');
//         $(this).addClass('current-menu-parent');
//     });
//     $('.header_menu').mouseleave(function () {
//         default_left = Math.round($('.header_menu > ul > li.current-menu-item, .header_menu > ul > li.current-menu-parent').offset().left - $('.header_menu > ul').offset().left);
//         default_width = $('.header_menu > ul > li.current-menu-item, .header_menu > ul > li.current-menu-parent').outerWidth();
//         $('#border').stop(false, true).animate({left: default_left, width: default_width},{duration:1500, easing: style});  
//     });
// });