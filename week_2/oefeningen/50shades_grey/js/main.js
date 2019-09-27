let cols = 10;
let rows = 5;
let colorNumber = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noLoop();
  noStroke();
}

function draw() {
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      fill(colorNumber * 5);
      rect(j * (width / cols), i * (height / rows), width / cols, height / rows);
      colorNumber++;
    }
  }
}