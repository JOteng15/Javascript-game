class flanders{
	constructor(ctx){
		this.ctx = ctx
		this.position = {
			x:0,
			y:0
		}
		this.velocity = {
			x:0,
			y:5
		}
	
		const base = new Image()
		base.src = 'flanders.png' 
		base.onload = () => {
			this.base = base
			this.position = {
				x: 20,
				y:0
			}
		}
	
	}
	
	draw(){
		ctx.drawImage(this.base,this.position.x,this.position.y)
	}
	
	update(){
		this.draw()
		this.position.y+=this.velocity.y
		if (this.position.y >= 450){
			this.draw()
			this.velocity.y= -1*this.velocity.y
		}
		
		else if (this.position.y <= 0 ){
			this.draw()
			this.velocity.y = Math.abs(this.velocity.y)
			this.draw()
			
		}
			
	}

}

		
	
	
		
		
	
	
		
		