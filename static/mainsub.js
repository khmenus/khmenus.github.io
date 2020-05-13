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

var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 120,
    height: 120,
    colorDark: "#ffffff",
    colorLight: "#2e2e2e",
});

function makeCode () {
    var elText = document.getElementById("diner");
    qrcode.makeCode(elText.value);
}

makeCode();