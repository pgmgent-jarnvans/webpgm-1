/*
Variables
*/

let x = 0; // Position of the current rectangle
let w = 20; // Width of the rectangle
let h = 0; // Width of the rectangle

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();

  h = height;
  rectMode(CENTER);
}

function draw() {
  if ((x+w) > width) {
    background(255, 0, 0);
  }
  else {
    fill(random(255), random(255), random(255))
    rect(x, height / 2, w, h);
    x += w;
    h -= w / 2;
  }
  
}