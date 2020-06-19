var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9,wall10,wall12,wall13,wall14,wall15,wall16,player,theHardestPartInTheGame, anotherHeadache;


function setup() {
  createCanvas(400, 400);
  
  //creating the maze
  
  wall1=createSprite(0,400,20,100);
  wall2=createSprite(0,350,100,20); 
  wall3=createSprite(50,350,20,50);
  wall4=createSprite(90,400,10,200);
  wall5=createSprite(0,250,250,10);
  wall6=createSprite(130,295,10,100);
  wall7=createSprite(150,400,50,10);
  wall8=createSprite(170,400,10,100);
  wall9=createSprite(175,300,100,10);
  wall10=createSprite(200,400,10,100);
  wall12=createSprite(220,350,50,10);
  wall13=createSprite(250,400,10,110);
  wall14=createSprite(260,400,10,390);
  wall15=createSprite(165,210,200,10);
  wall16=createSprite(170,240,10,70);
  
  wall1.shapeColor=("red")
  wall2.shapeColor=("red")
  wall3.shapeColor=("red")
  wall4.shapeColor=("red")
  wall5.shapeColor=("red")
  wall6.shapeColor=("red")
  wall7.shapeColor=("red")
  wall8.shapeColor=("red")
  wall9.shapeColor=("red")
  wall10.shapeColor=("red")
  wall12.shapeColor=("red")
  wall13.shapeColor=("red")
  wall13.shapeColor=("red")
  wall14.shapeColor=("red")
  wall15.shapeColor=("red")
  wall16.shapeColor=("red") 
  
  //creating the Player
  
  player=createSprite(30,385,15,15);
  player.shapeColor=("green");
  
  //theHardestPartInTheGame
  
  theHardestPartInTheGame=createSprite(130,380,10,10);
  theHardestPartInTheGame.shapeColor=("blue");

  theHardestPartInTheGame.velocityY=2
  
  anotherHeadache=createSprite(170,315,10,10);
  anotherHeadache.shapeColor=("blue");
  
  anotherHeadache.velocityY=2
}

function draw() {
  background(220);

  //controlling the player
  
  if(keyDown("UP_ARROW"))
  {player.y=player.y-2}
  
  if(keyDown("DOWN_ARROW"))
  {player.y=player.y+2}
  
  if(keyDown("RIGHT_ARROW"))
  {player.x=player.x+2}
  
  if(keyDown("LEFT_ARROW"))
  {player.x=player.x-2}
  
  //game obstacles
  
  if(player.isTouching(wall1))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall2))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall3))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall4))
  {player.x=30;
   player.y=385;}
  
  
  if(player.isTouching(wall5))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall6))
  {player.x=30;
   player.y=385;}
  
 if(player.isTouching(wall7))
  {player.x=30;
   player.y=385;} 
  
  if(player.isTouching(wall8))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall9))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall10))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall12))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall13))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall4))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall15))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall16))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(wall1))
  {player.x=30;
   player.y=385;}
  
  if(player.isTouching(theHardestPartInTheGame))
  {player.x=30;
   player.y=385;}
  
  
  //winning!!
  
  if(player.x<140 && player.y<250)
  {text("You Win!!!" ,200,200);}
  
  if(player.x>150 && player.y>380)
  {text("You Found The Hidden Easter Egg!!!" ,200,200);}
  
  //the death count
  if(player.isTouching(wall1) || player.isTouching(wall2) || player.collide(wall3) || player.collide(wall4) || player.collide(wall5) || player.collide(wall6) || player.collide(wall7) || player.collide(wall8) || player.collide(wall9) ||  player.collide(wall10) || player.collide(wall12) || player.collide(wall13) || player.collide(wall14) || player.collide(wall15) || player.collide(wall16))
  {count=count+1}
     
  
  
  theHardestPartInTheGame.bounceOff(wall1); 
  theHardestPartInTheGame.bounceOff(wall2);
  theHardestPartInTheGame.bounceOff(wall3);
  theHardestPartInTheGame.bounceOff(wall4);
  theHardestPartInTheGame.bounceOff(wall5);
  theHardestPartInTheGame.bounceOff(wall6);
  theHardestPartInTheGame.bounceOff(wall7);
  theHardestPartInTheGame.bounceOff(wall8);
  theHardestPartInTheGame.bounceOff(wall9);
  theHardestPartInTheGame.bounceOff(wall10);
  theHardestPartInTheGame.bounceOff(wall12);
  theHardestPartInTheGame.bounceOff(wall13);
  theHardestPartInTheGame.bounceOff(wall14);
  theHardestPartInTheGame.bounceOff(wall15);
  theHardestPartInTheGame.bounceOff(wall16);
  
  anotherHeadache.bounceOff(wall1);
  anotherHeadache.bounceOff(wall2);
  anotherHeadache.bounceOff(wall3);
  anotherHeadache.bounceOff(wall4);
  anotherHeadache.bounceOff(wall5);
  anotherHeadache.bounceOff(wall6);
  anotherHeadache.bounceOff(wall7);
  anotherHeadache.bounceOff(wall8);
  anotherHeadache.bounceOff(wall9);
  anotherHeadache.bounceOff(wall10);
  anotherHeadache.bounceOff(wall12);
  anotherHeadache.bounceOff(wall13);
  anotherHeadache.bounceOff(wall14);
  anotherHeadache.bounceOff(wall15);
  anotherHeadache.bounceOff(wall16);
  
  drawSprites();
}