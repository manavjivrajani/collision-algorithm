var movingrect,fixedrect

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="red";
  fixedrect=createSprite(200,200,50,50);
  fixedrect.shapeColor="red";
}

function draw() {
  background("black")
  movingrect.y=World.mouseY
  movingrect.x=World.mouseX
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
     fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&& 
     fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2&&
     movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
     ){
       movingrect.shapeColor="yellow";
       fixedrect.shapeColor="yellow";
  }
  else{
movingrect.shapeColor="red"
fixedrect.shapeColor="red"
  }
  background(255,255,255);  
  drawSprites();
}