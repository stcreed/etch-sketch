//jshint esversion:6

let cont = document.getElementById("container");

for(var i = 1; i <= 16; i++) {
  var div = document.createElement("div");
  div.setAttribute("class", "square");
  div.setAttribute("id", "div" + i);
  cont.appendChild(div);
}

var squares = document.getElementsByClassName("square");

for (const square of squares) {
  square.addEventListener("mouseover", function mouseOver() {
    square.style.backgroundColor = "purple";
  });
}
