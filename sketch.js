
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinobj, dustbinimg;

function preload() {
     dustbinimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1535,600);

	engine = Engine.create();
	world = engine.world;

	dustbinobj = createSprite(1320,450,50,50);
	dustbinobj.addImage(dustbinimg);
	dustbinobj.scale = 0.6;

	//Create the Bodies Here.
	paper = new Paper(100,400,50);

	dustbin1 = new Dustbin(1260,450,20,180);
	dustbin2 = new Dustbin(1320,510,140,20);
	dustbin3 = new Dustbin(1380,450,20,180);

	ground = new Ground(400,560,2500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  drawSprites()
  paper.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  dustbinobj.display()
  ground.display()
}

function keyPressed() {

	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:850,y:-465});
	}
}