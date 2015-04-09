    var ScaleX, ScaleY;
    
function setup() {
    createCanvas(1280, 800);
    background(20, 120, 180);
}

function draw() {
    ScaleX = random(20, 50);
    ScaleY = random(20, 50);
    //background(20, 120, 180);
    noStroke();
if (mouseIsPressed) {
    fill(20, 120, 180, 50);
  } else {
    fill(255, 50);
  }
    ellipse(mouseX, mouseY, ScaleX*1, ScaleY*1);
    ellipse(mouseX, mouseY, ScaleX*1.2, ScaleY*1.2);
    ellipse(mouseX, mouseY, ScaleX*1.4, ScaleY*1.4);
    ellipse(mouseX, mouseY, ScaleX*1.6, ScaleY*1.6);
    ellipse(mouseX, mouseY, ScaleX*1.8, ScaleY*1.8);
      ellipse(mouseX, mouseY, ScaleX*2, ScaleY*2);
}