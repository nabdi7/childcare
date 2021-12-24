;

(function () {
  // Menu settings
  $('#menuToggle, .menu-close').on('click', function () {
    $('#menuToggle').toggleClass('active');
    $('body').toggleClass('body-push-toleft');
    $('#menu').toggleClass('menu-open');
  });
  var scroll = new SmoothScroll('a[href*="#"]');
})(jQuery);