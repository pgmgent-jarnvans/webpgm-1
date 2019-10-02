let c = ""
let img = '';
let amount = 360;

function preload() {
  img = loadImage('https://picsum.photos/1920/1080?random=1');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
  imageMode(CENTER);
  angleMode(DEGREES);
  img.loadPixels();
}

function draw() {
  translate(width / 2, height / 2);
  push();
  for(let i = 0; i < amount; i++) {
    image(img, 0, 0, img.width / i, img.width / i);
    rotate(360 / amount);

  }
  pop();
}