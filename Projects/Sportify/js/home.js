$(function() {
  // Init Slider Intro ========
  initHomeSlider();

  function initHomeSlider() {
    if ($(".intro-slider").length) {
      var homeSlider = $(".intro-slider");
      // var homeContent = $('.home_content');
      homeSlider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1200,
        nav: false,
        dots: true
      });

      // homeSlider.on('changed.owl.carousel', function(event)
      // {
      // 	homeContent.removeClass('active');
      // 	var currentItem = $('.slide', homeSlider).eq(event.item.index);
      // 	var asd = currentItem.find('.home_content');
      // 	asd.addClass('active');
      // });
    }
  }
});
