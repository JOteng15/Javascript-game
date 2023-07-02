class homer {
	constructor(ctx,x,y){
		this.c = c
		this.ctx = ctx
		this.x = x
		this.oldX = x
		this.oldY = y
		this.y = y
		this.radius = 40
		this.speedX= 0
		this.speedY = 0
		this.width = 40
		this.bottom  = 250
		this.draw(ctx,x,y)
		
	}
	
	update(){
		this.draw(this.ctx,this.x,this.y)
	}
	
	

	draw(ctx,x,y){
		ctx.fillStyle = "yellow"
		ctx.strokeStyle = "black";
		//ctx.fillRect((x-25)+0,(y-25)+0,500,300)
		
		// outer border
		ctx.beginPath();
		this.drawCircle(ctx,(x-25)+220,(y-25)+100,50,"black",false,-1*2.9,0)	 //top of head			
		this.drawCircle(ctx,(x-25)+220,(y-25)+100,50,"yellow",true,-1*2.9,0)	 //top of head		
		ctx.strokeStyle = "black";
		//outline head and neck
		ctx.beginPath();
		this.drawLine(ctx,(x-25)+250,(y-25)+150,(x-25)+270,(y-25)+100)
		this.drawLine(ctx,(x-25)+180,(y-25)+230,(x-25)+180,(y-25)+245)
		this.drawLine(ctx,(x-25)+180,(y-25)+245,(x-25)+242,(y-25)+245)
		this.drawLine(ctx,(x-25)+244,(y-25)+166,(x-25)+242,(y-25)+245)
		this.drawLine(ctx,(x-25)+195,(y-25)+130,(x-25)+160,(y-25)+132)
		ctx.fill();
		this.drawTriangle(ctx,(x-25)+168,(y-25)+88,(x-25)+270,(y-25)+100,(x-25)+244,(y-25)+150,"yellow");
		ctx.closePath();
		ctx.fillRect((x-25)+180,(y-25)+130,60,113); //fill neck
		ctx.fillRect((x-25)+162,(y-25)+132,20,20); //fill nose
		ctx.closePath();
		
		this.drawCircle(ctx,(x-25)+248,(y-25)+160,10,"black",false,-1*Math.PI/2-0.6,2*Math.PI/3+0.1) //ear outline
		this.drawCircle(ctx,(x-25)+248,(y-25)+160,10,"yellow",true,-1*Math.PI/2-0.6,2*Math.PI/3+0.1) //ear
		this.drawCircle(ctx,(x-25)+162,(y-25)+142,10,"black",false,Math.PI/2,-1*Math.PI/2) //nose outline
		this.drawCircle(ctx,(x-25)+162,(y-25)+142,10,"yellow",true,Math.PI/2,-1*Math.PI/2) //nose
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)

		
		this.drawCircle(ctx,(x-25)+170,(y-25)+191,39,"black",true,-1*Math.PI/2,2*Math.PI/3-0.7)
		this.drawCircle(ctx,(x-25)+177,(y-25)+95,10,"black",false,-1*3.3,-1*2.1)
		
		this.drawCircle(ctx,(x-25)+177,(y-25)+115,21,"white",true,0,2*Math.PI)
		this.drawCircle(ctx,(x-25)+177,(y-25)+115,21,"yellow",true,Math.PI/3-0.3,Math.PI/2+0.7)

		this.drawCircle(ctx,(x-25)+210,(y-25)+115,21,"white",true,0,2*Math.PI)

		this.drawCircle(ctx,(x-25)+177,(y-25)+115,21,"black",false,Math.PI/3+1.2,-1*Math.PI/3+0.3)
		
			
		this.drawCircle(ctx,(x-25)+210,(y-25)+115,21,"black",false,0,2*Math.PI)
		this.drawCircle(ctx,(x-25)+175,(y-25)+115,3,"black",true,0,2*Math.PI)
		this.drawCircle(ctx,(x-25)+210,(y-25)+115,3,"black",true,0,2*Math.PI)

		this.drawCircle(ctx,(x-25)+162,(y-25)+142,10,"black",false,Math.PI/2,-1*Math.PI/2)
		
		this.drawLine(ctx,(x-25)+195,(y-25)+130,(x-25)+160,(y-25)+132)

		
		//homer's mouth
		ctx.beginPath()	
		this.drawCircle(ctx,(x-25)+154,(y-25)+164,18,"black",false,Math.PI/2+1.8,3*Math.PI/2-0.1)// other part of homer
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)
		ctx.fillStyle = "tan"
		ctx.fill()
		
	
		this.drawCircle(ctx,(x-25)+161,(y-25)+150,35,"black",false,Math.PI/2-0.5,-Math.PI/8+3.1) // need this part bottom curve
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)
		ctx.fillStyle = "tan"
		ctx.fill()
		this.drawCircle(ctx,(x-25)+183,(y-25)+189,10,"black",false,-1*Math.PI/2-0.8,-1*3*Math.PI/2-0.4)
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)
		ctx.fillStyle = "tan"
		ctx.fill()
		this.drawCircle(ctx,(x-25)+162,(y-25)+168,40,"black",false,-1*Math.PI/3+1.9,-1*Math.PI-1.2)// bottom of mouth
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)
		ctx.fillStyle = "tan"
		ctx.fill()
		this.drawCircle(ctx,(x-25)+144,(y-25)+212,7,"black",false,Math.PI/2+0.2,-1*Math.PI/2+0.5)// other part of the mouth
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)
		ctx.fillStyle = "tan"
		ctx.fill()
		this.drawCircle(ctx,(x-25)+134,(y-25)+164,4,"black",false,Math.PI/2+1.4,-1*Math.PI/2+0.5)// other part
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)
		ctx.fillStyle = "tan"
		ctx.fill()
		//this.drawCircle(ctx,170,191,39,"black",false,-1*Math.PI/2,2*Math.PI/3-0.7)
		this.drawCircle(ctx,(x-25)+170,(y-25)+191,39,"black",false,-1*Math.PI/2-0.3,2*Math.PI/3+0.3)//other part
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)
		ctx.fillStyle = "tan"
		ctx.fill()
			
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)
		//ctx.fillStyle = "tan"
		//ctx.fil()
		
		this.drawCircle(ctx,(x-25)+162,(y-25)+168,40,"black",false,-1*Math.PI/3+1.9,-1*Math.PI-1.2)// 1
		this.drawCircle(ctx,(x-25)+161,(y-25)+150,35,"black",false,Math.PI/2-0.5,-Math.PI/8+3.1) // need this part bottom curve
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)
		this.drawCircle(ctx,(x-25)+183,(y-25)+189,10,"black",false,-1*Math.PI/2-0.8,-1*3*Math.PI/2-0.4)
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)
		this.drawCircle(ctx,(x-25)+162,(y-25)+168,40,"black",false,-1*Math.PI/3+1.9,-1*Math.PI-1.2)// bottom of mouth
		this.drawLine(ctx,(x-25)+160,(y-25)+152,(x-25)+170,(y-25)+152)
		
		this.drawCircle(ctx,(x-25)+154,(y-25)+168,15,"tan",true,0,2*Math.PI)//other part
		
		ctx.beginPath()
		ctx.strokeStyle = "tan"
		ctx.moveTo((x-25)+150,(y-25)+146)
		ctx.lineTo((x-25)+160,(y-25)+155)
		ctx.lineTo((x-25)+130,(y-25)+169)
		ctx.lineTo((x-25)+129,(y-25)+167)
		ctx.fillStyle = "tan"
		ctx.fill()
		ctx.closePath()
		
		
		this.drawCircle(ctx,(x-25)+139,(y-25)+166,3,"tan",true,0,2*Math.PI)
		ctx.strokeStyle ="tan"
		ctx.stroke()
		
		//homer's hair
		this.drawCircle(ctx,(x-25)+234,(y-25)+52,18,"black",false,Math.PI+0.1,1)
		this.drawCircle(ctx,(x-25)+254,(y-25)+54,18,"black",false,Math.PI+0.1,1.1)
		
		
		//teeth
		this.drawLine(ctx,(x-25)+180,(y-25)+180,(x-25)+182,(y-25)+202)
		this.drawLine(ctx,(x-25)+150,(y-25)+182,(x-25)+148,(y-25)+206)
		
		//thing in ear
		this.drawCircle(ctx,(x-25)+246,(y-25)+162,4,"black",false,Math.PI/2+1.4,-1*Math.PI/2+0.5)
		this.drawCircle(ctx,(x-25)+244,(y-25)+164,4,"black",false,Math.PI/2+3.1,Math.PI/2-1.1)
		
		ctx.fillStyle = "black"
		ctx.fill()
		
		ctx.strokeStyle = "black"

		//basic outline for teeth1
		ctx.beginPath()
		this.drawCircle(ctx,(x-25)+184,(y-25)+190,10,"black",false,-Math.PI/2-0.3,Math.PI/2+0.2)// another part
		this.drawLine(ctx,(x-25)+180,(y-25)+180,(x-25)+182,(y-25)+202)
		
		ctx.fillStyle = "white"
		ctx.fill()
		ctx.closePath()
		
		// basic outline for teeth2
		this.drawLine(ctx,(x-25)+162,(y-25)+184,(x-25)+164,(y-25)+208)
		this.drawLine(ctx,(x-25)+180,(y-25)+180,(x-25)+182,(y-25)+202)
		
		ctx.fillStyle = "white"
		ctx.fill()
		ctx.closePath()
	
		//basic outline of mouth
		
		// teeth whitening
		ctx.beginPath()
		ctx.strokeStyle = "black"
		ctx.moveTo((x-25)+162,(y-25)+186)
		ctx.lineTo((x-25)+180,(y-25)+181)
		ctx.lineTo((x-25)+182,(y-25)+202)
		ctx.lineTo((x-25)+162,(y-25)+208)
		ctx.closePath()
		
		ctx.fillStyle = "white"
		ctx.fill()
		//this.drawLine(ctx,162,186,180,181)
		//this.drawLine(ctx,180,181,182,202)
		//this.drawLine(ctx,182,202,162,208)
		this.drawLine(ctx,(x-25)+162,(y-25)+208,(x-25)+162,(y-25)+186)
		
		//teeth whitening part2
		ctx.moveTo((x-25)+162,(y-25)+186)
		ctx.lineTo((x-25)+149,(y-25)+184)
		ctx.lineTo((x-25)+147,(y-25)+204)
		ctx.lineTo((x-25)+162,(y-25)+208)
		ctx.closePath()
		ctx.fillStyle = "white"
		ctx.fill()
		this.drawLine(ctx,(x-25)+149,(y-25)+184,(x-25)+147,(y-25)+204)
		
		//homer's M
		this.drawLine(ctx,(x-25)+236,(y-25)+144,(x-25)+250,(y-25)+122)
		this.drawLine(ctx,(x-25)+250,(y-25)+124,(x-25)+252,(y-25)+146)
		this.drawLine(ctx,(x-25)+252,(y-25)+146,(x-25)+272,(y-25)+128)
		this.drawLine(ctx,(x-25)+272,(y-25)+128,(x-25)+266,(y-25)+152)
		ctx.strokeStyle = "black"
		ctx.stroke()
	}

	
	drawTriangle(ctx,x1,y1,x2,y2,x3,y3,colour){
		ctx.beginPath();
		ctx.fillStyle = colour;
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.lineTo(x3,y3);
		ctx.fill();
		ctx.closePath();
	}
	
	drawCircle(ctx,x,y,diam,colour,fill,startangle,endangle){
		ctx.beginPath();
		ctx.strokeStyle = colour
		ctx.fillStyle = colour
		ctx.arc(x,y,diam,startangle,endangle);
		if (!fill)
			ctx.stroke();
		else
			ctx.fill();
	}
	
	drawLine(ctx,x1,y1,x2,y2){
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
	}
	
}
	
	
	
	
	
	
	
