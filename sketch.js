//Global Variables
var backImage,bananaImage,obstaclesImage,obstaclesGroup,score,foodGroup
var ground,monkey
function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = 
    loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  
  bananaImage = loadImage ("Banana.png");
  obstacles_img = loadImage("stone.png");
  
}


function setup() {
  createCanvas(600,400);
 ground = createSprite(300,380,600,5);
  ground.visible=false;
   ground.velocityX=-2;
   monkey = createSprite(100,380)
 
    monkey.addAnimation ("running",player_running)
  monkey.scale = 0.2
obstaclesGroup = new Group();
  foodGroup = new Group();
  
}


function draw(){
 background(255);
  if (ground.x<0) {
    ground.x=ground.width/2;
     
    }
  if (keyDown("space")) {
    monkey.velocityY=-9;
  }
  monkey.collide(ground);
   
   monkey.velocityY=monkey.velocityY+0.5;
  
  if(monkey.isTouching (foodGroup)){
    score=score+2
    foodGroup.destroyEach();
}
  switch(score){
    case 10: monkey.scale = 0.12;
            break;
    case 20: monkey.scale = 0.14;
            break;
    case 30: monkey.scale = 0.16;
            break;
    case 40: monkey.scale = 0.18;
            break; 
    default: break;        
  }
   if(obstaclesGroup.isTouching(monkey)){
      monkey.scale=0.2
   }
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white")
  text("score: "+ score, 500, 50);
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (World.frameCount % 80 === 0) {
    var bananas = createSprite(400,320,40,10);
    bananas.y = randomNumber(120,200);
    bananas.setAnimation("Banana");
    bananas.scale = 0.08;
    bananas.velocityX = -3;
    
     //assign lifetime to the variable
   bananas.lifetime = 134;
    
    //adjust the depth
    bananas.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
   spawnBanana.add(foodGroup);
  }
}