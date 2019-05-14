$(document).ready(function(){

	var shapeWidth = $('.shape').width();
	//get document size
	var width = $(document).width() - shapeWidth;
	var height = $(document).height() - shapeWidth;

	// speed and direction of animation
	var speedX = 4;
	var speedY = 4;

	// variables to move css
	var positionLeft = 0;
	var positionTop = 0;

	//60 frames per second
	function step(timestamp) {
		//update css variable
		positionLeft += speedX;
		positionTop += speedY;

		//change speed and direction variable if the ball hits the edge of screen
		if( positionLeft > width ){
			speedX = speedX * -1;
		}

		if ( positionLeft < 0 ){
			speedX = speedX * -1;
		}

		if ( positionTop > height ){
			speedY = speedY * -1;
		}

		if ( positionTop < 0 ){
			speedY = speedY * -1;
		}

	//edit css
	$('.shape').css("left", positionLeft)
	$('.shape').css("top", positionTop)

	window.requestAnimationFrame(step);

	}
	window.requestAnimationFrame(step);

//end document ready function
})
