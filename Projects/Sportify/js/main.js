/* 

MAIN.js
1)Open menu
2)Close menu

*/

$(function() {
  if ($(".humburger") && $(".menu-close")) {
    var menu = $(".menu");
    var hamburger = $(".hamburger");
    var close = $(".menu-close");
    var door = $(".menu-door");
    var menuContent = $(".menu-content");
    var navMenuItems = $(".menu-nav ul li");

    // OPEN MENU

    $(hamburger).on("click", function() {
      TweenMax.to(menu, 0, {
        visibility: "visible"
      });
      TweenMax.to(door, 1, {
        width: "50%"
      });
      TweenMax.to(menuContent, 1, {
        opacity: 1,
        delay: 0.5
      });
      TweenMax.staggerFromTo(
        navMenuItems,
        1,
        {
          y: 10,
          opacity: 0,
          ease: Power2.easeInOut
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.2
        },
        0.1
      );
    });

    // CLOSE THE MENU

    $(close).on("click", function() {
      TweenMax.to(menuContent, 0.4, {
        opacity: 0
      });
      TweenMax.to(door, 0.5, {
        width: "0%",
        delay: 0.4
      });
      TweenMax.to(menu, 0, {
        visibility: "hidden",
        delay: 0.9
      });
    });
  }
});
