let scalar = 1
function setup() {
  createCanvas(300, 300);
}

function draw() {
  angleMode(DEGREES)
  background(220);
  drawAbstract(0, 0, scalar);
  drawAbstract(-50,2,scalar)
  abstractColor(mouseX,mouseY);


function drawAbstract(posX, posY, shapeScale){
  push();
  translate(posX,posY)
  scale(shapeScale);
  triangle(75,50,125,100,100,100);
  triangle(225,50,175,100,200,100);
  ellipse(150,120,100);
  rotate(45)
  rect(165, -45, 50);
  scalar = scalar + 0.0001 * scalar
  pop();
}

function abstractColor(x, y){
  if(mouseX <= 100){
    fill(x,165,y)
  }
  else if(mouseX > 100 && mouseX <= 200 && mouseY > 150){
    fill(x,216,y)
  }
  else if(mouseX > 100 && mouseX <= 200 && mouseY <= 150){
    fill(x,159,y)
  }
  else fill(x,52,y)
}

}
