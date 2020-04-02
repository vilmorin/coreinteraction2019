document.addEventListener("DOMContentLoaded", initialize);

function initialize(){
  if (annyang) {
    var commands = {
      // explicit
      'triangle': iSaidHello,
      // single variable
      'square': greet,
      // splat
      'circle': iSaidHiToMultiplePeople,
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
  document.getElementById('triangle').style.opacity = '100%';
  document.getElementById('square').style.opacity = '0%';
  document.getElementById('circle').style.opacity = '0%';

}

function greet(name){
  document.getElementById('triangle').style.opacity = '0%';
  document.getElementById('square').style.opacity = '100%';
  document.getElementById('circle').style.opacity = '0%';
}

function iSaidHiToMultiplePeople(names){
  document.getElementById('triangle').style.opacity = '0%';
  document.getElementById('square').style.opacity = '0%';
  document.getElementById('circle').style.opacity = '100%';
}