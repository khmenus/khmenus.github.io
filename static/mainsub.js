// preloader 
$(window).load(function() {
      $("#status").fadeOut();
      $("#preloader").delay(100).fadeOut("fast");
      $("body").delay(100).css({overflow: "visible"});
});

$(function() {
    $('.navbar-nav>li>a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
});