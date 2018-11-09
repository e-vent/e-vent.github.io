const root = $('html');
function update() {
if (root.scrollTop() > 190) {
root.addClass('nav2');
} else {
root.removeClass('nav2');
}
}
const main = $('main');
$(function() {
main.addClass('nav3');
update();
$(window).scroll(update);
});
