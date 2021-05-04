class Rope{
    constructor(body1, body2,offsetX,offsetY){
        var options = {
            body1 : body1,
            body2 : body2,
            pointB : {x:this.offsetX , y:this.offsetY}
           
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }  
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        var roopX = pointA.x + this.offsetX;
        var roopY = pointB.y + this.offsetY;
        strokeWeight(3);
        stroke(black);
        line(pointA.x,pointA.y,roopX,roopY);   
    }
    }
