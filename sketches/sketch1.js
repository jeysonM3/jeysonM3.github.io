function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(120);
  line(150, 0, 150, 600);
  line(300, 0, 300, 600);
    line(450, 0, 450, 600);

 
   if (mouseX > 0 && mouseX <= 150) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 20, 20);
    
  }
 
  else if (mouseX > 150 && mouseX <= 300) {
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 50, 50);
   
  }
 
  else if (mouseX > 300 && mouseX <= 400) {
    fill(0, 50, 0);
    ellipse(mouseX, mouseY, 70, 70);
   
  }
  
  else if (mouseX > 450 && mouseX <= 600) {
    fill(0,1100,600)
    ellipse(mouseX,mouseY,100,100);
  }
}