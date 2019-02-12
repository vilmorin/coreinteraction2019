var btn2 = document.getElementById("button2");

var count=0;
var beep= new Audio("images/beep.mov");
btn2.addEventListener("click",function(){
	count++;
	beep.play();
	console.log(count);
	if (count==5){
		window.location.href = "journey5.html";
	}
});

