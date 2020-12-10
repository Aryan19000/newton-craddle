
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, ground;
var bob1, bob2, bob3, bob4, bob5, roof;
var rope1, rope2, rope3, rope4, rope5;

function preload(){
	
}

function setup(){
  createCanvas(1100, 550);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground=Bodies.rectangle(550, 545, 11000, 10, {isStatic:true});
  World.add(world, ground);
  bob1=new Bob(350, 500);
  bob2=new Bob(450, 500);
  bob3=new Bob(550, 500);
  bob4=new Bob(650, 500);
  bob5=new Bob(750, 500);
  roof=new Roof();
  rope1=new Rope(bob1.body, roof.body, 350, 50);
  rope2=new Rope(bob2.body, roof.body, 450, 50);
  rope3=new Rope(bob3.body, roof.body, 550, 50);
  rope4=new Rope(bob4.body, roof.body, 650, 50);
  rope5=new Rope(bob5.body, roof.body, 750, 50);
}

function draw(){
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -200, y:-500});
  }
}

