const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 30,
  "offsetx": -20,
  "offsety": 0,
  "offsetx1": 30, //triangle left corner
  "offsety1": 100, //triangle left corner
  "offsetx2": 60, //triangle top corner
  "offsety2": 20, //triangle top corner
  "offsetx3": 20,
  "offsety3": 20,
}

const letterB = {
  "size": 30,
  "offsetx": 30,
  "offsety": 0
}

const letterC = {
  "size": 55,
  "offsetx": 50,
  "offsety": 0
}

const backgroundColor  = "#caf0f8" //(light blue)
const strokeColor      = "#03045e";

const darkGreen  =  "#20baad" //"#0077b6";
const lightGreen  =  "#9cf0e2" //"#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offsetx1"];
  let pos3y =  posx + letterData["offsety1"];
  let pos4x = posx + letterData["offsetx2"];
  let pos4y =  posx + letterData["offsety2"];
  let pos5x = posx + letterData["offsetx3"];
  let pos5y =  posx + letterData["offsety3"];


  // draw two circles
  fill(darkGreen);
  ellipse(posx, posy, 150);
  fill(lightGreen);
  ellipse(pos2x, pos2y, size2, size2);
  triangle(pos3x, pos3y, pos4x, 270, 320, 330); //260,330,290,270,320,330
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
