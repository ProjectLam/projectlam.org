import { debug } from "svelte/internal";

(function ($) {
	"use strict";

//	 $(window).on('load', function(){
        // Prealoder
//        $("#preloader").delay(500).fadeOut();
//    });
	
	$(window).scroll(function() {    



		var scroll = $(window).scrollTop();
	
		//>=, not <=
		if (scroll >= 1) {
			//clearHeader, not clearheader - caps H
			$(".header-area").addClass("is-stick");
		}else{
			$(".header-area").removeClass("is-stick");
		};
	});


   // Hamburger-menu
   $('.hamburger-menu').on('click', function () {
    $('.hamburger-menu, #menu').toggleClass('current');
});


    // slider active
      $('.slider-actives').owlCarousel({
        loop:true,
        stagePadding: 100,
        items: 1,
        nav:false,
        dots:false,
        margin:0,
        autoplay: true,
        autoplayTimeout:3000,
        smartSpeed: 1000,
        autoplayspeed: 1500,
		responsive: {
			0: {
				items: 1,
                margin: 20,
                stagePadding: 40,
			},
			460: {
				items: 1
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
    })


    // magnific popup
    
    $('.video-popup').magnificPopup({
        type:'iframe'
    });


    // Aos initialize
    AOS.init();


    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });






    // flagStrap
    $('#options').flagStrap({
        countries: {
            "GB": "Eng",
            "LV": "Lv",
            "ES": "Es",
            "US": "Us"
        },
        buttonSize: "btn-sm",
        labelMargin: "10px",
        scrollable: false,
        scrollableHeight: "550px",
        placeholder: {
            value: "",
            text: ""
        }
    });


    



	  

})(jQuery);