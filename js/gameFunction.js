class Game{
    constructor(){}

    getState(){
        var gamestateRef = database.ref("gamestate");
        gamestateRef.on("value", data => {
            gamestate = data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gamestate : state
        })
    }
    async start(){
        if(gamestate === 0){
            player = new Player();
            var playerCountRef = await database.ref("playercount").once("value");
            if(playerCountRef.exists()){
                playercount = playerCountRef
                player.getCount();
            }
            form = new Form();
            form.display();

            // player1 = new Players(windowWidth/3,windowHeight/11.5,player1img);
            // player2 = new Players(windowWidth/3,windowHeight/7.5,player2img);
            // player4 = new Players(windowWidth/3,windowHeight/7.5,player2img);
            // player2 = new Players(windowWidth/3,windowHeight/7.5,player2img);
            // player = [player1, player2, player3, player4]; 
        }
    }
    play(){
        form.hide();
        Player.allPlayerInfo();
        textSize(30);
        text("GAME START", windowWidth/2, windowHeight/3);
        if(allplayers!==undefined){
            // var index = 0;
            // var x;
            // var y;
            var displayPosition;
            for(var plr in allplayers){
                if(plr === "player"+ player.index){
                    fill("red");
                }else{
                    fill("black");
                }
                displayPosition+=20;
                textSize(15);
                text(allplayer[plr].name + ":" + allplayer[plr].laps, windowWidth/3, windowHeight/2+displayPosition);
                index = index+1;
                // y=windowHeight-allplayers[plr].positionY;
                // x=windowHeight-allplayers[plr].positionX;
                // player[index-1].x = x;
                // player[index-1].y = y;
            }
        }
        if(player.index!==null){
            if(keyIsDown(LEFT_ARROW)){
                player.positionX -=5;
                player.update();
            }        if(keyIsDown(RIGHT_ARROW)){
                player.positionX +=5;
                player.update();
            }        if(keyIsDown(UP_ARROW)){
                player.positionY -=5;
                player.update();
            }        if(keyIsDown(DOWN_ARROW)){
                player.positionY +=5;
                player.update();
            }
        }
    }
}