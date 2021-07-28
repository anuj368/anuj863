var ship,shipImg1;
var sea,seaImg;

function preload(){
  seaImg=loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}





function setup(){
  createCanvas(600,500);
  
  //creating the sea
sea=createSprite(600,300);
sea.addImage(seaImg);
sea.x=sea.width/2
sea.velocityX=-2;

ship=createSprite(50,200,20,50);
ship.addAnimation("running",shipImg1)
edges=createEdgeSprites();

ship.scale=0.25
ship.x=90;
ship.y=300;

}

function draw() {
  background("blue");
if (keyDown("right")) {
  ship.velocityX=5;
}  
if (keyDown("Left")) {
ship.velocityX=-5;  
} 
if (keyDown("space")) {
  ship.velocityX=0;
}

  if (sea.x < 0) {
    sea.x=sea.width/2;
  }

  ship.collide(edges[3])
drawSprites();
}






