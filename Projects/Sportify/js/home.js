$(function() {
  // Init Slider Intro =========
  initInfSlider("intro", 4000, 1);

  // Init Slider ==================================

  function initInfSlider(slider, interval, slidesPerPage) {
    let sliderName = "." + slider + "-slider";
    let slidesWrapper = $(sliderName + " .slides-wrapper");
    let slides = $(sliderName + " .slide");

    let activeNumber = 0;

    let controllerPoints = $(
      sliderName + " .slider-controller .controller-item"
    );

    for (let i = 0; i < slides.length; i++) {
      if (i <= slidesPerPage) {
        $(slides[i]).addClass("active");
      }
    }

    setInterval(function changeSlide() {
      if (controllerPoints) {
        for (let i = 0; i < slidesPerPage; i++) {
          $(controllerPoints[(activeNumber + i) % slides.length]).removeClass(
            "active"
          );
          $(slides[(activeNumber + i) % slides.length]).removeClass("active");
        }

        if (activeNumber >= slides.length - 1 - (slidesPerPage - 1)) {
          activeNumber = 0;
        } else {
          activeNumber++;
        }

        for (let i = 0; i < slidesPerPage; i++) {
          $(controllerPoints[(activeNumber + i) % slides.length]).addClass(
            "active"
          );
          $(slides[(activeNumber + i) % slides.length]).addClass("active");
        }
      } else {
        $(slides[activeNumber]).removeClass("active");

        if (activeNumber >= slides.length - 1) {
          activeNumber = 0;
        } else {
          activeNumber++;
        }

        $(slides[activeNumber]).addClass("active");
      }

      slidesWrapper.css(
        "transform",
        `translateX(${activeNumber * -(100 / slidesPerPage)}%)`
      );
    }, interval);

    if (controllerPoints) {
      $(controllerPoints).on("click", function() {
        for (let i = 0; i < controllerPoints.length; i++) {
          if (controllerPoints[i] === this) {
            $(controllerPoints[activeNumber]).removeClass("active");
            $(slides[activeNumber]).removeClass("active");
            activeNumber = i;
            $(controllerPoints[activeNumber]).addClass("active");
            $(slides[activeNumber]).addClass("active");
            slidesWrapper.css(
              "transform",
              `translateX(${activeNumber * -100}%)`
            );
          }
        }
      });
    }
  }
});
