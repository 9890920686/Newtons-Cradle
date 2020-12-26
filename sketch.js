
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var Roof1
var bob1,bob2,bob3,bob4,bob5
var c1,c2,c3,c4,c5

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof1 = new Roof(400,250,150,15);

	//bob1 = new Bob(340,450,30);
	//bob2 = new Bob(370,450,30);
	//bob3 = new Bob(400,450,30);
	//bob4 = new Bob(430,450,30);
	//bob5 = new Bob(460,450,30);

	c1 = new Chain(bob1,Roof1,60,0)
	c2 = new Chain(bob2,Roof1,30,0)
	c3 = new Chain(bob3,Roof1,0,0)
	c4 = new Chain(bob4,Roof1,-30,0)
	c5 = new Chain(bob5,Roof1,-60,0)
	
	Engine.run(engine);
  
}


function draw() {
	background(0);
 

  Roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  

 
}



