function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  const x = random(0, width);
  const y = random(0, width);
  const r = random(0, 255)
  const g = random(0, 255)
  const b = random(0, 255)
  fill(r, g, b);
  ellipse(x, y, 30, 30);
}

