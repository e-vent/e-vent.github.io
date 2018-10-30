function update() {
root=$("html");
if (root.scrollTop() > 190) {
root.addClass('nav-scrolled');
} else {
root.removeClass('nav-scrolled');
}
}
$(document).ready(function() {
$(window).scroll(update);
update()
});