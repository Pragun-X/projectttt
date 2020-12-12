class Box{



constructor(x,y,width,height){

    var option= {
        isStatic:true
    }

this.width= width;
this.height= height;
this.body= Bodies.rectangle(x,y,width,height,option);
this.image = loadImage("dustbingreen.png");
World.add(world,this.body);



}

display(){

    var pos= this.body.position;

    imageMode(CENTER);
    fill("red");
    image(this.image,1050,570,this.width,this.height);

}

}