var dustbinObj;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  rectMode(CENTER);
	createCanvas(1000,400);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,400,1200,20);
  dustbinObj = new Dustbin(880,380,150,20);
  ball=new  Paper(200,270, 20);
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
 
  ground.display();
  dustbinObj.display();
  ball.display();

  drawSprites();

}

function keyPressed() {
if (keyCode=== UP_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-60});
}
}

