$(document).ready(function() {
$(window).scroll(function() {
if ($(this).scrollTop() > 200) {
$('nav').css({'height':"41px",'background-color':"white",'color':"black","box-shadow":"-1px 3px 10px 1px rgba(143,141,143,0.6)"});
$('#MainLogo').css({'opacity':1});
$("nav span").css({"font-size":"17px","color":"black"})
$("nav>li>div").css({"background-color":"#F9F9F9"})
$("#logo").css({"opacity":"0"})
$("#nav-j>span").css({"color":"white"})
$("#nav-j").css({"background-color":"#A1A5FF"})
$("nav>li>div>a").hover(function() {
    $(this).css({"background-color":"gray","color":"black"})
});
//$("nav>li>div>a").css({"color":"white"})
} else {
$('nav').css({'height':'56px','background-color':"transparent",'color':'white',"box-shadow":"none"});
$('#MainLogo').css({'opacity':0});
$("nav span").css({"font-size":"19px","color":"white"})
$("nav>li>div").css({"background-color":"lightgrey"})
//$("nav>li>div>a:hover").css({"color":"purple"})
$("#nav-j>span").css({"color":"#A1A5FF","background-color":"none"})
$("#logo").css({"opacity":"1"})
$("#nav-j").css({"background-color":"transparent"})
$("nav>li>div>a").hover(function() {
    $(this).css({"background-color":"transparent","color":"red"})
});
}
});
});
