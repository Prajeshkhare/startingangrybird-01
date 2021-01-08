const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies


var engine,world,ground
var box1, box2
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world

box1= new Box(200,390,50,100)
box2=new Box(230,300,50,100)
 ground= new Ground(200,height,400,20)



}

function draw() {
  background(0);  
  Engine.update(engine)
 
  box1.display()
  box2.display()
  ground.display()
 
 drawSprites();
}