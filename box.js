class Box{
    constructor(x,y,width,height){
        var options ={
            restitution:1.0,
            friction:0.3,
            density:1.0
          }
        this.body =Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
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
        fill("blue");
  rect(0,0,50,50);
  pop();
    }
}