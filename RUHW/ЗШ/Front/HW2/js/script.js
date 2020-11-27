$(function () {

	$(window).resize(function () {
		if ($(window).width() > 900) {
			$(".nav__bottom-section").slideDown(0);
		}
		else {
			$(".nav__bottom-section").slideUp(0);
		}
	});

	$(".nav__hamburger").on("click", function () {
		$(".nav__bottom-section").slideToggle();
	});

	$('.section-intro').owlCarousel({
    items:1,
		loop:true,
		nav:false,
	});

	$('.sponsors__box').owlCarousel({
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:false,
		responsive:{
			0:{
				items:1
			},
			400:{
				items:2
			},
			580:{
				items:3
			},
			820:{
				items:4
			},
			1000:{
				items:5,
				loop:false
			},
		}
	});
});