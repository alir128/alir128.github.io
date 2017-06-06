var numSquares = 6;
var colors = randomColorArray(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = gencolor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;
var resetButton = document.getElementById("newColor");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected")
    numSquares = 3;
    colors = randomColorArray(numSquares);
    pickedColor= gencolor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected")
    numSquares = 6;
    colors = randomColorArray(numSquares);
    pickedColor= gencolor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
        squares[i].style.display = "block"
    }
})

resetButton.addEventListener("click", function(){
    colors = randomColorArray(numSquares);
    pickedColor = gencolor();
    resetButton.textContent = "New Game";
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = ""
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
})
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent= "Correct!";
            resetButton.textContent = "Play Again!";
            h1.style.backgroundColor = pickedColor;
            for(var j = 0; j < colors.length; j++){
                squares[j].style.backgroundColor= pickedColor
            }
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!"
        }
    })
}

function gencolor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomColorArray(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b +")"
}