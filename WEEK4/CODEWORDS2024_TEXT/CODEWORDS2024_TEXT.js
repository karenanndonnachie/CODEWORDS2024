var SIZE;
var xPos, yPos, pic;
function preload(){
  pic=loadImage('data/poolimage.jpg');
}
function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
textAlign(CENTER, CENTER);
SIZE=80;
xPos=width/2;
yPos=height/2;
frameRate(5);
angleMode(DEGREES);
}
function draw() {
 background(0);
 if (mouseIsPressed === true) {
    fill(0);
  } else {
    fill(255, 0, 0);
  }
  textSize(SIZE);
  image(pic, width/2-384, 0, 768, 512);

  push();
    translate(xPos, yPos);
    noStroke();
    //rotate(QUARTER_PI);
    rotate(mouseX);
    text('HELLO WORLD\nthis is the end...', -width/4,-height/4, width/2, height/2); 
  pop();

  stroke(255, 0, 0);
  strokeWeight(5);
  line(mouseX, mouseY, pmouseX, pmouseY);
  //pic.filter(INVERT, 3);
}

function mousePressed(){
  SIZE+=10;
}
