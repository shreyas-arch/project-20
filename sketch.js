var bgImg;
var cat;
var mouse;
function preload() {
  catimg1 = loadAnimation("images/cat1.png") ;
  mouseimg1 = loadAnimation("images/mouse1.png") ;
  catimg2 = loadAnimation("images/cat2.png") ;
  mouseimg2 = loadAnimation("images/mouse2.png") ;
  
}

function setup(){
    createCanvas(1000,800);
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouse.Teasing",mouseimg2);
    mouse.changeAnimation("mouse.Teasing");
    mouse.frameDelay = 25;
}

}
