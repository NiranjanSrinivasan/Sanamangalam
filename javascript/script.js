$(document).ready(function () {

    $(window).scroll(function () {

        if ($(window).scrollTop() > 25) {

            $('nav').addClass('red');
        }
        else {
            $('nav').removeClass('red');
        }
    });
});
$('.nav-link').hover(function () {
    $(this).css("color", "red");
});

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

  
