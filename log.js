class Log{
    constructor(x,y,height,angle){
        var options ={
            restitution:1.0,
            friction:0.3,
            density:1.0
          }
        this.body =Bodies.rectangle(x,y,20,height,options);
        this.width=20
        this.height=height
        Matter.Body.setAngle(this.body,angle);
  World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();

       rotate(angle);
       translate(pos.x,pos.y)
        rectMode(CENTER);
        strokeWeight(4);
        fill("yellow");
  rect(0,0,50,50);
  pop();
    }
}