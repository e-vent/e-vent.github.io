
var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "index/bg2.jpg",
    "index/bg3.jpg",
    "index/bg1.jpg",
    "index/bg1_2.jpg",
    "index/bg1_3.jpg",
    "logo/logovector1.svg",
    "logo/logovector2.svg",
    "logo/logovector3.svg",
    "common/down-arrow-v2.png",
)
//--><!]]>
