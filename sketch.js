
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,ground2;
var hexagon;
var slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box01,box02,box03,box04,box05,box06;
var backgroundImg;

var score = 0;

function preload() {
  getBackgroundImage();
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

    ground1 = new Ground(530,550,300,20);
    ground2 = new Ground(900,300,250,20);

    hexagon = new Hexagon(200,400,70,70);

      slingshot = new Slingshot(hexagon.body,{x:200,y:400});	

    box1 = new Box1(420,530);   
    box2 = new Box1(470,530);   
    box3 = new Box1(520,530);   
    box4 = new Box1(570,530);   
    box5 = new Box1(620,530);  
    box6 = new Box2(450,480);  
    box7 = new Box2(500,480);  
    box8 = new Box2(550,480);  
    box9 = new Box2(600,480);  
    box10 = new Box3(480,430);  
    box11 = new Box3(530,430);  
    box12= new Box3(580,430);  
    box13 = new Box4(510,380);  
    box14 = new Box4(560,380);  
    box15 = new Box4(540,330); 

    box01 = new Box2(850,250);
    box02 = new Box2(900,250);
    box03 = new Box2(950,250);
    box04 = new Box3(880,200);
    box05 = new Box3(930,200);
    box06 = new Box1(910,150);
    
      Engine.run(engine);
  
}


function draw() {
  if(backgroundImg){
    background(backgroundImg);
}

  Engine.update(engine);

  
  ground1.display();
  ground2.display();

  hexagon.display();
  slingshot.display();

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();

  box01.display();
  box01.score();
  box02.display();
  box02.score();
  box03.display();
  box03.score();
  box04.display();
  box04.score();
  box05.display();
  box05.score();
  box06.display();
  box06.score();

  strokeWeight(1);
    textSize(35);
    fill("white");
    text("Score:"+score,750,40);
    
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32)
  {
   slingshot.attach(hexagon.body);
  }
 }

 async function getBackgroundImage(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");  
  var responseJSON = await response.json();
  var datetime = responseJSON.currentDateTime;
  var hour = datetime.slice(11,13);   
  if(hour>= 06 && hour<= 19){
 bg = "bg1.png";
  }
  else{
      bg = "bg2.png"
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}