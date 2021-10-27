const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var polygon_img;

function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
    createCanvas(800,400);

    engine = Engine.create();
    world = engine.world

    box1 = new Box(205, 300, "blue")
    box2 = new Box(235, 300, "blue")
    box3 = new Box(265, 300, "blue")
    box4 = new Box(295, 300, "blue")
    box5 = new Box(325, 300, "blue")
    box6 = new Box(355, 300, "blue")
    box7 = new Box(385, 300, "blue")

    box8 = new Box(235, 260,  "pink")
    box9 = new Box(265, 260,  "pink")
    box10 = new Box(295, 260,  "pink")
    box11 = new Box(325, 260,  "pink")
    box12 = new Box(355, 260,  "pink")

    box13 = new Box(265, 220,  "cyan")
    box14 = new Box(295, 220,  "cyan")
    box15 = new Box(325, 220,  "cyan")

    box16 = new Box(295, 180,  "gray")

    //Right Block //layer 1 
    box17=new Box(535,250,"lightblue"); 
    box18=new Box(565,250,"lightblue"); 
    box19=new Box(595,250,"lightblue"); 
    box20=new Box(625,250,"lightblue"); 
    box21=new Box(655,250,"lightblue"); 

    //layer 2 
    box22=new Box(565,210,"pink"); 
    box23=new Box(595,210,"pink"); 
    box24=new Box(625,210,"pink"); 

    //layer 3 
    box25=new Box(595,170,"purple")

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon, {x:100, y:200})

    ground1 = new Ground(300, 330, 250, 10);
    ground2 = new Ground(600, 280, 200, 10);
}

function draw(){
    background("lightyellow");

    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y, 40, 40);

    slingShot.display();

    ground1.display();
    ground2.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
if(keyCode == 32){
    slingShot.attach(this.polygon);
    }
}