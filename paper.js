class paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction:0.5,
          density: 1.2

      }
      this.body = Matter.Bodies.circle(x,y,20,options);
      this.radius=20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("pink");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  }