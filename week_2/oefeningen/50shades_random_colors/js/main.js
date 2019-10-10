let cols = 10;
let rows = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  strokeWeight(5);
  stroke(255);
}

function draw() {
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      generateRandomColor();
      rect(j * (width / cols), i * (height / rows), width / cols, height / rows)
    }
  }
}

function generateRandomColor() {
  return fill(random(255), random(255), random(255));
}