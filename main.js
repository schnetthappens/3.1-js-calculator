(function(){
  'use strict';

//Variables

var $display = document.querySelector('.display-number');

//listen for number press
//execute some code when a number is pressed
//create a variable to store the pressed number
//update the page to display the the pressed number


//Event handlers

function numberButtonPressed(event) {
  var number = Number(event.target.textContent);
  $display.textContent = number;
}




//Event listeners

[].forEach.call(document.querySelectorAll(".keypad-button.number"), function (element) {
  element.addEventListener('click', numberButtonPressed);
}, false);



})();
