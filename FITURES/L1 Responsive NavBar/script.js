$(".icon").on("click", function () {
	$("ul").slideToggle();
});

$(window).resize(function () {
	if ($(window).width() > 550) {
		$("ul").slideDown(0);
	}
	else {
		$("ul").slideUp(0);
	}
});