$(document).ready(function() {
$(window).scroll(function() {
if ($(this).scrollTop() > 190) {
$('nav').css({'height':"41px",'background-color':"white",'color':"black"});
$('#MainLogo').css({'opacity':1});
} else {
$('nav').css({'height':'56px','background-color':"transparent",'color':'white'});
$('#MainLogo').css({'opacity':0});
}
});
});
