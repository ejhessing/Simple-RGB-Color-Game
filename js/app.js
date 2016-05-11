  var colors = [];
  var mode = 6;
  var pickedColor ;
  var h1 = document.querySelector("h1");
  var resetButton = document.querySelector("#reset");
  var gameModeButtons = document.querySelectorAll(".gameMode");
  var squares = document.querySelectorAll(".square");
  var colorDisplay = document.getElementById("colorDisplay");
  var messageDisplay = document.getElementById("message");

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
        this.classList.add("selected");
        this.textContent === "Easy" ? mode = 3: mode = 6;
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
        var pickedSquare = this.style.background;
        //compare color to our pickedColor
        if(pickedSquare === pickedColor){
            changeColors(pickedSquare);
            messageDisplay.textContent = "Well Done!";
            h1.style.background = pickedSquare;
            resetButton.textContent = "Play Again ?";
        } else {
          this.style.background = "#232323";
          messageDisplay.textContent = "Try Again";
        }
      });
    } 
  }

  function reset() {
    colors = random(mode);
    //change background of h1
    h1.style.background = "steelblue";
    //change message to nothing again
    messageDisplay.textContent = " " ;
    //reset button to New Game
    resetButton.textContent = "New Colours";
    //Pick a new random color
    pickedColor = pickColor();
    //change colorDisplay to match new picked color
    colorDisplay.textContent = pickedColor;
    //Change colors of squares on the page
    for(var i =0 ; i < squares.length ; i++ ){
      if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
      } else {
        squares[i].style.display = "none";
      }

    }
  }

  resetButton.addEventListener("click" , function(){
     reset();
  });

function changeColors (color) {
  for(var i =0 ; i < squares.length ; i++ ){
      squares[i].style.background = color;
  }
}

function pickColor () {
  var number = Math.floor(Math.random() * colors.length );
  console.log(number);
  return colors[number];
}

function random (num) {
  //makes a random color
  var arr = [];
  for(var i = 0 ; i < num ; i++ ){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    arr[i] = "rgb("+ r + ", " + g + ", " + b + ")"  

  }
  return arr;
}

