class Umbrella{
    constructor(x, y){
        var options = { 
        'isStatic': true
        }
        this.umbrella = Bodies.circle(x, y, 85, options);
        
        var walking = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
        this.batman = createSprite(200,500);
        this.batman.addAnimation("walking",walking);
        this.batman.scale =0.5
        World.add(world, this.umbrella);
    }
 
      display(){
        

        var pos = this.umbrella.position
        stroke("white")
        noFill();
        circle(pos.x,pos.y,85)

      }



}