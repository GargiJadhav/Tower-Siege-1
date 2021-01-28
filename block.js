class Block
{
constructor(x,y,width,height){

    var options = {isStatic:false};
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    
    World.add(world,this.body);

}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    stroke("red");
    strokeWeight(4);
    push();
   
    rotate(angle);
    translate(pos.x,pos.y);
rect(0,0,this.width,this.height);
pop();


}




}