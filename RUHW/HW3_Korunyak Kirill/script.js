$(function () {
  var delayForAnimation = 400;

  var buttons = $(document).find(".buttons button");
  var contentInners = $(document).find(".content div");
  var activeSlide = 0;
  $(contentInners).fadeOut(0);
  $(contentInners[0]).fadeIn(delayForAnimation);
  buttons.click(function (e) {
    $(".buttons").find(".active").removeClass("active");
    $(this).addClass("active");
    // Turn All article
    if ($(this).attr("id") == "all") {
      $(contentInners).fadeOut(delayForAnimation);
      setTimeout(() => {
        $(contentInners).fadeIn(delayForAnimation);
      }, delayForAnimation);
    }
    // Turn article by id
    else {
      $(contentInners).fadeOut(delayForAnimation);
      setTimeout(() => {
        $(contentInners[Number($(this).attr("id")) - 1]).fadeIn(
          delayForAnimation
        );
      }, delayForAnimation);
    }
  });
});
