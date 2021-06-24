
var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivalTime=0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 500);
  monkey=createSprite(60,430,20,50)
  monkey.addAnimation("jump",monkey_running);
  monkey.scale = 0.2;
  
 ground=createSprite(400,493,900,10);
 
 //console.log(ground.x)
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
  background("green");
  
  stroke=("white");
  textSize=50;
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME =" +survivalTime,100,50);
  text("Score: "+ score, 400,50);
//for the repetition of ground
 ground.velocityX=-4
 ground.x = ground.width /2;
  
  if(World.frameCount%200===0){
    food()
 }
  
  if(World.frameCount%300===0){
    obstacles()
 }
  
  if(monkey.isTouching(foodGroup)){
     foodGroup.destroyEach()
    score=score+1
 }
  
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  
  drawSprites();

  
}

function food(){
  banana=createSprite(670,Math.round(random(170,230,10,10)))
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-3
  foodGroup.add(banana)
}

function obstacles(){
  obstacle=createSprite(670,455,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
}



