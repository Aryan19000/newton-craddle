
class Bob{  
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
        this.body=Bodies.circle(x, y, 50, options);
        this.radius=50;
	    World.add(world, this.body);   
   }
   display(){
    fill("red");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, 50, 50);
   }
}