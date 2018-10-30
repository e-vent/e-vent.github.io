$(document).ready(function() {
root=$("html");
$(window).scroll(function() {
if ($(this).scrollTop() > 190) {
root.addClass('nav-scrolled');
} else {
root.removeClass('nav-scrolled');
}
});
});