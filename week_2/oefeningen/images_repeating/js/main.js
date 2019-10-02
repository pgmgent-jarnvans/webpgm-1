let c = ""
let img = '';
let amount = 20;

function preload() {
  img = loadImage('https://picsum.photos/1920/1080?random=1');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  img.loadPixels();
}

function draw() {
  for(let i = 0; i < amount; i++) {
    image(img, (width / 2) + i * (-10), (height / 2) + i * 20);
  }
}