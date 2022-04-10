var basket;
var snowball;
var snowballImg;
var basketImg;
var score = 0
var bgImg

function preload(){
bgImg = loadImage("assets/background.png");
snowballImg = loadImage("assets/snowball.png");
basketImg = loadImage("assets/basket.png");


}

function setup(){
  createCanvas(800,800);
  snowball = createSprite(Math.round(random(50,750)),0);
  snowball.addImage("snowball",snowballImg)
  snowball.scale = 0.5
  snowball.velocityY = 4

  basket = createSprite(400,750);
  basket.addImage("basket",basketImg);
  basket.scale = 0.5
  /*basket.debug = true
  basket.setCollider("circle",0,0,50);*/
}

function draw(){
 background(bgImg)
 textSize(30)
  text("score:"+score,600,50);
  //background("black")
 drawSprites()
 if(keyDown(RIGHT_ARROW)){
   basket.x += 5
  } 
  if(keyDown(LEFT_ARROW)){
    basket.x -= 5
  }
  spawnSnowball()
  if(snowball.y>height){
    snowball.remove()
    stroke("red")
    fill("white")
    text("Game Over",320,400);
    basket.visible = false
    
  }
}

function spawnSnowball(){
  if(snowball.y>height-20 && (snowball.x>basket.x-20 && snowball.x<basket.x+20)){
    score+=1
    //snowball.remove()
    snowball.y = 0
    snowball.x = Math.round(random(50,750));
  }
}


