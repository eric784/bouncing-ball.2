const bodies = Matter.Bodies
const world = Matter.World
const engine = Matter.Engine

var ground,engine
var world, ball

function setupI(){
 create Canvas(400,400)
 engine=engine.create()
 world=engine.world()
 
 
 var ground_options={
     isStatic:true
 }
ground=Bodies.rectangle(250,300,200,20,ground_options)

World.add(world,ground)

var ball_options={
    "restitution":1.0
}

ball=Bodies.circle(10,10,40,ball_options)
World.add(world,ball)

display(){
   rect(ground.possition.x,ground.possition.y,10,10)
    rectMode(RADIUS)
 elipse(ball.possition.x,ball.possition.y,10,10)
    elipseMode(RADIUS)
}
