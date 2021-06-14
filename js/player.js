class Player{
    constructor(){
    this.index=0;
    this.name=null;
    this.distance=0;
    }

    getCount(){
        database.ref('playerCount').on("value", function(data){
            playerCount=data.val()
        })
    }
    updateCount(count){
   database.ref('/').update({playerCount:count})

    }

    update(){
        var playerIndex="players/player"+playerCount
        database.ref(playerIndex).set({
            Name:this.name,
            Distance:this.distance
        })
    }
    static getPlayerinfo(){
    database.ref('players').on("value", (data)=>{
        allPlayers=data.val()
    })
    }
}