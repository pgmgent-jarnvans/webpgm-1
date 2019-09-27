/*
Variables
*/

let r = 0; // Size the ellipse
let speed = 20; // Speed of the animation for the ellipse
let direction = 1; // 1: enlarge, -1: shrink

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0);
  ellipse(width / 2, height / 2, r, r);

  // if ((r + speed) > width || (r - speed) < 0) {
  //   speed = -speed;
  // }
  if ((r + speed) > width) {
    direction = -1;
    fill(random(255), random(255), random(255));
  }
  else if ((r - speed) < 0) {
    direction = 1;
    fill(random(255), random(255), random(255));
  }
  speed += 0.02;
  r += speed * direction;
}