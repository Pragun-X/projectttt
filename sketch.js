var paper;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;

	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
	 World.add(world, ground);
	 

	bottom= new Box (1100,690,300,150)
	left= new Box(1000,590,20,100);
	right= new Box(1150,590,20,100);
	paper= new Paper (400,400,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255)
  fill("black")
  rect(ground.position.x,ground.position.y,1600,30);
  

  bottom.display();
  left.display();
  right.display();
  paper.display();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:70, y:-55});
    
  }
}



