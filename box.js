class Box {
    constructor(x,y,width, height) {
      var options = {
          isStatic: true,
          density: 1.2

      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.height=height;
      this.width=width;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }