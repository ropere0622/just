function drawClose(color,canvas){
	var c=document.getElementById(canvas);
	var ctx=c.getContext("2d");
	ctx.lineWidth = 2;
	ctx.strokeStyle = color;
	ctx.moveTo(5,5);
	ctx.lineTo(25,25);
	ctx.stroke();
	ctx.moveTo(25,5);
	ctx.lineTo(5,25);
	ctx.stroke();
}

function drawCircle(color,canvas){
	var c=document.getElementById(canvas);
	var ctx=c.getContext("2d");
	ctx.lineWidth = 2;
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.arc(35,35,34,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = color;
	ctx.fill();
}

function drawLinkText(color,canvas,text1,text2){
	var c=document.getElementById(canvas);
	var ctx=c.getContext("2d");
	ctx.fillStyle = color;
	ctx.font="18px 敺株��迤暺煾�� bold";
	ctx.fillText(text1,17,30);
	ctx.fillText(text2,17,50);
}

function changeFill(color,canvas){
	var c=document.getElementById(canvas);
	var ctx=c.getContext("2d");
	ctx.fillStyle = color;
	ctx.fill();
}

function triangleUP(color,canvas){
	var c=document.getElementById(canvas);
	var ctx=c.getContext("2d");
	ctx.lineWidth = 2;
	ctx.strokeStyle = color;
	ctx.moveTo(0,21);
	ctx.lineTo(35,21);
	ctx.lineTo(17.5,0);
	ctx.lineTo(0,21);
	ctx.stroke();
	ctx.fillStyle = color;
	ctx.fill();
}

function triangleDOWN(color,canvas){
	var c=document.getElementById(canvas);
	var ctx=c.getContext("2d");
	ctx.lineWidth = 2;
	ctx.strokeStyle = color;
	ctx.moveTo(0,0);
	ctx.lineTo(35,0);
	ctx.lineTo(17.5,21);
	ctx.lineTo(0,0);
	ctx.stroke();
	ctx.fillStyle = color;
	ctx.fill();
}

function drawSmallClose(color,canvas){
	var c=document.getElementById(canvas);
	var ctx=c.getContext("2d");
	ctx.lineWidth = 2;
	ctx.strokeStyle = color;
	ctx.moveTo(3,3);
	ctx.lineTo(22,22);
	ctx.stroke();
	ctx.moveTo(22,3);
	ctx.lineTo(3,22);
	ctx.stroke();
}