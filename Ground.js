class Ground {
    constructor(x, y, width, height){
        var options = {
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body)
    }
    display(){
        var gropos = this.body.position;
        rectMode(CENTER);
        fill(215, 215, 0);
        rect(gropos.x, gropos.y, this.width, this.height);
    }
}