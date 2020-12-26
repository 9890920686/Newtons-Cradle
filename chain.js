class Chain {

    constructor(body1,body2,offsetx){
    
    this.offsetx=offsetx
   
    
    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetx,y:this.offsety}
    }
    this.chain=constraint.create(options)
    World.add(world,this.chain)
    }
    display(){

      var posx,posy;
      
      posx=body2.position.x-offfsetx
     

      pos1x=body1.position.x
      pos1y=body1.position.y
          
line(pos1x,pos1y,posx,thsi.body2.position.y);

    }
}

























