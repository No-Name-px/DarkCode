$(function () {
  var procentOfScroll;
  $(document).scroll(function () {
    procentOfScroll = $(window).scrollTop() / screen.height;
    // показ section 1
    if (procentOfScroll < 0.25) {
      $("section#1").css("opacity", "1");
    }
    // исчезновение section 1
    else if (procentOfScroll > 0.25 && procentOfScroll <= 0.5) {
      $("section#1").css(
        "opacity",
        (-1 * ((procentOfScroll - 0.25) * 4 - 1)).toString(10)
      );
    } else if (procentOfScroll > 0.5) {
      $("section#1").css("opacity", "0");
    }
    // появление section 2
    if (procentOfScroll < 0.5) {
      $("section#2").css("opacity", "0");
    } else if (procentOfScroll > 0.5 && procentOfScroll <= 0.75) {
      $("section#2").css("opacity", ((procentOfScroll - 0.5) * 4).toString(10));
    } else if (procentOfScroll > 0.75 && procentOfScroll <= 1.25) {
      $("section#2").css("opacity", "1");
    }
    // исчезновение section 2
    else if (procentOfScroll > 1.25 && procentOfScroll <= 1.5) {
      $("section#2").css(
        "opacity",
        (-1 * ((procentOfScroll - 1.25) * 4 - 1)).toString(10)
      );
    } else if (procentOfScroll > 1.5) {
      $("section#2").css("opacity", "0");
    }
    // появление section 3
    if (procentOfScroll < 1.5) {
      $("section#3").css("opacity", "0");
    } else if (procentOfScroll > 1.5 && procentOfScroll <= 1.75) {
      $("section#3").css(
        "opacity",
        ((procentOfScroll - 1 - 0.5) * 4).toString(10)
      );
    } else if (procentOfScroll > 1.75 && procentOfScroll <= 2.25) {
      $("section#3").css("opacity", "1");
    }
    console.log(procentOfScroll);
  });
});
