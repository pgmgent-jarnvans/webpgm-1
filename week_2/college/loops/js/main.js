function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  noLoop();
}

function draw() {
  let x = 0;
  let y = 0;
  let gutter = 10;
  let s = 10;
  
  // for(let i = 0; i < 100; i++) {
    
  //   // console.log(`This is iteration ${i}`);
  //   rect(x, y, s, s);
  //   x += s + gutter;
  //   y += s + gutter;
  // }

  for(let n = 0; n < 100; n++) {
    
    for(let m = 0; m < 100; m++) {
      rect(x, y , s, s);
      x += s + gutter;
    }
    y += s + gutter;
    x = 0;
  }
}