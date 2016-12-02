(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext("2d"),
	width = 1000,
	height = 500,
	player = {
		x : width/2,
		y : height-10,
		width : 10,
		height : 10,
		speed : 3,
		velY : 0,
		velX : 0,
		jumping : false,
		grounded : false
	},
	keys = [],
	friction = 0.8,
	gravity = 0.3
canvas.width = width;
canvas.height = height;

function colCheck(shapeA, shapeB) {
  
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
       
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
      
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}
	
ctx.font="20px Georgia";
///////////////////////////////////////////////////////////
// level creator
///////////////////////////////////////////////////////////
var boxes = []
var lfour = [boxes,{x:width/5-5,y:270,width:250,height:265},{x:2*width/5-5,y:380,width:255,height:265,nono:true},{x:3*width/5,y:270,width:250,height:265},{x:width/5-5,y:0,width:250,height:250},{x:3*width/5,y:0,width:250,height:250},[970,1000,470,481,1,lthree,'Level 4']]
var lthree = [boxes,{x:300,y:440,width:30,height:60},{x:width/2 + 50,y:175,width:30,height:450},[970,1000,470,481,1,lfour,'Level 3']] 
var ltwo = [boxes,{x:width/3,y:235,width:30,height:265},{x:2*width/3,y:235,width:30,height:265},[970,1000,470,481,1,lthree,'Level 2']]
var lone = [boxes,{x:width/2,y:235,width:30,height:265},[970,1000,470,481,1,ltwo,'Level 1']]
var under = function(player,block) {
	var cl = {
		x: player.x,
		y: player.y + player.height + 1
	}
	var fl = {
		x: player.x + width,
		y: player.y + player.height + 1
	}
	var ca = {
		x:block.x,
		y:block.y
	}
	var fa = {
		x: block.x + block.width,
		y: block.y
	}
	if(fl.x < ca.x && cl.y == ca.y) {
		player.grounded = false;
		player.jumping = true;
	}
	if(cl.x >  fa.x && cl.y == ca.y){
		player.grounded = false;
		player.jumping = true;
	}
}
boxes.push({
	x:0,
	y:0,
	width:10,
	height:height
})
boxes.push({
	x:0,
	y:height-10,
	width:width,
	height:10000
})
boxes.push({
	x:width-10,
	y:0,
	width:50,
	height:height
})

var counter = 0
var current_level = boxes
boxes.push([970,1000,470,481,1,lone,'Welcome to bhoppers, proceed to the bottom right corner to continue'])
function update() {
	if (keys[39]) {
		if (player.velX < player.speed) {
			player.velX++;
		};
	}
	if (keys[37]) {
		if (player.velX > -player.speed) {
			player.velX--;
		};
	}
	if (keys[38] || keys[32]) {
		if (!player.jumping){
			player.jumping = true;
			player.velY = -player.speed*1.5;
			player.grounded = false;
			player.velY += gravity;
			friction = .99;
			player.speed = 3;
			
		} 
		if(counter < 670 && keys[39] || keys[37] && counter < 670)
			counter += 20;

		player.speed += counter/10000;
	} else {
		counter = 0;
	}
	
	
	
	
	player.velX *= friction;
	ctx.clearRect(0,0,width,height);
	
	ctx.beginPath();
	ctx.font="30px Courier";
	ctx.fillStyle = 'red';
	ctx.fillText(current_level[current_level.length-1][6],width/2-current_level[current_level.length-1][6].length*5.5,100);
	    for (var i = 0; i < current_level.length; i++) {
			if (current_level[i] != undefined){
			if (current_level[i].length > 1 && typeof current_level[i] == 'object' && current_level[i].length < 5){
				for (var a = 0; a < current_level[i].length; a++){

					ctx.rect(current_level[i][a].x, current_level[i][a].y, current_level[i][a].width, current_level[i][a].height);
					
					var dir = colCheck(player, current_level[i][a])
					under(player,current_level[i][a])
					if (dir === "l" || dir === "r") {
				player.velX = 0;
            
				} else if (dir === "b") {
					player.grounded = true;
					player.jumping = false;
					friction = 0.9
				} else if (dir === "t") {
					player.velY *= -1;
				}
				}
			}
			}
        ctx.rect(current_level[i].x, current_level[i].y, current_level[i].width, current_level[i].height);
		if (current_level[i].length === undefined) {
			var dir = colCheck(player, current_level[i])
			under(player,current_level[i])
			}

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            
        } else if (dir === "b") {
			if(current_level[i].nono) {
				player.velX = 0;
				player.velY = 0;
				
				player.x = 1
				player.y = 489
			}
            player.grounded = true;
            player.jumping = false;
	    friction = 0.8
			
        } else if (dir === "t") {
			console.log("ouchie")
			if (player.velY < 0) {
            player.velY *= -1;
			}
        }

    }
	ctx.fillStyle = 'red';
	ctx.fill();
	
	if(player.grounded || player.jumping === false){
     player.velY = 0;
	}	
	ctx.fillStyle = 'blue';
	ctx.fillRect(player.x,player.y,player.width,player.height);
	player.x += player.velX;

	player.y += player.velY;
	if (player.x >= width-player.width) {
    player.x = width-player.width;
	} else if (player.x <= 0) {
    player.x = 0;
	};
	if (current_level[current_level.length-1][5] != undefined && player.x > current_level[current_level.length-1][0] && player.x < current_level[current_level.length-1][1] && player.y > current_level[current_level.length-1][2] && player.y < current_level[current_level.length-1][3]){
		if (current_level[current_level.length-1][5] != 'undefined'){
		current_level= current_level[current_level.length-1][5]
	}
		player.x = current_level[current_level.length-1][4]
		
	}
	player.velY += gravity;
	requestAnimationFrame(update);
}

document.body.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;	
});
document.body.addEventListener("keyup", function(e){
	keys[e.keyCode] = false;	
});

window.addEventListener("load", function() {
	update();
});
