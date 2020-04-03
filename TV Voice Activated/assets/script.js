document.addEventListener("DOMContentLoaded", initialize);

function initialize(){
  if (annyang) {
    var commands = {
      // explicit
      'channel one': iSaidHello,
      // single variable
      'channel two': greet,
      // splat
      'channel three': iSaidHiToMultiplePeople,
      // optional command
      'channel four': channelFour,

	  'channel 5': channelFive,
    }

    annyang.addCommands(commands);

    annyang.start();

    annyang.addCallback('result', function(phrases) {
      document.getElementById('input_text').innerHTML = phrases;
    });
  }
}

function iSaidHello(){

  document.getElementById('channel1').style.display = 'block';
  document.getElementById('channel1').play();
  document.getElementById('channel2').style.display = 'none';
  document.getElementById('channel3').style.display = 'none';
  document.getElementById('channel4').style.display = 'none';
  document.getElementById('channel5').style.display = 'none';
}

function greet(name){

  document.getElementById('channel1').style.display = 'none';
  document.getElementById('channel2').style.display = 'block';
  document.getElementById('channel2').play();
  document.getElementById('channel3').style.display = 'none';
  document.getElementById('channel4').style.display = 'none';
  document.getElementById('channel5').style.display = 'none';
}

function iSaidHiToMultiplePeople(names){

  document.getElementById('channel1').style.display = 'none';
  document.getElementById('channel2').style.display = 'none';
  document.getElementById('channel3').style.display = 'block';
  document.getElementById('channel3').play();
  document.getElementById('channel4').style.display = 'none';
  document.getElementById('channel5').style.display = 'none';
}

function channelFour(){

  document.getElementById('channel1').style.display = 'none';
  document.getElementById('channel1').play();
  document.getElementById('channel2').style.display = 'none';
  document.getElementById('channel3').style.display = 'none';
  document.getElementById('channel4').style.display = 'block';
  document.getElementById('channel5').style.display = 'none';
}

function channelFive(){

  document.getElementById('channel1').style.display = 'none';
  document.getElementById('channel1').play();
  document.getElementById('channel2').style.display = 'none';
  document.getElementById('channel3').style.display = 'none';
  document.getElementById('channel4').style.display = 'none';
  document.getElementById('channel5').style.display = 'block';
}



