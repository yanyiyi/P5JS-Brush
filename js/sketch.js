    var ScaleX, ScaleY;
    var brushSize = 10;
    var colorC,colorM,colorY;
function setup() {
    createCanvas(1280, 800);
    background(0);
}

function draw() {
    ScaleX = random(20, brushSize);
    ScaleY = random(20, brushSize);
    //background(20, 120, 180);
    noStroke();
    if (mouseIsPressed) {
        fill(0, 90);
      } else {
        fill(255, 40);
      }
        ellipse(mouseX, mouseY, ScaleX*1, ScaleY*1);
        ellipse(mouseX, mouseY, ScaleX*1.2, ScaleY*1.2);
        ellipse(mouseX, mouseY, ScaleX*1.4, ScaleY*1.4);
        ellipse(mouseX, mouseY, ScaleX*1.6, ScaleY*1.6);
        ellipse(mouseX, mouseY, ScaleX*1.8, ScaleY*1.8);
        ellipse(mouseX, mouseY, ScaleX*2, ScaleY*2);

        if (keyIsPressed){
             if (keyCode == RETURN) {
                save('myCanvas.jpg');
             }else if(keyCode == TAB) {
                var fs = fullscreen();
                fullscreen(!fs);
             }else if(keyCode == UP_ARROW){
                brushSize += 5;
             }else if(keyCode == DOWN_ARROW){
                brushSize -= 5;
             } 
        }    
    
       // var s = "No Click for Draw. Click for Erase. Any KeyBoard for Save";
       // fill(255);
       // text(s, 20, 20, 500, 80); // Text wraps within text box

}