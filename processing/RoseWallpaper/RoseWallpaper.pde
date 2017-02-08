/**

This code snippet was inspired by:
Daniel Shiffman's Mathematical Rose Coding Challenge 
https://www.youtube.com/watch?v=f5QBExMNB1I

**/


int padding = 20;
float initialR;

float n = 3.0;
float d = 5.0;
float dSpeed = 0.0001;


float c = 0;
int cDir = 1;

void setup() {
  //size(400,400);
  fullScreen();
  background(0);
  colorMode(HSB);
  initialR = (min(height, width)/2) - padding;
}


void draw() {
  c += (1 * cDir);
  if (c >= 255 || c <= 0) cDir *= -1;
  
  d += dSpeed;
  
  float k = n / d;

  translate(width/2, height/2);
  noFill();
  beginShape();
  for (float a = -d*TWO_PI; a <= d*TWO_PI; a += 0.01) {
    float r = initialR;
    r *= cos(k * a);
    float x = r * cos(a);
    float y = r * sin(a);
    stroke(c, 255, 255);
    strokeWeight(1);
    vertex(x, y);
  }
  endShape();
}