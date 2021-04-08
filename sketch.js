var background,backgroundImg;



function preload() {
backgroundImg=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    background=createSprite(500,400);
    background.addImage(backgroundImg);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
