class Form{
    constructor(){
        this.input = createInput("Name");
        this.playbutton = createButton("Play");
        this.greeting = createElement("h1");
        this.wait = createElement("h1");
    }
    hide(){
        this.input.hide();
        this.playbutton.hide();
        this.greeting.hide();
        this.wait.hide();
    }
    display(){
        var title = createElement('h1');
        title.html("OBSTACLE LEAGUE");
        title.position(windowWidth/2.5, windowHeight/3.5);

        var input = this.input;
        input.position(windowWidth/3,windowHeight/2);
        var playbutton = this.playbutton;
        playbutton.position(windowWidth*2/3, windowHeight/2);

        this.playbutton.mousePressed(function(){
            input.hide();
            playbutton.hide();

            player.name = input.value();
            playercount = playercount+1;
            player.index = playercount;
            player.update();
            player.updateCount(playercount);

            var greeting = this.greeting;
            var wait = this.wait;
            greeting.position(windowWidth/2.5, windowHeight/3);
            greeting.html("NAMASTE " + player.name);
            wait.position(windowWidth/3.75, windowHeight/2);
            wait.html("PLEASE WAIT TILL OTHER PLAYERS JOIN");
        })
            

    }
}