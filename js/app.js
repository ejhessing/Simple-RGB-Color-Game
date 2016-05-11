var colors = random(mode);
  
  
  var squares = document.querySelectorAll(".square");
  var colorDisplay = document.getElementById("colorDisplay");
  var messageDisplay = document.getElementById("message");
  var mode = 6;
  var pickedColor = pickColor();
  var h1 = document.querySelector("h1");
  var hasWon ;
  var resetButton = document.querySelector("#reset");
  var easyBtn = document.querySelector(".easy");
  var hardBtn = document.querySelector(".hard");

  resetButton.addEventListener("click", function(){
    // Generate new colors
    colors = random(mode);
    //change background of h1
    h1.style.background = ("#232323");
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
    //add initial colors to squares
      squares[i].style.background = colors[i];
    }
  });
  
  colorDisplay.textContent = pickedColor;
  
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

easyBtn.addEventListener("click",function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  mode = 3;
  colors = random(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click",function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  mode = 6;
  colors = random(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0;i<squares.length;i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";

  }
});