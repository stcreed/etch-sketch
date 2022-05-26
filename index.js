//jshint esversion:6

let grid = 0; //sets the grid variable

function gridSize() {   //this is the controlling function, it's called by the button on the page
  grid = prompt("Enter the size of grid in terms of width (up to 100):");
  gridFunction();
  assignSquareSize();
  squareColor();
}

let cont = document.getElementById("container"); //the variable that obtains the div with class of container

function gridFunction() {     //this function creates new divs that create the etch-a-sketch grid, class of "square" is assigned to use later
  for(var i = 1; i <= (grid * grid); i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "square");
    div.setAttribute("id", "div" + i);
    cont.appendChild(div);
  }}

var squares = document.getElementsByClassName("square");

function assignSquareSize() {
  for(const square of squares) {
    var squareSize = (960 / grid) + 'px';
    console.log(squareSize);
    square.style.width = squareSize;
    square.style.height = squareSize;
}}

function squareColor() {
  for (const square of squares) {
    square.addEventListener("mouseover", function mouseOver() {
      square.style.backgroundColor = "purple";
    setTimeout(function() {
      square.style.backgroundColor = "red";
    }, 2000);
    });
  }}
