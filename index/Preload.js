(function () {
let images = [];
function preload() {
for (let i = 0; i < preload.arguments.length; i++) {
images[i] = new Image();
images[i].src = preload.arguments[i];
}
}
preload(
"index/Bg2.jpg",
"index/Bg3.jpg",
"index/Bg1.jpg",
"index/Bg1_2.jpg",
"index/bg1_3.jpg",
"logo/logovector1.svg",
"logo/logovector2.svg",
"logo/logovector3.svg",
"common/down-arrow-v2.png",
);
})();
