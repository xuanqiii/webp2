// code credit: ronikaufman
var x,y;

function setup() {
  let cnv = createCanvas(250, 250);
  noStroke();
  fill(0,0,0);
  x=100;
  cnv.position(625,500);
}

function draw() {
  x+=0.3;
  y=3*(cos(x)+sin(x/2))+110;
  translate(width/2, height/2-y+50);
  background(255);
  rotate(PI/4.0);
  square(0,0,y);
  circle(y/2,0,y);
  circle(0,y/2,y);
  }

  