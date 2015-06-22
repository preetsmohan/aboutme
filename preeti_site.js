/*
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});
*/

window.onload = function(){
	$('.navbar').hide();
	$('.div1').hide();
	$('.div2').hide();
	$('.div3').hide();
	$('.div4').hide();
}

$(window).scroll(function () {
    if( $(window).scrollTop() > $('.filler1').offset().top && !($('.introtext').hasClass('nav'))){
	  $('.navbar').slideDown(100);
	  
    } else if ($(window).scrollTop() == 0){
	  $('.navbar').slideUp(100);
    }

});

function scrollToAbout(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 400);
};