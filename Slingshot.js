class Slingshot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA, 
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10

        }
        this.bodyA=bodyA;
        this.bodyB=bodyB
        this.chain = Constraint.create (options);
        World.add(world,this.chain)
    }
    display (){
        stroke(24);
        line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y)
    }
}