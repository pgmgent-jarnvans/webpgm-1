let x = 400;
let y = 400;
let moveX = 10;
let moveY = 2;

const diameter = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  const r = random(255);
  const g = random(255);
  const b = random(255);

  background(255);
  ellipse(x, y, diameter, diameter);

  x += moveX;
  y += moveY;

  if (x > width - diameter / 2 || x < diameter / 2) {
    moveX = -moveX;
    fill(r, g, b);
  }

  if (y > height - diameter / 2|| y < diameter / 2) {
    moveY = -moveY;
    fill(r, g, b);
  }
}