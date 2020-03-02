$(function() {
  // SLIDER

  if ($(".intro-slider")) {
    let slidesWrapper = $(".slides-wrapper");
    let slides = slidesWrapper.children(".slide-item");

    let activeNumber = 0;

    let controllerPoints = $(".intro-slider .controller-item");

    setInterval(function changeSlide() {
      if (activeNumber >= slides.length - 1) {
        activeNumber = 0;
        $(controllerPoints[controllerPoints.length - 1]).removeClass("active");
        $(controllerPoints[activeNumber]).addClass("active");
      } else {
        activeNumber++;
        $(controllerPoints[activeNumber - 1]).removeClass("active");
        $(controllerPoints[activeNumber]).addClass("active");
      }

      slidesWrapper.css("transform", `translateX(${activeNumber * -100}%)`);
    }, 4000);

    $(controllerPoints).on("click", function() {
      for (let i = 0; i < controllerPoints.length; i++) {
        if (controllerPoints[i] === this) {
          activeNumber = i;
          $(".intro-slider .controller-item.active").removeClass("active");
          $(controllerPoints[activeNumber]).addClass("active");
          slidesWrapper.css("transform", `translateX(${activeNumber * -100}%)`);
        }
      }
    });
  }
});
