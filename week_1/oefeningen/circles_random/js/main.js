function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  const x = random(0, width);
  const y = random(0, width);
  const s = random(5, width / 5);
  const r = random(0, 255);
  const g = random(0, 255);
  const b = random(0, 255);
  fill(r, g, b);
  ellipse(x, y, s, s);
}

