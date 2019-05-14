

// check if document is ready 
$(document).ready(function() {

var name = "Emiliano Flores"
var time = new Date();
var ticker = 0;
var ticker2 = 0; 
var colors = ["white", "#00ff00", "pink", "green"];

// change some html
$('#name').text(name);
$('#time').text(time);
$('#ticker').text(ticker);
$('#ticker2').text(ticker2);

//change some css
$('p').css("font-size", '22px')
$('p').css("color", 'white')

//create a function !!!
function getTime() {
    time = new Date();

    //change some html
    $('#name').text(name);
    $('#time').text(time);
    $('#ticker').text(ticker);
    $('#ticker2').text(ticker2);

    var rotate = 'rotate(' + ticker + 'deg)';
    $('#clock').css("transform", rotate);
    $('#clock').css("background-color", colors[ticker2]);


    
    ticker += 10;
    ticker += 1;

    if(ticker2 >= 4) {

        ticker2=0;
    }
}

getTime();

setInterval(function(){
    getTime();
},1000)

// end document ready function
})

