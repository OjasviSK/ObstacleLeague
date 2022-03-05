const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var database;
var gamestate = 0;
var playercount;
var form, player, game;
var allplayers;

var bgImg;
var barrier1Img,barrier1;
var barrier2Img,barrier2;
var barrier3Img,barrier3;
var barrier4Img,barrier4;
var player1, player2, player3, player4
var player1img, player2img, player3img, player4img;
var goal;
var players = []

function preload(){
  bgImg = loadImage("images/ground.png");
  barrier1Img = loadImage("images/barrier1.png");
  barrier2Img = loadImage("images/rock1.png");
  player1img = loadImage("images/ball1.png");
  player2img = loadImage("images/ball2.png");
}


function setup() {


  engine = Engine.create();
  world = engine.world;

  createCanvas(windowWidth, windowHeight-111);

  database = firebase.database();
  console.log(database);

    game = new Game();
    game.getState();
    game.start();
    
  


  goal = Bodies.rectangle(windowWidth/5,windowHeight/10,20,50);
  

  // barrier1 = new Barriers(Math.round(random(3*windowWidth/8,5.75*windowWidth/8)),Math.
  // round(random(windowHeight-windowHeight+70,windowHeight-windowHeight+30)),50,50,barrier1Img);
  // barrier2 = new Barriers(Math.round(random(3*windowWidth/8,5.75*windowWidth/8)),Math.
  // round(random(windowHeight-windowHeight+70,windowHeight-windowHeight+30)),50,50,barrier2Img);


}

function draw() {
  background(bgImg);

  if(playercount === 4){
    game.update(1);
    background(bgImg);
  }
  if(gamestate === 1){
    clear();
    game.play();
  }
// positionX = windowWidth/2
//positionY = windowHeight/2
  // if(keyDown("Down")){
  // }
  // if(keyDown("Up")){
  // }  
  // if(keyDown("Right")){
  // }  
  // if(keyDown("Left")){
  // }




  ellipseMode(CENTER);

  rect(goal.x, goal.y,20,50);

  // player1.display();
  // player2.display();

  // barrier1.display();
  // barrier2.display();
  drawSprites();
}
