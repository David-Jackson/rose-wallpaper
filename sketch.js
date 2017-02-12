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

var dSpeedSlider = document.getElementById("dSpeedRange");


var c = 0;
var cDir = 1;

var navbar = document.getElementById("navbar");

// Fullscreen or Circle view setting
var fullscreenView = false;

var titleView = {
    duration: 100,
    active: 0
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    //fullScreen();
    background(0);
    colorMode(HSB);
    initializeR();
    //initialR = (min(height, width)/2) - padding;
    //dSpeedSlider = createSlider(1, 100, 10);
    //dSpeedSlider.position(20, 20);
}

var zoomOut = false;

function draw() {
    trackMouse();
    c += (1 * cDir);
    if (c >= 255 || c <= 0) cDir *= -1;
    var c1 = color(c, 255, 255);
    navbar.style.background = c1.toString();
    // tab.style.background = c1.toString();

    dSpeed = dSpeedSlider.value / 10000;


    d += dSpeed;

    var k = n / d;

    translate(width / 2, height / 2);
    noFill();
    beginShape();
    for (var a = -d * TWO_PI; a <= d * TWO_PI; a += 0.05) {
        var r = initialR;
        r *= cos(k * a);
        var x = r * cos(a);
        var y = r * sin(a);
        stroke(c1);
        strokeWeight(1);
        vertex(x, y);
    }
    endShape();

}

function initializeR() {
    initialR = (fullscreenView) ? sqrt(pow(height, 2) + pow(width, 2)) : (min(height, width) / 2) - padding;
}

// pause drawing animation
function pause() {
    noLoop();
}

// play drawing animation
function play() {
    loop();
}

function switchView() {
    var switchIcon = document.getElementById('switchViewIcon');
    fullscreenView = !fullscreenView;
    switchIcon.innerHTML = (fullscreenView) ? "panorama_fish_eye" : "fullscreen";
    // restart the drawing
    background(0);
    initializeR();
}

function trackMouse() {
    if (mouseX != pmouseX || mouseY != pmouseY) {
        titleView.active = titleView.duration;
        navbar.className = "navBarVisible";
    }
    if (titleView.active == 0) {
        titleView.active--;
        navbar.className = "navBarHidden";
    } else if (titleView.active > 0) {
        titleView.active--;
    }
}