class bullets{
	constructor({position,velocity},colour){
		this.ctx = ctx
		this.position = position
		this.velocity = velocity
		this.radius = 5
		this.colour = colour
	}
	draw(){
		ctx.beginPath()
		ctx.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI)
		ctx.fillStyle = this.colour
		ctx.fill()
		ctx.closePath()
	}
	
		
	update(){
		this.draw()
		this.position.x+=this.velocity.x
		this.position.y+=this.velocity.y
	}

}
			
		