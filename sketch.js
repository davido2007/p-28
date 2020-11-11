const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stoneobj;
var boy;
var ground;
var mango1, mango2, mango3, mango4, mango5;
var tree;
function preload()
{
	boyIMG=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy=createSprite(270,440,60,30);
	boy.addImage(boyIMG)
	boy.scale=0.6

	ground = new ground(200,390,800,20);
	
	Slingshot = new Slingshot(235,420,3,3);
	
     tree= new tree(700,200,100,600);
	mango1=new mango(750,40,70);

	//Create the Bodies Here.
	stoneobj=new stone(235,420,30);
	
	detectollision(stoneobj,mango1);
	detectollision(stoneobj,mango2);
	detectollision(stoneobj,mango3);
	detectollision(stoneobj,mango4);
	detectollision(stoneobj,mango5);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boy.display();
  tree.display();
  stoneobj.display();
  mango1.display();
  ground.display();
  drawSprites();
 
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body.false);
	}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stoneobj.body, {x:235, y:420})
		Slingshot.attach(stoneobj.body);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY});
        
    
}
function mouseReleased(){
    slingShot.fly();
}

