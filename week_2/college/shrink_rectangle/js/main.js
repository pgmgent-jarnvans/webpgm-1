/*
Variables
*/

let x = 0; // Position of the current rectangle
let w = 0; // Width of the rectangle
let h = 0; // Width of the rectangle
let speed = 5;
let direction = 1; // 1: enlarge, -1: shrink

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  h = height;
  w = width;
  rectMode(CENTER);
}

function draw() {
  if ((w + speed) <= 10 || (h + speed) <= 10) {
    direction = 1;
  }
  else if ((w + speed) > width || (h + speed) > height){
    direction = -1;
  }

  fill(random(150), random(255), random(200))
  rect(width / 2, height / 2, w, h);
  
  w += speed * direction;
  h += speed * direction;
}