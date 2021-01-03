
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, tree;

function preload()
{
	boy = loadImage("images/boy.png");
	tree = loadImage("images/ tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = (650, 650);
	World.add(world,tree);

	stone1 = new Stone(235,420,30);
	mango1 = new Mango();
	mango2 = new Mango();
	mango3 = new Mango();
	mango4 = new Mango();
	mango5 = new Mango();
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  drawSprites();
 
}

function detectCollision(LStone,LMango){
	mangoBodyPosition = LMango.body.position
	stoneBodyPosition = LStone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
		if(distance<=LMango.r+LStone.r){
			Matter.Body.setStatic(LMango.body, false);

		}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x:235, y:420})
		boy.attach(stone1.body);

	}
}

