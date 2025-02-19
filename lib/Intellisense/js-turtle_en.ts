/**
 *   The turtle moves forward by the given number of steps
 *
 *   @param steps number of steps a turtle takes
 *   @return void
 */
declare function forward(steps: number): void;

/**
 *   The turtle is turning left
 *
 *   @param angle the angle at which the turtle should rotate
 *   @return void
 */
declare function left(angle: number): void;

/**
 *   The turtle is turning right
 *
 *   @param angle the angle at which the turtle should rotate
 *   @return void
 */
declare function right(angle: number): void;

/**
 *  the thickness of the lines is determined
 *
 *   @param thickness line thickness
 *   @return void
 */
declare function width(thickness: number): void;

/**
 *  the color of the lines is determined
 *
 *   @param r the first red component of the color code,
 *            or the name of the color,
 *            or the hexadecimal code,
 *            or an array filled with the RGB values ​​of the color
 *   @param g The second component of the color code is green
 *   @param b The third component of the color code is blue
 *   @param alpha color transparency, between 0 and 1
 *   @return void
 */
declare function color(
  r: string | number[],
  g?: number,
  b?: number,
  alpha?: number
): void;

/**
 *   changes the turtle's position according to coordinates, does not draw a line
 *
 *   @param x x coordinate
 *   @param y coordinate
 *   @return void
 */
declare function goto(x: number, y: number): void;

/**
 *   raises the pen, subsequent forward()s will move the turtle, but will not draw lines
 *
 *   @return void
 */
declare function penup(): void;

/**
 *   lowers the pen
 *
 *   @return void
 */
declare function pendown(): void;

/**
 *   clears the canvas
 *
 *   @return void
 */
declare function clear(): void;

/**
 *   Draws a coordinate system on the canvas, marked with a step
 *
 *   @param step the "step" of the coordinate system
 *   @return void
 */
declare function showGrid(step: number): void;

/**
 *   chooses a random color
 *
 *   @return void
 */
declare function randomColor_h(): void;
