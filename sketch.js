const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var turn=0;
var gameState=play;
function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;
 // createSprite(400, 200, 50, 50);
ground= new Ground(240,690,480,20);

/*division1=new Divisions(10,530,10,250)
division2=new Divisions(80,530,10,250);
division3=new Divisions(160,530,10,250);
division4=new Divisions(240,530,10,250)
division5=new Divisions(320,530,10,250);
division6=new Divisions(400,530,10,250);
division7=new Divisions(400,530,10,250);
division8=new Divisions(470,530,10,250);
//division9=new Divisions(400,530,10,250);
//division10=new Divisions(450,530,10,250);*/


for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinkos(j,75));
}
for(var j=15;j<=width-10;j=j+50){
  plinkos.push(new Plinkos(j,175));
}
for(var j=30;j<=width-15;j=j+50){
  plinkos.push(new Plinkos(j,265));
}
for(var j=30;j<=width-10;j=j+60){
  plinkos.push(new Plinkos(j,350));
}
for(var k=0;k<=width;k=k+80){
divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}



}

function draw() {
  background(0); 
  textSize(30);
  text("score:"+score,200,50);
  Engine.update(engine);
  ground.display();
  
 /* division1.display(); 
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();*/
  //division9.display();
  //division10.display();
 // division5.display();
 if(frameCount%60===0){
  particles.push(new Particle(random(0,400),10,10));
}
  for(var j=0;j<plinkos.length;j++){

    plinkos[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var a=0;a<particles.length;a++){
    particles[a].display();
  }


 // drawSprites();
}
function mousePressed(){
  if(gameState!=="end"){
    count++
    particle=new Particle(mouseX,10,10,10)
  }
}