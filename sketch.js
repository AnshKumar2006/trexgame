var PLAY = 1;
var END = 0;
var gamestate = PLAY;
var trex, trex_animation,ground,ground_image,invisibleground,clouds,clouds_image, cloudsGroup, obstaclesGroup;
var obs1, obs2, obs3, obs4, obs5, obs6, obstacle, rand,restart, gameover,restart_image, gameover_image; 
function preload() {
trex_animation = loadAnimation("trex1.png","trex3.png","trex4.png");
ground_image = loadImage("ground2.png");
  clouds_image = loadImage("cloud.png");
  obs1 = loadImage("obstacle1.png");
   obs2 = loadImage("obstacle2.png");
   obs3 = loadImage("obstacle3.png");
   obs4 = loadImage("obstacle4.png");
   obs5 = loadImage("obstacle5.png");
   obs6 = loadImage("obstacle6.png");
  restart_image = loadImage("restart.png");
  gameover_image = loadImage("gameOver.png");
}
function setup() {
  createCanvas(600, 200);
  trex = createSprite(50,180,10,10);
  trex.addAnimation("jumping",trex_animation);
  trex.scale = 0.5
  ground = createSprite(200,180,400,10);
  ground.addImage(ground_image);
  invisibleground = createSprite(200,185,400,10);
  invisibleground.visible = false;
  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();
}

function draw() {
  background("orange");
  if(gamestate === PLAY) {
     if(keyDown("space")&& trex.isTouching(ground)) {
    trex.velocityY = -10;    
  trex.velocityY = trex.velocityY + 1;
  ground.velocityX = -5;
  if(ground.x<0){
    ground.x = ground.width/2;
    
  }
  spawnClouds();
  spawnObstacles(); 
  }
  }else
    if(gamestate === END) {
      ground.velocityX = 0;
      trex.velocityX = 0;
      
    }
  trex.collide(invisibleground);
 
  drawSprites();
}
function spawnClouds() {
 if(frameCount % 60 === 0) {
   clouds = createSprite(600,120,10,10);
   clouds.velocityX = -5;
  clouds.addImage(clouds_image);
   clouds.scale = 0.8;
   clouds.y = Math.round(random(70,100));
   trex.depth = clouds.depth + 1;
   cloudsGroup.add(clouds);
}
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    obstacle = createSprite(600,170,10,10);
    obstacle.velocityX = -5;
    rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obs1);
        break;
            case 2: obstacle.addImage(obs2);
        break;
            case 3: obstacle.addImage(obs3);
        break;
            case 4: obstacle.addImage(obs4);
        break;
            case 5: obstacle.addImage(obs5);
        break;
            case 6: obstacle.addImage(obs6);
        break;
    }
    obstacle.scale = 0.5;
    obstacle.lifetime = 120;
    obstaclesGroup.add(obstacle);
  }
}
