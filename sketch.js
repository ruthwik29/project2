var trex, trex_running, edges;
var groundImage;
var ground
var invisibleground
var cloud,cloudimg
var obstacle,obstacleimg1,obstacleimg2,obstacleimg3,obstacleimg4,obstacleimg5,obstacleimg6
var trexgameOver,trexrestart,trexcollide
var score
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
  cloudimg=loadImage("cloud.png")
  obstacleimg1=loadImage("obstacle1.png")
  obstacleimg2=loadImage("obstacle2.png")
  obstacleimg3=loadImage("obstacle3.png")
  obstacleimg4=loadImage("obstacle4.png")
  obstacleimg5=loadImage("obstacle5.png")
  obstacleimg6=loadImage("obstacle6.png")
  trexgameOver=loadImage("gameOver.png")
  trexrestart=loadImage("restart.png")
  trexcollide=loadImage("trex_collided.png")

}

function setup(){
  createCanvas(600,200);
  console.log(Math.round(random(5,10)))
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
    //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  ground=createSprite(300,180,600,20)
  ground.addImage(groundImage)
  ground.velocityX=-2
  
  invisibleground=createSprite(300,190,600,10)
  invisibleground.visible=false
}


function draw(){
  //set background color 
  background("white");
  score=Math.round(frameCount/60)
  text("Score:"+score,500,20)
  //logging the y position of the trex
  //console.log(trex.y)
  if(ground.x<0){
    ground.x=ground.width/2
  }
  //jump when space key is pressed
  if(keyDown("space")&& trex.y>160){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleground)
  cloudsdisplay()
  obstacledisplay()
  drawSprites();
}
function cloudsdisplay(){
  if(frameCount%60==0){
  cloud=createSprite(600,100,40,10)
  cloud.y=Math.round(random(10,100))
  cloud.addImage(cloudimg)
  cloud.scale=0.5
  cloud.velocityX=-3
  cloud.depth=trex.depth
  trex.depth+=1
  cloud.lifetime=200
    }
}
function obstacledisplay(){
  if(frameCount%80==0){
  obstacle=createSprite(600,165,10,40)
  
  var randomnumber=Math.round(random(1,6))
  switch(randomnumber){
    case 1:obstacle.addImage(obstacleimg1)
          break;
    case 2:obstacle.addImage(obstacleimg2)
          break;
    case 3:obstacle.addImage(obstacleimg3)
          break;
    case 4:obstacle.addImage(obstacleimg4)
          break;
    case 5:obstacle.addImage(obstacleimg5)
          break;
    case 6:obstacle.addImage(obstacleimg6)
          break;
    default:break
  }
  obstacle.scale=0.5
obstacle.velocityX=-3
obstacle.lifetime=200
  }
}
