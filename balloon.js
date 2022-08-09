class Balloon {
    constructor(x , y , r) {

  
        balloon = loadImage("Balloon_2-removebg-preview.png")

        let options = {
            isStatic:true
           };
 
  this.body = Bodies.circle(x,y,r , options)
  this.r = r;
  World.add(myWorld , this.body)


        }

    show () {

        var pos = this.body.position;
        image(balloon , pos.x , pos.y , this.r , this.r);
       




    }
}