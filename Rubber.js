class Rubber {
    constructor(x, y, diameter) {
        var options = {
            restitution: 0.3,
            friction: 5,
            density: 1,
        }
        this.body = Bodies.circle(x, y, diameter/2, options);
        this.diameter=diameter
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
       var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
       rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill("red");
       circle(0, 0, this.diameter);
        pop();
      }
    };
    
