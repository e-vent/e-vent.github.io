$(document).ready(function() {
    $(window).scroll(function() {
    if ($(this).scrollTop() > 240) {
    $('topnav').css('height', "56px");
    } else {
    $('topnav').css('height', "41px");
    }
    });
    });
