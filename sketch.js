
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball = new Paper(150, 0, 20);
	Low = new Dustbin(1100, 500, 200, 20);
	Left = new Dustbin(1010, 460, 20, 100);
	Right = new Dustbin(1190, 460, 20, 100);
	stand = new Ground(1000, 515, 2000, 30);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();

  drawSprites();
  ball.display();
  Low.display();
  Left.display();
  Right.display();
  stand.display();
}


function keyPressed() {
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position,{x:4, y:-4}); 		
		
	}
}
