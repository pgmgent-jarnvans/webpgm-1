const date = new Date();
let myFont;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textAlign(CENTER, CENTER);
}

// function preload() {
//   myFont = loadFont('../assets/Kalam-Bold.ttf');
// }

function draw() {
  background(255);
  textFont('Inconsolata');
  textSize(50);
  textStyle(BOLD);
  text(getTimeInDigitalFormat(), width / 2, height / 2);
}

function getTimeInDigitalFormat() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let timeStr = `${convertTimepartToDigits(hours, 2)}:${convertTimepartToDigits(minutes, 2)}:${convertTimepartToDigits(seconds, 2)}`;

  return timeStr;
}

function convertTimepartToDigits(t, nDigits) {
  t = String(t);
  while(t.length < nDigits) {
    t = '0' + t;
  }

  return t;
}

