class Drop {

    constructor(x, y) {
        var options={
         restitution: 0.1,
         friction: 0.001
      };
      this.body = Bodies.rectangle(x, y, 3, 3, options);
      this.width = 3;
      this.height = 3;
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      fill("blue");
      ellipseMode(RADIUS)
      ellipse(pos.x, pos.y, this.width, this.height);
    }

     update(){
       if(this.body.position.y>700){
          console.log(this.body.position.y);
          Matter.Body.setPosition(this.body,{x: random(0,400),
          y: random(0,400)
          });
        }
     }
  }