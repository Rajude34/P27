class bob{

    constructor(x,y){
    var options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0.5,
    density: 1.2
    }
    
    bobObject1, 
    bobObject2,
    bobObject3,
    bobObject4,
    bobObject5,

    this.body = Bodies.circle(x,y,50,options)
    this.r = 50
    World.add(world,this.body)
    
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(5)
        stroke("black")
        ellipse(0, 0, this.r, this.r);
        pop();
    
    }
    
    
    
    }