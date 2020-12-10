class Roof{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(550, 50, 50, 50);
        this.width=800;
        this.height=50;
        World.add(world, this.body); 
    }
    display(){
        fill("grey");
        rectMode(CENTER);
        rect(550, 50, 500, 50);
    }
}