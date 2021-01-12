$(function () {

	startAccordion(".accordion__content");

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

	$(".accordion__header").click(function (e) { 
		$(this).parent().find(".accordion__content").slideToggle();
		if($(this).parent().hasClass("active")){
			$(this).parent().removeClass("active");
		} else{
			$(this).parent().addClass("active");
		}
	});

	$('.section-intro').owlCarousel({
    items:1,
		loop:true,
		nav:false,
	});
	$('.section-blog__blog').owlCarousel({
    items:1,
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		responsive:{
			0:{
				dots:false,
				nav:false
			},
			500:{
				dots:true,
				nav:true
			}
		}
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

	$('.section-quotes__comments').owlCarousel({
    items:1,
		loop:true,
		nav:false,
	});

});

function startAccordion(tag){
	$(tag).slideToggle();
	$(".active > "+ tag).slideToggle();
}