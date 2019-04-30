$(document).ready(function(){


var mail = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine", "#ten", "#eleven", "#twelve", "#thirteen", "#fourteen", "#fifteen", "#a", "#b", "#c", "#d", "#e", "#f", "#g", "#h", "#i", "#j", "#k", "#l", "#m", "#n", "#o"]

// var index = 0;
// $(mail[randomArray]).css({"top": randomHeight + 'vh'})

setInterval(function() {

	var randomIndex = Math.floor(Math.random() * mail.length);
	var randomHeight = Math.floor(Math.random() * 90);
	var randomSeconds = Math.floor(Math.random() * 5);
	var $randomMail = $(mail[randomIndex]);

console.log($($randomMail).hasClass() === true)
		if ($($randomMail).hasClass('animate')){
				console.log("")
		} else {
			$randomMail.css({
				"top": randomHeight + "vh",
			}).addClass('animate');

			setTimeout(function() {
				$randomMail.removeClass('animate');
			}, 4000);
		}


}, 1000);




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








