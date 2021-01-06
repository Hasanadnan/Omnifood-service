$(document).ready(function() {
    

    //sticky nav plugin mane: waypoint

	$('.js--section-fecture').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass('sticky');

		} else {
			$('nav').removeClass('sticky');

		}
	 }, {
          offset: '60px;'
    });

	

	//Scroll on button

	$('.js--scroll-to-plan').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-plans')
			.offset().top}, 1000);

	});

    $('.js--scroll-to-start').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-fecture')
			.offset().top}, 1000);

	});

	//food delivery

	$(function() {

	$('a[href^="#"]').click(function() {

	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);

	return false;

    });

  });

  //Animation odf scroll

  $('.js--waypoint-1').waypoint(function(direction) {
  	$('.js--waypoint-1').addClass('animated fadeIn');

  }, {
          offset: '50%'
    });

  //mobile-nav 

  $('.js--nav-icon').click(function() {
  	var nav = $('.js--main-nav');
  	var icon = $('.js--nav-icon i');

  	nav.slideToggle(200);

  	if (icon.hasClass('ion-navicon'))
  	 {
  		icon.addClass('ion-close-round');
  		icon.removeClass('ion-navicon');
  	 } 
  	else {
  		icon.addClass('ion-navicon');
  		icon.removeClass('ion-close-round');
  	}

  });


   

});