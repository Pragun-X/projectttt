class Paper{

    constructor(x,y,r){
        var options={
            restitution:0.5   ,
            density :1,
            friction:1
        }
        
        this.body=Bodies.circle(x,y,r,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body)
        this.r=r;


    }

    display(){

      var pos= this.body.position;
      fill("blue")
      imageMode(RADIUS)
      image(this.image,this.r,this.r)
    }


}