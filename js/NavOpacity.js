$(document).ready(function() {
$(window).scroll(function() {
if ($(this).scrollTop() > 190) {
$('nav').css({'height':"41px",'background-color':"white",'color':"black","box-shadow":"-1px 3px 10px 1px rgba(143,141,143,0.6)"});
$('#MainLogo').css({'opacity':1});
$("nav span").css({"font-size":"17px","color":"black"})
$("#logo").css({"opacity":"0"})
$("#nav-j>span").css({"color":"white"})
$("#nav-j").css({"background-color":"#A1A5FF"})
//$("nav>li>a").hover(function(){
  //  $(this).css("color", "#7C7FC1");
    //}, function(){
    //$(this).css("color", "black");
//});
} else {
$('nav').css({'height':'56px','background-color':"transparent",'color':'white',"box-shadow":"none"});
$('#MainLogo').css({'opacity':0});
$("#logo").css({"opacity":"1"})
$("nav span").css({"font-size":"19px","color":"white"})
$("#nav-j>span").css({"color":"#A1A5FF","background-color":"transparent"})
$("#nav-j").css({"background-color":"transparent"})
//$("nav>li>a").hover(function(){
  //  $(this).css("color", "#7C7FC1");
    //}, function(){
   // $(this).css("color", "white");
//});
}
});
});
