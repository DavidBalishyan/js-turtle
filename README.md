# Js-Turtle
<img src="./img/favicon.ico"/>
<br>
Turtle graphics for javascript.

# Basic Functions
``` javascript
forward(distance); // go to forward. args` distance: number
right(angle); // right. args` angle: number
left(angle); // right. args` angle: number
goto(x,y); // goto. args` x: number, y:number
clear(); // clears out the canvas. args` NONE 
penup(); // raises the pencil. args` NONE
pendown(); // put down the pencil. args` NONE
reset(); // start from the beginning, erase everything. args` NONE
angle(angle);   // args` angle	 
width(width);  // pencil thickness. args` width: number
color(r,g,b); // choose color. args` r: number, g: number, b: number 
color(color); // args` color: string
```
# Helper Functions
``` javascript
showGrid(); // Shows Euclidean grid on canvas. args` NONE
randomColor_h(); // Set random color on each time it called. args` NONE
```
# "Strange" functions
``` javascript
strangeLine(steps); // like forward() but line has random pattern
strangeSquare(length,step) // draws patterned square, by particles.args` length: number, step: number
strangeCircle(radius) // draws patterned cirlce, by particles. args` radius: number
strangeGalaxy(radius) // draws patterned "galaxy", by particles. args` radius: number
```
# More at <a href="https://hanumanum.github.io/js-turtle/index_en.html" target="_blank">Documentation</a>
