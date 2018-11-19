(function () {
const root = document.documentElement;
function update() {
if (root.scrollTop > 190) {
root.classList.add('nav2');
} else {
root.classList.remove('nav2');
}
}
const main = document.getElementsByTagName('main')[0];
main.classList.add('nav3');
update();
window.addEventListener('scroll', update);
})();
