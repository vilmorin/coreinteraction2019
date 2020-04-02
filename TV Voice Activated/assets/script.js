document.addEventListener("DOMContentLoaded", initialize);

function initialize(){
  if (annyang) {
    var commands = {
      // explicit
      'channel one': iSaidHello,
      // single variable
      'channel two': greet,
      // splat
      'chanel three': iSaidHiToMultiplePeople,
      // optional command
      '(please) say hello to me': iSaidHello
    }

    annyang.addCommands(commands);

    annyang.start();

    annyang.addCallback('result', function(phrases) {
      document.getElementById('input_text').innerHTML = phrases;
    });
  }
}

function iSaidHello(){
  document.getElementById('channel1').style.opacity = '100%';
  document.getElementById('channel2').style.opacity = '0%';
  document.getElementById('channel3').style.opacity = '0%';

}

function greet(name){
  document.getElementById('channel1').style.opacity = '0%';
  document.getElementById('channel2').style.opacity = '100%';
  document.getElementById('channel3').style.opacity = '0%';
}

function iSaidHiToMultiplePeople(names){
  document.getElementById('channel1').style.opacity = '0%';
  document.getElementById('channel2').style.opacity = '0%';
  document.getElementById('channel3').style.opacity = '100%';
}