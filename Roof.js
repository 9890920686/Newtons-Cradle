class Roof {

constructor(x,y,width,height){

var options={isStstic:true}

this.body=Bodies.rectangle(x,y,width,height,options)

this.width=width
this.height=height

World.add(world,this.body);

}
display () {

rectMODE(CENTER);

fill("brown")
rect(this.body.position.x,this.body.position.y,this.width,this.height)

}

}


	/*Roof=createSprite(400,250,300,15);
    Roofbody=Bodies.rectangle(400,250,300,15,{isStatic:true})
	World.add(world,Roofbody)*/