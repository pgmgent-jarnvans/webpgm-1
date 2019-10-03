function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
}

function draw() {
  
}

function keyTyped() {
  let letter = String.fromCharCode(keyCode);
  let x = random(width);
  let y = random(height);
  let size = random(15, 100);
  if (keyCode > 46 && keyCode < 111){
    fill(0);
    rect(x, y, size, size);
    fill(random(255), random(255), random(255));
    textSize(size);
    text(letter.toLowerCase(), x, y);
  }
}
