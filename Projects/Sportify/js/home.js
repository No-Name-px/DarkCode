$(function() {
  // Init Slider Intro ========
  initHomeSlider();
  initClassesSlider();
  initPricingSlider();

  function initHomeSlider() {
    if ($(".intro-slider")) {
      var homeSlider = $(".intro-slider");
      homeSlider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1200,
        nav: false,
        dots: true
      });
    }
  }

  function initClassesSlider() {
    if ($(".classes-slider")) {
      var classesSlider = $(".classes-slider");

      classesSlider.owlCarousel({
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          760: {
            items: 2
          },
          991: {
            items: 3
          }
        },
        loop: true,
        autoplay: true,
        smartSpeed: 600,
        nav: false,
        dots: false,
        margin: 20
      });
    }
  }
  function initPricingSlider() {
    if ($(".pricing-slider")) {
      var pricingSlider = $(".pricing-slider");

      pricingSlider.owlCarousel({
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          },
          760: {
            items: 2
          },
          991: {
            items: 3
          }
        },
        loop: false,
        autoplay: true,
        smartSpeed: 600,
        nav: false,
        dots: false,
        margin: 20
      });
    }
  }
});
