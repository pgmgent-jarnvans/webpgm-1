function setup() {
  createCanvas(500, 500);
  noLoop();
  background(255);
}

function draw() {
  noStroke();
  frameRate(10);
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);

   

  for(let i = 0; i < width / 50; i++) {
    for(let j = 0; j < height / 50; j++) {
      if(i % 2 === 0) {
        if(j % 2 === 0) {
          fill(255);
          rect(i * 50, j * 50, 50, 50); 
        }
        else {
          fill(50);
          if(j === 5) {
            fill(r, g, b);
          }
 
          rect(i * 50, j * 50, 50, 50);
        }
      }
      else {
        if(j % 2 === 0) {
          fill(50);
          if(j === 5) {
            fill(r, g, b);
          }
          rect(i * 50, j * 50, 50, 50);
          
        }
        else {
          fill(255);
          rect(i * 50, j * 50, 50, 50);
        }
      }
      fill(255);
      stroke(50);
      ellipse(round(random(width)) + 50 / 2, round(random(height)) + 50 / 2, 50, 50);
    }
  }

 
}