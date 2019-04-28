var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons listeners
    setUpModeBtns();

    setUpSquares();
}

function setUpModeBtns(){
    for (var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function () {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        // add click listener to squares 
        squares[i].addEventListener("click", function () {
            //grab color pf clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            console.log(clickedColor, pickedColor);
            if (clickedColor === pickedColor) {
                resetBtn.textContent = "Play Again?";
                messageDisplay.textContent = "Correct!!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });

        reset();
    }
}

// easyBtn.addEventListener("click", function () {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numOfSquares = 3;

//     colors = generateRandomColor(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(var i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function() {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numOfSquares = 6;

//     colors = generateRandomColor(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

// colorDisplay.textContent = pickedColor;



resetBtn.addEventListener("click", reset);


function changeColors(color) {
    // loop through all squares
    squares.forEach(element => {
        // change each color to match given color
        element.style.backgroundColor = color;
    });
}

function pickColor() {
    var random = Math.floor((Math.random() * 10) % colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    //make an array 
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());

    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255 
    var r = Math.floor((Math.random() * 1000) % 256);

    //pick a "green" from 0 - 255 
    var g = Math.floor((Math.random() * 1000) % 256);

    //pick a "blue" from 0 - 255 
    var b = Math.floor((Math.random() * 1000) % 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}

function reset() {
    // generate all new colors
    colors = generateRandomColor(numOfSquares);

    //pick a new random color from array
    pickedColor = pickColor();

    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";

    //change color display to match picked color
    colorDisplay.textContent = pickedColor;

    //change color of squares
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
   
}