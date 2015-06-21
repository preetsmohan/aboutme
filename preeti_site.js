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
      $('.introtext').addClass('nav');
	  $('.navbar').slideDown(100);
	  
    } else if ($(window).scrollTop() == 0){
      $('.introtext').removeClass('nav');
	  $('.navbar').slideUp(100);
    }
	 if( $(window).scrollTop() > $('.filler2').offset().top){
	  $('#div1').slideDown(100);
	  
    } else if ($(window).scrollTop() < $('.filler2').offset().top){
	  $('#div1').slideUp(100);
    }
	 if( $(window).scrollTop() > $('.filler3').offset().top){
	  $('#div2').slideDown(100);
	  
    } else if ($(window).scrollTop() < $('.filler3').offset().top){
	  $('#div2').slideUp(100);
    }
	 if( $(window).scrollTop() > $('.filler4').offset().top){
	  $('#div3').slideDown(100);
	  
    } else if ($(window).scrollTop() < $('.filler4').offset().top){
	  $('#div3').slideUp(100);
    }
});