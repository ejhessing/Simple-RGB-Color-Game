var mode = 6,  //Start the game on Medium Mode
    colors = [], // The array that holds all the colors
    chosenColor, //The color the Play has to guess 
    h1 = document.querySelector("h1"),
    resetButton = document.querySelector("#reset"),
    squares = document.querySelectorAll(".square"),
    container = document.getElementById("container"),
    messageDisplay = document.getElementById("message"),
    colorDisplay = document.getElementById("colorDisplay"),
    gameModeButtons = document.querySelectorAll(".gameMode");


init(); 

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons () {
  //Game Mode button Event Listeners
  for(var i = 0; i< gameModeButtons.length; i++){

    gameModeButtons[i].addEventListener("click", function(){
      //remove selected class from the different game modes
      gameModeButtons[0].classList.remove("selected"); 
      gameModeButtons[1].classList.remove("selected");
      gameModeButtons[2].classList.remove("selected");  
      //Add selected class to the game mode chosen
      this.classList.add("selected");
      if(this.textContent === "Easy"){
        mode = 3;
      } else if (this.textContent === "Medium"){
        mode = 6;
      } else {
        mode = 9;
      } 
      reset();
    });
  }
}


function setUpSquares () {
  for(var i =0 ; i < squares.length ; i++ ){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of picked square
      var clickedSquare = this.style.background;
      //compare color tchosen
      if(clickedSquare === chosenColor){
          gameWon(clickedSquare);
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
        messageDisplay.style.color = "#ff0000";
      }
    });
  } 
}


//Reset's everything back to original with new colors
function reset() {
  //Creates random Colors 
  colors = randomColor(mode);
  //change background of h1
  h1.style.background = "steelblue";
  //change message to nothing again
  messageDisplay.textContent = " " ;
  //reset button to New Game
  resetButton.textContent = "New Colours";
  //Pick a new random color
  chosenColor = pickColor();
  //change colorDisplay to match new picked color
  colorDisplay.textContent = chosenColor;
  //Change colors of squares on the page
  for(var i =0 ; i < squares.length ; i++ ){
    if(colors[i]){
      //Makes sure all squares that need to be displayed if player changes Game Mode
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }
}

//Event Handler for when the player clicks New Game or Play Again
resetButton.addEventListener("click" , function(){
  reset();
});

//When the player picks the right Square 
function gameWon (color) {
  for(var i =0 ; i < squares.length ; i++ ){
      squares[i].style.background = color;
  }
  messageDisplay.textContent = "Well Done!";
  messageDisplay.style.color = "#266A2E";
  h1.style.background = color;
  resetButton.textContent = "Play Again?";
}

// Chooses a random number from our colors array to be the Chosen Color
function pickColor () {
  var number = Math.floor(Math.random() * colors.length );
  console.log(number);
  return colors[number];
}

//makes a random color
function randomColor (num) {
  var arr = [];
  for(var i = 0 ; i < num ; i++ ){
    arr[i] = "rgb("+ randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")"  
  }
  return arr;
}

//Returns a random Number from 0 - 255
function randomNumber() {
  return Math.floor(Math.random() * 256);
}


//Hint 



//Click hint Button
$("#hint").click(function(){
  //Show or hide color select 
  changeColor();
  $("#colorSelect").toggle();

});

//When color sliders change 
$("input[type=range").change(changeColor);

//update the new hint display
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

  $('#display').css("background-color","rgb(" + r + "," + g + "," + b + ")" );
}


//Click How To Play Button
$("#h2p").click(function(){
  $("#howToPlay").toggle();

});