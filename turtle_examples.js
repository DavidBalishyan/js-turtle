// Examples an functions
/*
forward(distance)  // to go forward (distance)
right(angle)
left(angle)    	    
goto(x,y) 	     // goto(x coordinate, y coordinate)
clear() 	    // clear out all
penup() 	    // raise the pencil
pendown() 	    // put down the pencil
reset() 	    // start from the beginning, erase everything....
angle(angle)	   // angle	 
width(width)       // pencil thickness (thickness)
colour(r,g,b) 	   // choose color()
*/


// let edgesNumber =  prompt("input edges count");
let edgesNumber = 3;
edgesNumber = parseInt(edgesNumber);
let ang = 360 / edgesNumber;
let radius = 200;
let nodes = []; 


let x = 0; // circle center x
let y = 0; // circle center y
nodes.push([0,0]);

width(10);
// collect coordinates
for(let a = 0; a<360; a+=ang){
    goto(x,y);
    xp = Math.round(Math.cos(angToRadian(a)) * radius);
    yp = Math.round(Math.sin(angToRadian(a)) * radius);
    nodes.push([xp,yp]);
    // console.log(drawLine(x,y,xp,yp));
    // drawLine(x,y,xp,yp)
    colour(255,0,0);
    goto(xp,yp);
    forward(2);
}

color(0,0,0);
// goto(x,y);
console.log(nodes);
// drawLine(0,0,-174,184);
let count = 2;
width(1);
for(let i = 0; i < nodes.length; i++){
    for(let j = 0; j < nodes.length; j++){
        console.log(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1]);
        drawLine(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1]);
    }
}



function angToRadian(ang){
    rad = ang*Math.PI/180;
    return rad;
}