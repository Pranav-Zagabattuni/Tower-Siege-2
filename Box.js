class Box {
  constructor(x, y, color) {
    var options = {
      isStatic: false,
      restitution: 0.4,
      friction: 0
    }
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.color = color;
    World.add(world, this.body);
    this.visibility = 255;
  }
  display() {
    if (this.body.speed < 5) {
      var pos = this.body.position;
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, 30, 40);
    }
    else {
      push();
      World.remove(world, this.body);
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      pop();
    }
  }
}
