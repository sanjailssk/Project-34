
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var BobObj1, BobObj2, BobObj3, BobObj4, BobObj5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
  createCanvas(1900, 500);

  //canvas = createCanvas(windowWidth / 3, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here
  BobObj1 = new Pendulum(680, 580, 0);
  BobObj2 = new Pendulum(740, 580, 0);
  BobObj3 = new Pendulum(800, 580, 0);
  BobObj4 = new Pendulum(860, 580, 0);
  BobObj5 = new Pendulum(920, 580, 0);
  rope1 = new Sling(BobObj3.body, { x: 800, y: 110 });
  rope2 = new Sling(BobObj4.body, { x: 860, y: 110 });
  rope3 = new Sling(BobObj5.body, { x: 920, y: 110 });
  rope4 = new Sling(BobObj2.body, { x: 740, y: 110 });
  rope5 = new Sling(BobObj1.body, { x: 680, y: 110 });

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  BobObj1.display();
  BobObj2.display();
  BobObj3.display();
  BobObj4.display();
  BobObj5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function mouseDragged() {
  Matter.Body.setPosition(BobObj1.body, { x: mouseX, y: mouseY });
}



