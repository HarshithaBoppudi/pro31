const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions;
//var divisionHeight=250;


function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;
 // createSprite(400, 200, 50, 50);
ground= new Ground(240,660,480,20);
division1=new Divisions(10,530,10,250)
division2=new Divisions(80,530,10,250);
division3=new Divisions(160,530,10,250);
division4=new Divisions(240,530,10,250)
division5=new Divisions(320,530,10,250);
division6=new Divisions(400,530,10,250);
division7=new Divisions(400,530,10,250);
division8=new Divisions(470,530,10,250);
//division9=new Divisions(400,530,10,250);
//division10=new Divisions(450,530,10,250);


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
if(frameCount%60===0){
  particles.push(new  Particle(random(width/2-10,width/2+10),10));
}

}

function draw() {
  background(0); 
  
  ground.display();
  division1.display(); 
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  //division9.display();
  //division10.display();
 // division5.display();
  for(var j=0;j<plinkos.length;j++){

    plinkos[j].display();
  }
  for(var k=0;k<particles.length;k++){
    particles[k].display();
  }


 // drawSprites();
}