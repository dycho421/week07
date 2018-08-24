var x = 50;
var y = 200;
var speed = 5;

var sound, amplitude;

function preload() {
  sound = loadSound('https://res.cloudinary.com/doutwyts6/video/upload/v1476769079/1-01_Just_Dance_Feat._Colby_O_Donis_cmi2jz.mp3');
  
  sound1 = loadSound('https://res.cloudinary.com/doutwyts6/video/upload/v1476795864/90081__jivatma07__sinebd-short-w-click_y20ghx.wav');
  
  sound2 = loadSound('https://res.cloudinary.com/doutwyts6/video/upload/v1476795867/322758__mishicu__75-drums6-sq8l_ed0vjc.wav');
  
}

function setup () {
  createCanvas(windowWidth, windowHeight);
  sound.play();
  amplitude = new p5.Amplitude();
}


function draw () {
  background(60,60,60,50);
  
  push();
  fill(100,200,0);
  noStroke();
  rect(x,y,100,55,25);
  
  push();
  fill('white')
  rect(x+65,y+10,20,15);
  
  push();
  fill('black');
  ellipse(x+10,y+50,30,30);
  ellipse(x+90,y+50,30,30);
  pop();
  
  if (x > 700) {
    speed = speed*-1;
  } else if ( x < 0) {
    speed = speed*-1;
  }
  
  x = x + speed*2; 
}

function keyTyped() {
  recentKey = key;
  switch (key) {
    case 'a':
      sound1.play();
      background (255,0,0);
      break;
    case 'l':
      sound2.play();
      background (0,255,0);
      break;
      
  }
  
}