
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, box1, box2, box3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ball = new paper(100, 100, 20);
	ground = new Ground(600, 650, 1200, 10);
	box1 = new Box(950, 610, 10, 70);
	box2 = new Box(850, 610, 10, 70);
	box3 = new Box(900, 650, 100, 10);

}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function KeyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(paper.body, paper.body.position, {x:100, y:-110});
	}
}


