var wall1,wall2,wall3,wall4;
var car1,car2,car3,car4;
var road1,road2,road3,road4;





function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);


  car = createSprite(50,200,50,50);
  car.shapeColor = "pink";
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background("black");

  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;

    if(deformation > 180 ) {
      car.shapeColor  = "red";
    }

    if(deformation < 180&&deformation > 100){
      car.shapeColor = "green";
    }

    if(deformation < 100){
      car.shapeColor = "blue";
    }
  }
  

  

  
  



  drawSprites();
}