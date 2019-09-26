let x = 5;
let y = 5;
let moveX = 6;
let moveY = 9;

const diameter = 10;

function setup() {
  createCanvas(500,300);
}

function draw() {
  background(255);
  ellipse(x, y, diameter, diameter);

  x += moveX;
  y += moveY;

  if (x > width - diameter || x < diameter) {
    moveX = -moveX;
  }

  if (y > height - diameter || y < diameter) {
    moveY = -moveY;
  }
}