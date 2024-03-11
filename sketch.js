function setup ( ) {
    createCanvas(650, 650)
      background("green");

}

function draw(){

 stroke("red");
 fill("yellow");

 if(mouseIsPressed){
   rect(mouseX, mouseY,15,15);
 }
}