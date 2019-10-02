let pressed = false;
let x = 0;
let y = 0;
let w = 75;
let h = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER, CENTER);
  x = width / 2;
  y = height / 2;
}

function draw() {
  if (pressed) {
    background(255);
    fill(0);
  }
  else {
    background(0);
    fill(255);
  }
  rect(x, y, w, h);
}

function mousePressed() {
  if((mouseX < x + (w / 2) && mouseY < y + (h / 2)) && (mouseX > x - (w / 2) && mouseY > y - (h / 2))) {
    pressed = !pressed;
  }
}
