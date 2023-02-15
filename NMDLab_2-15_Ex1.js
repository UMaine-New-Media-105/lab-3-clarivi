function setup() {
  createCanvas(300, 300);
}

function draw() {
  angleMode(DEGREES)
  background(220);
  triangle(75,50,125,100,100,100);
  triangle(225,50,175,100,200,100);
  ellipse(150,120,100);
  rotate(45)
  rect(165, -45, 50);
  
  if(mouseX <= 100){
    fill("rgb(165,165,165)")
  }
  else if(mouseX > 100 && mouseX <= 200 && mouseY > 150){
    fill("rgb(243,216,51)")
  }
  else if(mouseX > 100 && mouseX <= 200 && mouseY <= 150){
    fill("#FF9F38")
  }
  else fill("rgb(241,52,52)")
}
