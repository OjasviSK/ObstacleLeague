class Player{
    constructor(){
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.name = null;
    }
    getCount(){
        var playerCountRef = database.ref("playercount");
        playerCountRef.on("value", data => {
            playercount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playercount : count
        })
    }
    update(){
        var playerindex = "players/player" + this.index;
        database.ref(playerindex).set({
            name : this.name,
            positionX : this.positionX,
            positionY : this.positionY
        })
    }
    static allplayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", data => {
            allplayers = data.val();
        })
    }
}