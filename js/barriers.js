class Barriers{
    constructor(x,y,xOffset,yOffset,imageP){
        this.xOffset=xOffset;
        this.yOffset=yOffset;
        this.image=imageP;
        this.body=Bodies.circle(x,y,xOffset,yOffset);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        translate(pos.x, pos.y);
        image(this.image,0,0,this.xOffset,this.yOffset);
        pop();
    }
}