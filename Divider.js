class Divider {
    constructor(x, y, width, height) {
        var Options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, Options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        stroke(255)
        fill(0);
        rect(0, 0, this.width, this.height);
        pop();
    }
}