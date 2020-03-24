/* 

MAIN.js
1)Open menu
2)Close menu

*/

$(function() {
  // MENU ===================================
  if ($(".humburger") && $(".menu-close")) {
    let menu = $(".menu");
    let hamburger = $(".hamburger");
    let close = $(".menu-close");
    let door = $(".menu-door");
    let menuContent = $(".menu-content");
    let navMenuItems = $(".menu-nav ul li");

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

  // SCROLL MENU

  if ($(".fixed-header")) {
    let fixedHeader = $(".fixed-header");

    $(window).scroll(function() {
      if ($(this).scrollTop() > 140) {
        fixedHeader.css("top", "0px");
      } else {
        fixedHeader.css("top", "-80px");
      }
    });
  }
});
