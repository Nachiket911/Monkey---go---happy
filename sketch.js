//creating variables for monkey, food, obstacle, their images and groups, ground.
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;

// to load images, sounds, anmations etc.
function preload(){  
  //loading animation for the monkey.
 monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
         
  //loading images for the banana and obstacle.
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   
}

// to carry out the command once
function setup() {
  
  // creating the canvas.
  createCanvas(600, 300);

  // defining monkey sprite
  monkey = createSprite(35, 265, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  //defining ground sprite.
  ground = createSprite(300, 275, 600, 10);
  ground.velocityX = -4;
 
  // creating the food and obstacle groups.
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  // giving an initial value to the score.
  score = 0;
  
}

// to carry out the command multiple times
function draw() {
  
  // giving a background colour.
  background("lightgreen");
  
  //displaying the survival time and giving it colour and size.
  stroke("red");
  textSize(24);
  text("SurvivalTime:" +  score, 20, 20);
  
  // maing the monkey jump.
  if(keyDown("space")){
     
    monkey.velocityY = -10;
        
     }  
  
  // calculating the score.
  score = score + Math.round(getFrameRate()/40);
  
  // giving the monkey gravity.
  monkey.velocityY += 0.8;
  
  // making the monkey collide with the ground.
  monkey.collide(ground);
  
  // to reset the ground.
  if(ground.x > 0){
    
    ground.x = 300;
    
  }
  
  //to make the food and obstacles appear.
  spawnBananas();
  spawnObstacles();
  
  // to make all the sprites appear.
  drawSprites();
  
}

// the function spawning the food.
function spawnBananas() {

  // doing the following activities every 80 frames.
  if (frameCount % 80 === 0) {
    
    // giving the banana variable all its properties.
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;      
    banana.lifetime = 140;

    // changing the banana's depth.
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
   
    // to add banana to the food group.
    foodGroup.add(banana);
    
  }
  
}

// the function spawning obstacles.
function spawnObstacles(){
  
  // doing the following activities every 300 frames.
   if (frameCount % 300 === 0) {
    
     // giving the obstacle variable all its properties.
    var obstacle = createSprite(600,252,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;      
    obstacle.lifetime = 140;
   
     // adding the obstacles to the obstacle group.
    obstacleGroup.add(obstacle);
    
  }
  
}