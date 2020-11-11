class tree{

    constructor(x,y,w,h)
    {
        var options={
            isStatic:true			
            }
        this.x=x;
        this.y=y;
        this.w=w
        this.h=h
        this.image=loadImage("tree.png");
        this.body=Bodies.rectangle(x, y, w, h , options);
         World.add(world, this.body);
    
    }
    display()
    {
            
            var groundPos=this.body.position;		
    
            push()
            translate(groundPos.x, groundPos.y);
            strokeWeight(4);
            fill(255,255,0)
            imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
            pop()
            
    }
    }