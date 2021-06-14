class Game{
    constructor(){

    }

    getState(){
        database.ref('gameState').on("value", function(data){
            gameState=data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
   if(gameState===0){
       player=new Player()
       player.getCount()
       form=new Form()
       form.display()
       }
       car1=createSprite(100, 200)
       car2=createSprite(300, 200)
       car3=createSprite(500, 200)
       car4=createSprite(700, 200)
       cars=[car1,car2,car3,car4]
    }

    play(){
        form.hide()
        Player.getPlayerinfo()
        if(allPlayers!==undefined){
            var y
            var x=0
            var index=0
            for(var plr in allPlayers){
                index=index+1;
                x=x+200
                y=displayHeight-allPlayers[plr].Distance;
                cars[index-1].x=x
                cars[index-1].y=y
                
                if(plr===player.index){
                 cars[index-1].shapeColor="green"
                 camera.position.x=displayWidth/2
                 camera.position.y=y
                }
                else{
                    cars[index-1].shapeColor="blue"
                }
                
                
            }
        }
        if(keyIsDown("up")&&player.index!==0){
            player.Distance+=50
            player.update()
        }
        drawSprites();
    }
}