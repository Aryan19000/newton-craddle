class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA: body1,
            bodyB: body2,
            bodyC: {x: this.offsetX, y: this.offsetY}
        }
        this.bodyC={x: offsetX, y: offsetY};
        this.rope=Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        var pointC=this.bodyC;
        strokeWeight(5);
        stroke("white");
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        line(pointA.x, pointA.y, pointC.x, pointC.y);
    }
}