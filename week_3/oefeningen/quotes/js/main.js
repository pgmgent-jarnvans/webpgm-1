let pressed = false;
let font = '';
let quotes = ['you only live once', 'something something', 'dit is nog een quote', 'ik begin het beu te worden', 'zelfkennis is het begin\nvan alle wijsheid']
let quotesPassed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noLoop();
  noStroke();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
}

function preload() {
  // console.log(loadFont('../assets/Kalam-Regular.ttf'));
  // font = loadFont('../assets/Kalam-Regular.ttf');
}

function draw() {
  rect(width / 2, height / 2, 600, 400);
  textSize(20);
  // pressed = false;
  if (!pressed) {
    text(quotes[quotesPassed], width / 2, height / 2);
    quotesPassed++;
  }
}

function mousePressed() {
  pressed = true;
  fill(255);
  rect(width / 2, height / 2, 600, 400);
  fill(0);
  
  // textFont(font);
  text(quotes[quotesPassed], width / 2, height / 2);

  if(quotesPassed === quotes.length - 1) {
    quotesPassed = 0;
  }
  else {
    quotesPassed++;
  }
}
