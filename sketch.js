
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200, 100);
	plane = new Plane(600, height, 1200, 20);
	stone = new Stone(700, 320, 70, 70);
	rubber = new Rubber(200,300,80);
	iron= new Iron(400,400,100,100);
	sand1= new Sand(300,100,20);
	sand2= new Sand(500,200,20);
	sand3= new Sand(100,600,20);
	sand4=new Sand(670,300,20);
	

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	hammer.display();
	plane.display();
	stone.display();
	rubber.display();
	iron.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();

	drawSprites();

}



