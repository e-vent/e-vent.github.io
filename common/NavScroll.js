function update() {
root=$("html");
if (root.scrollTop() > 190) {
root.addClass('nav2');
} else {
root.removeClass('nav2');
}
}
$(document).ready(function() {
$(window).scroll(update);
update()
});