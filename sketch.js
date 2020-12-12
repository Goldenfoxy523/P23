
var  wall, thickness; 

var bullet,speed,weight;

function setup() {
  
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 75, 60);
  
  thickness = Math.round(random(22,83));

  wall = createSprite(1200, 200, thickness, height/2);

  speed = Math.round(random(223,321));

  weight = Math.round(random(30,52));
  
  bullet.velocityX = speed;
  
  bullet.shapeColor = "white"

  wall.shapeColor = color(80,80,80);
}

function detectCollision(object1, object2){
  
  bulletEdge= object1.x + object1.width

  wallEdge= object2.x

  if(bulletEdge>=wallEdge){

    return  true;

  }

  else{

    return false;

  }

}

function draw() {
  background(0);  
  if(detectCollision(bullet,wall)){

    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){

      wall.shapeColor = "red"

    }
    else{

      wall.shapeColor = "green"

    }

    

  }
  
  drawSprites();
}