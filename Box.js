class DropBox{
    constructor(x, y,widht,height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
                  }
        this.binbody=Bodies.rectangle(x,y-50,this.width1,this.height1,options);
        this.width = 200;
        this.height = 100;
        this.thickness=20;
        this.width1=160;
        this.height1=100;
        this.image=loadImage("images/Bin.JPG");
        this.bottombody = Bodies.rectangle(x, y,this.width, this.thickness, options);
        this.rightbody = Bodies.rectangle(x+85,y-50,this.thickness,this.height, options);
        this.leftbody = Bodies.rectangle(x-85,y-50,this.thickness, this.height, options);
        
        
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.binbody);
        World.add(world, this.bottombody);
        World.add(world, this.leftbody);
        World.add(world, this.rightbody);
      }
      display(){

        push();
        translate(this.bottombody.position.x, this.bottombody.position.y);
        //rotate(angle);
        fill(255,0,0);
        noStroke();
        rectMode(CENTER);
        rect( 0, 0, this.width, this.thickness);
        pop();
        push();
        translate(this.rightbody.position.x, this.rightbody.position.y);
       // rotate(angle);
       fill(255,0,0);
        noStroke();
        rectMode(CENTER);
        rect( 0, 0, this.thickness, this.height);
        pop();
        push();
        translate(this.leftbody.position.x, this.leftbody.position.y);
        //rotate(angle);
        fill(255,0,0);
        noStroke();
        rectMode(CENTER);
        rect( 0, 0, this.thickness, this.height);
        pop();
        push();
        translate(this.binbody.position.x, this.binbody.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width1, this.height1);
        pop()
      }

}