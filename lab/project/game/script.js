$(document).ready(function(){

countdown();
var mail = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight",  "#a", "#b", "#c", "#d", "#e", "#f", "#g", "#h", "#i", "#j", "#k", "#l", "#m", "#n", "#o"]
// var points = 0;

	var timeLeft = 30;
    var elem = document.getElementById('points');
    var timerId = setInterval(countdown, 1000);
    
    var randomResult = Math.floor(Math.random() * 25);

    function countdown() {
    	var pointOptions = [];
      if (timeLeft == 0) {
        clearTimeout(timerId);
        // $("#popup").attr("display", "block")
        // document.getElementById('popup').style.display == "block";
        $( "#popup" ).toggle()
        var pointOptionsSum = pointOptions => pointOptions.reduce((a,b) => a + b, 0);
		document.getElementById('result').innerHTML = 'POINTS:' + randomResult;
      } else {
        document.getElementById('points').innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
        console.log(timeLeft);
        $(".shape").click(function() {
			pointOptions.push(1);
			console.log(pointOptions);
		});
      }
    }

	function beep() {
	  (new
		Audio("beep.mp3")).play();
	}



// $(".shape").click(function() {
// 	var pointOptions = [];
// 	pointOptions.push(10);
// 	 console.log(pointOptions);
// 	 var pointOptionsSum = pointOptions => pointOptions.reduce((a,b) => a + b, 0)
// 	 $("#points").text('POINTS:' + pointOptions)
// });

// $(document).ready(function() {
//     $("#my_audio").get(0).play();
// });


// function addNewClass(elem){ elem.className="newClass";

setInterval(function() {

	var randomIndex = Math.floor(Math.random() * mail.length);
	var randomHeight = Math.floor(Math.random() * 90);
	var randomSeconds = Math.floor(Math.random() * 5);
	var $randomMail = $(mail[randomIndex]);

// console.log($($randomMail).hasClass() === true)

		if ($($randomMail).hasClass('animate')){
				console.log("")
		} else {
			$randomMail.css({
				"top": randomHeight + "vh",
			}).addClass('animate');

			setTimeout(function() {
				$randomMail.removeClass('animate');
			}, 5000);
		}

},  300);



	// if ($(".shape").click(function(){
	// 			console.log("")
	// 	} else {
	// 		setTimeout(function() {
	// 			$randomMail.removeClass('animate');
	// 		}, 5000);
	// 	}

	
 //     if($(".shape").click(function() {
	// 		$randomMail.removeClass('animate'):
	// 		console.log(pointOptions);}) 

// ADD addClass
// CLICK



// setInterval(function() {
// 	var randomIndex = Math.floor(Math.random() * 14);
// 	var randomHeight = Math.floor(Math.random() * 90);
// 	var randomSeconds = Math.floor(Math.random() * 5);
// 	var $randomMail = $(envelopes[randomIndex]);

// 	$randomMail.css({
// 		"top": randomHeight + "vh",
// 	}).addClass('animate');

// 	setTimeout(function() {
// 		$randomMail.removeClass('animate');
// 	}, 4000);
// 	// index = index+1;
// }, 1000);

})








