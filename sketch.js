var gameState=0
var playerCount
var player, form , game
var allPlayers
var car1, car2, car3, car4
var cars

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-15, displayHeight-15);
  game=new Game()
  game.getState()
  game.start()

  
}

function draw(){
 if(playerCount===4){
   game.update(1)
 }  
 if(gameState===1){
   game.play()
 }
}

