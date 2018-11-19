(function () {
const Img = ['index/Bg1.jpg', 'index/Bg1_2.jpg', 'index/bg1_3.jpg'];
const main = document.getElementsByTagName('main')[0];
let i = 0;
setInterval(function() {
main.style.background = 'url(' + Img[i] + ') no-repeat fixed center/cover';
i = (i + 1) % Img.length;
}, 8000);
})();
