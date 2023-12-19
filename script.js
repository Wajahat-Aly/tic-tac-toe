document.addEventListener("DOMContentLoaded", function() {
const intinalscreen=document.getElementById("intinalscreen");
const playButton=document.getElementById("playButton");
const gamescreen=document.getElementById("gamescreen");

playButton.addEventListener("click", function(){


    intinalscreen.style.display="none";
    gamescreen.style.display="block";


});

function initializeTicTacToe() {
    // Your game logic implementation here
  }

});