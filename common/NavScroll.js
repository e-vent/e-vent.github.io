function update() {
var root=$('html');
if (root.scrollTop() > 190) {
root.addClass('nav2');
} else {
root.removeClass('nav2');
}
}
$(function() {
$(window).scroll(update);
update()
});
