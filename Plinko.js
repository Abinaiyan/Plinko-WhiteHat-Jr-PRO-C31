class Plinko {
    constructor(x, y, radius) {
        var Options = {
            isStatic : true
        }
        this.body = Bodies.circle(x, y, radius, Options);
        this.radius = 10;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill(255);
        ellipse(0, 0, this.radius);
        pop();
    }
}