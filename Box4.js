class Box4{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1.5);
        fill("red");
        rect(0, 0, 50, 50);
        pop();
    }
    else{
        World.remove(world,this.body);
 push();
 this.Visibility=this.Visibility-5;
 tint(255,this.Visibility);
pop();
    }
}
score(){
    if(this.Visibility<0 && this.Visibility>= -105){
    score++
    console.log(score);
     }
 
   }
  }