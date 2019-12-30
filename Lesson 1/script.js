$(document).ready(function () {

	var bg;

	$("body").keypress(function (e) { 
			alert(e.which);
	});

	$("button").on('click', function () {
		alert('lol');
	});

	$(".area").on({
		mouseenter: function(){
			bg = $(this).css("background-color");
			$(this).css("background-color", "orange");
		},
		mouseleave: function(){
			$(this).css("background-color", bg);
		}
	});

	$("input").on("change", function(){
		$(".area").text($(this).val());
	});
	
});