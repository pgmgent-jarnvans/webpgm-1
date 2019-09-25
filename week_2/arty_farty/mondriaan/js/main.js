function setup() {
  createCanvas(500,300);
  noLoop();
  background(255);
}

function draw() {
  strokeWeight(5);
  stroke(0);
  rect(2, 2, 30, 80);
  rect(2, 72, 40, 40);
  rect(92, 22, 50, 50);
  rect(142, 112, 100, 80);
  rect(242, 2, 20,50);
  rect(202, 2, 40, 50);
  fill(0);
  noStroke();
  rect(42, 72, 100, 40);
  stroke(0);
  rect(92, 2, 110, 20);
  fill('#dd0100');
  rect(142, 22, 60, 90);
  rect(2, 112, 40, 80);
  fill('#fac901');
  rect(22, 2, 70, 70);
  rect(242, 52, 20, 140);
  fill('#225095');
  rect(42, 112, 100, 80);
  rect(202, 52, 40, 60);

  line(142, 72, 202, 72);
  line(202, 22, 242, 22);
  line(162, 112, 162, 192);
}