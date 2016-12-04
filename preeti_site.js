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
}

$(window).scroll(function () {
    if( $(window).scrollTop() > $('.filler1').offset().top && !($('.introtext').hasClass('nav'))){
	  $('.navbar').slideDown(100);
	  
    } else if ($(window).scrollTop() == 0){
	  $('.navbar').slideUp(100);
    }

});

function isElementVisible(elementToBeChecked)
{
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $(elementToBeChecked).offset().top;
    var BotElement = TopElement + $(elementToBeChecked).height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}

$(window).on('scroll',function () {
	
	if( $("#aboutText").visible(true, true))
	{
		$('.nav').delay(400).removeClass("selected");
		$("#aboutNav").delay(400).addClass("selected");
	}
	if( $("#projectText").visible(true, true))
	{
		$('.nav').delay(400).removeClass("selected");
		$("#projNav").delay(400).addClass("selected");
	}

});

function scrollToTop(){
	 $('html, body').animate(
	 {scrollTop: 0}, 600);
	 
	$('.nav').removeClass("selected");
	 
};

function scrollToAbout(){
	 $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 600);
	$('.nav').delay(400).removeClass("selected");
	$("#aboutNav").delay(400).addClass("selected");
};

function scrollToProjects(){
	 $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 600);
	$('.nav').delay(400).removeClass("selected");
	$("#projNav").delay(400).addClass("selected");
};

function scrollToAcademics(){
	$('.nav').removeClass("selected");
	$("#projNav").addClass("selected");
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 400);
};

function scrollToSkills(){
	$('.nav').removeClass("selected");
	$("#projNav").addClass("selected");
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 400);
};

function scrollToContact(){
	$('.nav').removeClass("selected");
	$("#projNav").addClass("selected");
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 400);
};