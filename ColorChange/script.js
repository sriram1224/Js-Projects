let colors = [
    "#FF5733", // Red-Orange
    "#4CAF50", // Green
    "#FFD700", // Gold
    "#FFFF00", // Yellow
    "#8A2BE2", // Blue-Violet
    "#FFA500", // Orange
    "#2F4F4F", // Dark Slate Gray
    "#EE82EE", // Violet
    "#3498DB", // Dodger Blue
    "#E74C3C", // Alizarin Crimson
    "#2ECC71", // Emerald Green
    "#00FFFF"  // Cyan
];

let outercolor = document.getElementsByClassName("outer")[0];
var position = 0;
function colorChange(){
    if(position === colors.length){
        position = 0;
    }
    outercolor.style.backgroundColor = colors[position]
    position++;
}



let innerElement = document.querySelector(".square");
let shapeIndex = 0;
const shapes = ["square", "triangle", "circle","rectangle","diamond"]; // Add shapes as needed

function shapeChange() {
  innerElement.classList.remove(shapes[shapeIndex]);

  // Update the shape index with loop
  shapeIndex = (shapeIndex + 1) % shapes.length;

  innerElement.classList.add(shapes[shapeIndex]);
}