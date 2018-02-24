var numOfSquares = 6; // sets number of squares to be equal to six at the begginng

var colors = []; // sets colors to an empty array

var pickedColor; // sets the color that needs to be clicked on to an empty variable

var squares = document.querySelectorAll(".square"); // sets the variable squares to the class of "squares"

var colorDisplay = document.getElementById("colorDisplay"); // sets the variable colorDisplay to the id "colorDisplay" which is the RGB number at the top

var messageDisplay = document.querySelector("#message"); // sets the variable message to the span which will hold "Correct!" or "Try Again"

var h1 = document.querySelector("h1"); // sets the variable h1 to the only h1 in the html code (The Great Color Game)

var resetButton = document.querySelector("#reset"); // sets the variable resetButton to the button with the id of reset

var modeButtons = document.querySelectorAll(".mode"); // sets the variable modeButtons to the buttons with the class of mode

init(); // sets up everything

resetButton.addEventListener("click", function(){ // adds an event listener for resetButton
	reset(); // resets everything
});



function init(){ // declares the function init with no arguments
	reset(); // resets everything

	setUpModeButtons(); // sets up the mode buttons

	setUpSquares(); // sets up the color squares
}

function setUpSquares(){ // declares the function setUpSquares with no arguments
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}

			else {
				this.style.backgroundColor = "black";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			// if(this.textContent === "Easy"){
			// 	numOfSquares = 6;
			// }
			//
			// else {
			// 	numOfSquares = 3;
			// }

			reset();
		});
	}
}

function reset(){
	colors = generateRandomColors(numOfSquares);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}

		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
