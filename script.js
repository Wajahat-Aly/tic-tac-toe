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

  let boxes=document.querySelectorAll("#boxes");
  let resetbtn=document.querySelector(".button-rest");

   let turn0=true;//player O

  let winingsptrn=[[0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row

  // Vertical lines
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column

  // Diagonal lines
  [0, 4, 8], // Top-left to bottom-right
  [2, 4, 6], // Top-right to bottom-left
];


boxes.forEach(boxes=>{
  boxes.addEventListener("click",()=>{ console.log("box Was clicked");
  if(turn0){
    boxes.innerText="Great";
    turn0=false;
  }
  else{
    boxes.innerText="Gretat";
    turn0=true;
  }
  
}
 
   
  )
})



});