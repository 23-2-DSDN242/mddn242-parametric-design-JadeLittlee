const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "size": 30, //small circle size
  "offsetx": -20, //small circle x
  "offsety": 0, //small circle y
  "offsetx1": 30, //triangle left corner x
  "offsety1": 80, //triangle left corner y
  "offsetx2": 60, //triangle top corner x
  "offsety2": 10, //triangle top corner y
  "offsetx3": 90, //triangle right corner x
  "offsety3": 80, //triangle right corner y
  "offsetx4": 15, //start of arc
  "offsety4": 25, //end of arc
  
}

const letterB = {
  "size": 30, //small circle size
  "offsetx": 30,  //small circle x
  "offsety": 0, //small circle y
  "offsetx1": -30, //triangle left corner x
  "offsety1": 80, //triangle left corner y
  "offsetx2": -60, //triangle top corner x
  "offsety2": -150, //triangle top corner y
  "offsetx3": -90, //triangle right corner x
  "offsety3": 80, //triangle right corner y 
}

const letterC = {
  "size": 0, //small circle size
  "offsetx": 0,  //small circle x
  "offsety": 0, //small circle y

  "offsetx1": 80, //triangle left corner x
  "offsety1": -40, //triangle left corner y
  "offsetx2": 0, //triangle top corner x
  "offsety2": 0, //triangle top corner y
  "offsetx3": 80, //triangle right corner x
  "offsety3": 40, //triangle right corner y
}

const backgroundColor  =  "#a7d7f2"; //light blue
const strokeColor      =  "#9cf0e2"  //light green - the same as triangle and small ellipse light green

const darkGreen  =  "#20baad"; 
const lightGreen  =  "#9cf0e2";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke();
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
  // determine parameters for second circle and triangle
  let size2 = letterData["size"]; //small circle size
  let pos2x = posx + letterData["offsetx"]; //small circle x pos
  let pos2y = posy + letterData["offsety"]; //small circle y pos
  let pos3x = posx + letterData["offsetx1"]; //triangle left corner x pos
  let pos3y =  posy + letterData["offsety1"]; //triangle left corner y pos
  let pos4x = posx + letterData["offsetx2"]; //triangle top corner x pos
  let pos4y =  posy + letterData["offsety2"]; //triangle top corner y pos
  let pos5x = posx + letterData["offsetx3"]; //triangle right corner x pos
  let pos5y =  posy + letterData["offsety3"]; //triangle right corner y pos

  /* drawing one big circle, a small circle, and a triangle */
  fill(darkGreen); 
  ellipse(posx, posy, 150); //constant big circle
  fill(lightGreen);
  ellipse(pos2x, pos2y, size2, size2);
  triangle(pos3x, pos3y, pos4x, pos4y, pos5x, pos5y); 
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
