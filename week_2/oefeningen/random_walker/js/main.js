let x = 900;
let y = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  x = width / 2;
  y = height / 2;
}

function draw() {
  noStroke();
  
  let direction = round(random(3));
  let dx = 0;
  let dy = 0;

  switch(direction) {
    case 0: 
      dx = random(1, 10);
      x -= dx;
      break;
    case 1: 
      dy = random(1, 10);
      y += dy;
      break;
    case 2: 
      dy = random(1, 10);
      y -= dy;
      break;
    default: 
      dx = random(1, 10);
      x += dx;
      break;
  }

  ellipse(x, y, 3, 3);
}