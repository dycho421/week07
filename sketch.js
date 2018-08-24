var canvas;
var r,g,b;
var moving = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  canvas.position (0,0);
  canvas.style ('z-index','-1000');
    
  r = random(255);
  g = random(255);
  b = random(255);
  
}

function draw() {
  background(10,10,50);
  
  push();
  noFill();
  stroke(200);
  strokeWeight(moving*0.05);
  rectMode(RADIUS);
  rect(width/2,height/2,moving*0.3,moving*0.3);
  moving = moving + 0.01;
  pop();
  
  push();
  fill(r,g,b);
  noStroke();
  ellipse(width/2,height/2,moving*0.1,moving*0.1);
  
  r++;
  g++;
  
  moving = moving + 1;
  pop();
  
  
  push();
  noFill();
  stroke(r,g,b);
  strokeWeight(1);
  // line(x1, y1, x2, y2)
  line(width/2,height/2, 50, 450);
  line(width/2,height/2, 350, 250);
  pop();
  
  push();
  noFill();
  stroke(r,g,b);
  ellipse(width/2,height/2, 500, 500);
  rect(width/2,height/2,150,150);
  rect(width/2,height/2,20,20);
  pop();
  
  
//   ellipse(250,140,20,20);
//   ellipse(350,340,50,50);
  
  
  
  
}