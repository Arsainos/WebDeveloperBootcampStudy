var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var display = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
};

function setupModeButtons(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons.forEach(function(element){
                element.classList.remove("selected");
            });
            this.classList.add("selected");
            
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }
};

function setupSquares(){
    for(var i=0; i<squares.length;i++)
    {
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColor(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }  
        });
    }
};

function reset(){
    colors = generateRandomColors(numberOfSquares);
   pickedColor = pickColor();
   display.textContent = pickedColor;
   messageDisplay.textContent = "";
   resetButton.textContent = "New colors";
   for(var i=0;i<squares.length;i++)
   {
       if(colors[i])
       {
           squares[i].style.display = "block";
           squares[i].style.background = colors[i];
       } else {
           squares[i].style.display = "none";
       }
   }
   h1.style.background = "steelblue";
};

resetButton.addEventListener("click",function(){
   reset();
});

function changeColor(color){
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    var arr = [];

    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", "+ g + ", " + b + ")";
}