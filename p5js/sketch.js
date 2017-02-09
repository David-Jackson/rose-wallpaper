/**

This code snippet was inspired by:
Daniel Shiffman's Mathematical Rose Coding Challenge 
https://www.youtube.com/watch?v=f5QBExMNB1I

**/


var padding = 20;
var initialR;

var n = 5.0;
var d = 8.0;
var dSpeed = 0.001;


var c = 0;
var cDir = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //fullScreen();
  background(0);
  colorMode(HSB);
  initialR = (min(height, width)/2) - padding;
}


function draw() {
  c += (1 * cDir);
  if (c >= 255 || c <= 0) cDir *= -1;
  
  d += dSpeed;
  
  var k = n / d;

  translate(width/2, height/2);
  noFill();
  beginShape();
  for (var a = -d*TWO_PI; a <= d*TWO_PI; a += 0.05) {
    var r = initialR;
    r *= cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    stroke(c, 255, 255);
    strokeWeight(1);
    vertex(x, y);
  }
  endShape();
}