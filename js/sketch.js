    var ScaleX, ScaleY;
    var brushSize = 10;
    var colorC,colorM,colorY,colorW;
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
          if(colorC ==1){
              fill(125, 200, 255, 40);
          }
          else if(colorM ==1){
              fill(255, 125, 125, 40);
              }
          else if(colorY ==1){
              fill(255, 230, 125, 40);
          }
          else if(colorW ==1){
              fill(255, 40);
          }
          else{
        fill(255, 40);
          }
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
function keyTyped() {
             if(key === 'z'){
                 colorC = 1;
                 colorM = 0;
                 colorY = 0;
                 colorW = 0;     
            }else if(key === 'x'){
                 colorC = 0;
                 colorM = 1;
                 colorY = 0;
                 colorW = 0; 
            }
            else if(key === 'c'){
                colorC = 0;
                 colorM = 0;
                 colorY = 1;
                 colorW = 0; 
            }
            else if(key === 'v'){
                 colorC = 0;
                 colorM = 0;
                 colorY = 0;
                 colorW = 1; 
            }
            
        }    