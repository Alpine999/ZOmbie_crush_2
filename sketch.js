const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base

function preload(){

  zombie = loadImage("./assets/zombie.png")




}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base = new Base(200,690,600,20)

  Matter.Composite.add(bridge.body, jointPost)

  jointLink = new link(bridge,jointPost)

  zombie = createSprite(width / 2, height - 110);
  zombie.addanimation("lefttoright", zombie1, zombie2, zombie1)
  zombie.addanimation("lefttoright", zombie3, zombie4, zombie3)
  zombie.scale = 0.1;
  zombie.velocityX = 10;
  
  breakButton = createButton("")
  breakButton.position(width - 200, height / 2 - 50);
  breakButton.class("breakbutton");
  breakButton.mousePressed(handleButtonPress);

  
}

function draw() {
  background(51);
  Engine.update(engine);
  base.show();
  jointLink.show();

  drawSprites();
}
function handleButtonPress() {
  jointLink.detach();
  setTimeout(() => {
    bridge.break();
  }, 1500);
}