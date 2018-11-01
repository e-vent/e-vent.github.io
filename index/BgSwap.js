$(window).ready(function() { 
    var hero = document.getElementById("hero");
    $(hero).hide().fadeIn(2000);
});  
var i = 0;
setInterval(function() {
    var hero = document.getElementById("hero");
    var Img =["index/Bg1.jpg","index/bg1_2.jpg","index/bg1_3.jpg"];
    hero.style.background = "url(" + Img[i] + ") no-repeat fixed center/cover";
    i = i + 1;
    if (i == Img.length) {
    i =  0;
      }
}, 10000);
