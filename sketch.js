
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var treeobject,stoneobject,groundobject,chainobject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world;
var boy;
var launchingforce=100;

function preload(){
	boy = loadImage("Pluckingmangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneobject=new Stone(235,420,30);

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mango(1120,50,40);
	mango12=new Mango(900,160,40);

	treeobject=new Tree(1050,580);
	groundobject=new Ground(width/2,600,width,20);
	chainobject=new Chain(stoneobject.body,{x:235,y:420})

	var render=Render.create({
		element:document.body,
		engine:engine,
		options: {
			width:1300,
			height:600,
			wireframes:false
		}
	  });


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);

  stoneobject.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  treeobject.display();
  groundobject.display();
  chainobject.display();

  detectollision(stoneobject,mango1);
  detectollision(stoneobject,mango2);
  detectollision(stoneobject,mango3);
  detectollision(stoneobject,mango4);
  detectollision(stoneobject,mango5);
  detectollision(stoneobject,mango6);
  detectollision(stoneobject,mango7);
  detectollision(stoneobject,mango8);
  detectollision(stoneobject,mango9);
  detectollision(stoneobject,mango10);
  detectollision(stoneobject,mango11);
  detectollision(stoneobject,mango12);

 
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneobject.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	chainobject.fly();
   
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneobject.body, {x:235, y:420}) 
	  launcherObject.attach(stoneobject.body);
	}
  }

  function detectollision(istone,imango){
	
  MangoBodyPosition=imango.body.position
  StoneBodyPosition=istone.body.position
  
  var distance=dist(StoneBodyPosition.x, StoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
  
  	if(distance<=imango.r+istone.r)
    {
     
  	  Matter.Body.setStatic(imango.body,false);
    }

  }



