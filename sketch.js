//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;



function preload()
{
	
}

function setup() {
	createCanvas(1535,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution: 0.95,
		frictionAir: 0.01
	}

	Engine.run(engine);
  
	var ball_options={
		isStatic : false,
		restitution :0.3,
		friction : 0,
		density : 1.2,
	}
	ball = Bodies.circle(50,650,30,ball_options);
  	World.add(world,ball);

	var options = {
		isStatic: true
	}

	ground = Bodies.rectangle(0,height - 1, width * 2, 1, options);
	World.add(world,ground);
	

	//creating bucket
    ground =new Ground(width/2, 670, width, 20);
    leftSide =new Ground(1100,600,20,120);
	rightSide= new Ground(1300, 600, 20, 120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  leftSide.display();
  rightSide.display();

  ellipse(ball.position.x, ball.position.y, 60, 60)
  drawSprites();

   
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:30, y:-40})
	}
}