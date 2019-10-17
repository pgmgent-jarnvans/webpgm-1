let ball1 = {};
let ball2 = {};

ball1 = {
  x: 20,
  y: 20,
  xSpeed: 10,
  ySpeed: 2,
  r: 20,
  update: function() {
    this.x += this.xSpeed
    this.y += this.ySpeed
    if(this.x < this.r || this.x > width - this.r){
      this.xSpeed = -this.xSpeed;
    }

    if(this.y < this.r || this.y > height - this.r){
      this.ySpeed = -this.ySpeed;
    }
  },
  display: function() {
    return ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}

ball2 = {
  x: 50,
  y: 50,
  xSpeed: 7,
  ySpeed: 3,
  r: 50,
  update: function() {
    this.x += this.xSpeed
    this.y += this.ySpeed
    if(this.x < this.r || this.x > width - this.r){
      this.xSpeed = -this.xSpeed;
    }

    if(this.y < this.r || this.y > height - this.r){
      this.ySpeed = -this.ySpeed;
    }
  },
  display: function() {
    return ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0);
  ball1.display();
  ball2.display();
  ball1.update();
  ball2.update();

}
