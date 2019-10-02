let cols = 10;
let rows = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
  noStroke();
  colorMode(HSB);
}

function draw() {
  background(0);
  const hue = random(360);
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      console.log(100 / j);
      fill(hue , 100 / (i + 1), 100 / (j + 1));
      rect(j * (width / cols), i * (height / rows), width / cols, height / rows);
    }
  }
}