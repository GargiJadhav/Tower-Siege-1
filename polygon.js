class Polygon
{
constructor(x,y,radius){
var options = {isStatic:false};
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("polygon.png");
    World.add(world,this.body);
}
display(){
var pos = this.body.position;
//ellipse(this.image,pos.x,pos.y,this.radius,this.radius);
imageMode(CENTER);
image(this.image,pos.x,pos.y,this.radius,this.radius);

}
}