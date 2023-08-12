/* these are optional special variables which will change the system */
var systemBackgroundColor = "#a7d7f2"//"#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
// const darkBlue  = "#0077b6";
// const lightBlue  = "#90e0ef";
const darkGreen  =  "#20baad"; //"#0077b6";
const lightGreen  =  "#9cf0e2"; //"#90e0ef";
const strokeColor  = "#9cf0e2";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  noStroke();
  // stroke(strokeColor);
  // strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];
  let pos3x = 50 + letterData["offsetx1"]; //triangle left corner x pos
  let pos3y =  150 + letterData["offsety1"]; //triangle left corner y pos
  let pos4x = 50 + letterData["offsetx2"]; //triangle top corner x pos
  let pos4y =  150 + letterData["offsety2"]; //triangle top corner y pos
  let pos5x = 50 + letterData["offsetx3"]; //triangle right corner x pos
  let pos5y =  150 + letterData["offsety3"]; //triangle right corner y pos

  let arcx = 50 + letterData["offsetx7"]; //start of arc
  let start = 50 + letterData["offsetx4"]; //start of arc
  let stop = 150 + letterData["offsety4"]; //end of arc

  let pos6x = 50 + letterData["offsetx5"]; //top x of line
  let pos6y = 150 + letterData["offsety5"]; // top y of line
  let pos7x = 50 + letterData["offsetx6"]; //bottom x of line
  let pos7y = 150 + letterData["offsety6"]; // bottom y of line

  // draw two circles
  // fill(darkGreen);
  // ellipse(50, 150, 75, 75);
  fill(lightGreen);
  ellipse(pos2x, pos2y, size2, size2);
  fill(darkGreen);
  triangle(pos3x, pos3y, pos4x, pos4y, pos5x, pos5y);
  
  noFill();
  stroke(lightGreen);
  strokeWeight(15);
  arc(arcx, 150, 70, 70, start , stop);

  stroke(darkGreen);
  strokeWeight(5);
  line(pos6x,pos6y,pos7x,pos7y);
 
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
