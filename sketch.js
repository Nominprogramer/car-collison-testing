let car,wall,deformation;
let PLAY = 1;
let END = 0;
let state = PLAY;

function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 50, 50);
  wall = createSprite(750,200,50,200);



}

function draw() {


  let speed = Math.round(random(55,90));
  let weight = Math.round(random(400,1500));
  let con1 = car.width/2 + wall.width/2;
  if(state === PLAY){
    deformation = (0.5 * weight * speed * speed )/22500;
  }
  background(255,255,255);
  car.velocityX = speed; 
  if((wall.x- 15) - car.x < con1 ){
    car.velocityX = 0;


    if(deformation < 100){
      car.shapeColor = "green";
      deformation = 0;
      state = END;
    }

    else if(deformation > 100 && deformation <= 180){
      car.shapeColor = "yellow";
      deformation = 100;
      state = END;
    }

    else if(deformation > 180){
      car.shapeColor = "red";
      deformation = 181;
      state = END;
    }

  }
  drawSprites();
}