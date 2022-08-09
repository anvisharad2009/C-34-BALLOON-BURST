const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myEngine , myWorld
var wall1 , wall2 , wall3
var button , blower
var balloon ;
var myBalloon;


function preload()
{
  balloon = loadImage("Balloon_2-removebg-preview.png")
}


function setup ()
{
    createCanvas(700 , 500) 
    myEngine = Engine.create();
    myWorld = myEngine.world

    wall1=new Wall (10 , 200 , 20 ,600);
    wall2=new Wall(690  , 100  , 20  , 800)
    wall3=new Wall(350 , 490 , 700 , 20)

    //balloon = new Balloon (20 , 100 , 50);

    blower = createImg("balloon.png");
    blower.position(10 , 80)
   blower.size(180 , 120)
    blower.mouseClicked(airBlow)

   myBalloon = Bodies.circle(400 , 400 , 20);
   World.add(myWorld , myBalloon);
    


    rectMode(CENTER);  
    ellipseMode(RADIUS);
}



function draw ()
{
    background(51)

Engine.update(myEngine);

wall1.display()
wall2.display()
wall3.display()


push()
imageMode(CENTER)

if(myBalloon != null){
    image(balloon , myBalloon.position.x , myBalloon.position.y , 70 , 70)
    
}

pop() 
Matter.Body.setVelocity(myBalloon , {x:0 , y:-2})

var collision = Matter.SAT.collides(wall2.body , myBalloon); 
if(collision.collided){
    Matter.World.remove(myWorld , myBalloon);
    end();
}


//balloon.show()

}

function airBlow() {
   Matter.Body.applyForce(myBalloon , {x:0 , y:0} , {x:0.09 , y:0}) 
}

function end() {
    fill("white")
    textSize(18);
    text("oh no ! the balloon has burst :(" , 250 , 250);
}


//function spawnBalloons() {
    //if (frameCount % 60 === 0) {
        //var balloon = createSprite(200 , 100 , 50);
      //  balloon.velocityY = -5 ;
    //    
  //  }  
//}