const Img = ["index/Bg1.jpg", "index/Bg1_2.jpg", "index/bg1_3.jpg"];
const hero = document.getElementById("hero");
let i = 0;
setInterval(function() {
hero.style.background = "url(" + Img[i] + ") no-repeat fixed center/cover";
i = (i + 1) % Img.length;
}, 2000);
