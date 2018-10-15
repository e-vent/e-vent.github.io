$(window).on('scroll', function () {
var pixs = $(document).scrollTop()
pixs = pixs / 100;
$("#hero").css({"filter": "blur("+pixs+"px)" })
});