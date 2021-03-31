
class Particle {
    constructor(x, y, radius) {
        var Options = {
            restitution : 0.3,
            density : 1.0
        }
        this.body = Matter.Bodies.circle(x, y, radius, Options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.radius = 10;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0, 0, this.radius);
        pop();
    }
}