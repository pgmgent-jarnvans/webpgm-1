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
    rect(x, y, w, h); 
  }
  else {
    background(0);
    fill(255);
    rect(width / 2, height / 2, 75, 150); 
  }
}

function mousePressed() {
  if((mouseX < x + (w / 2) && mouseY < y + (h / 2)) && (mouseX > x - (w / 2) && mouseY > y - (h / 2))) {
    pressed = !pressed;
  }
}
