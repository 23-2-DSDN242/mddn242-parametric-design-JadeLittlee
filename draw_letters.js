/* colour variables */
var systemBackgroundColor = "#613540"//browny red colour for the background
var systemLineColor = "#b0903d"; //gold
var systemBoxColor = "#00c800"; //green border box

/* internal constants */
const darkGreen  =  "#499e6f"; 
const lightGreen  = "#95daad";
const shadowcolor =  "#636168";//dark greyish colour that gives a nice shadow but stands out enough form the red background so that it is still visible//"#6890a6"; //"#494b7a";


function drawLetter(letterData) {

  // determine parameters //16 parameters
  let posx = 50  + letterData["offsetx"]; //ellipse x pos
  let posy = 150 + letterData["offsety"]; //ellipse y pos

  let Triposx1 = 50 + letterData["Trix1"]; //triangle left corner x pos
  let Triposy1 =  150 + letterData["Triy1"]; //triangle left corner y pos
  let Triposx2 = 50 + letterData["Trix2"]; //triangle top corner x pos
  let Triposy2 =  150 + letterData["Triy2"]; //triangle top corner y pos
  let Triposx3 = 50 + letterData["Trix3"]; //triangle right corner x pos
  let Triposy3 =  150 + letterData["Triy3"]; //triangle right corner y pos

  let Arcx = 50 + letterData["arcx"]; //x of arc
  let Arcy = 150 + letterData["arcy"]; //y of arc
  let start =  letterData["arcStart"]; //start of arc
  let stop =  letterData["arcStop"]; //end of arc

  let lineposx = 50 + letterData["linex"]; //top x of line
  let lineposy = 150 + letterData["liney"]; // top y of line
  let lineposx2 = 50 + letterData["linex2"]; //bottom x of line
  let lineposy2 = 150 + letterData["liney2"]; // bottom y of line


  /* shadow of the letters */
  push();
  translate(-7,2);
  noStroke();
  angleMode(DEGREES);
  fill(shadowcolor);
  triangle(Triposx1, Triposy1, Triposx2, Triposy2, Triposx3, Triposy3);

  fill(shadowcolor);
  ellipse(posx, posy, 10); //size 10 for the circle is a constant
 
  noFill();
  stroke(shadowcolor);
  strokeWeight(15);
  arc(Arcx, Arcy, 70, 70, start , stop);

  stroke(shadowcolor);
  strokeWeight(5);
  line(lineposx,lineposy,lineposx2,lineposy2);
  pop();
 

  /* main code for letters */
  noStroke(); 

  angleMode(DEGREES);
  fill(darkGreen);
  triangle(Triposx1, Triposy1, Triposx2, Triposy2, Triposx3, Triposy3);

  fill(lightGreen);
  ellipse(posx, posy, 10); //size 10 is a constant across all the ellipses
 
  noFill();
  stroke(lightGreen);
  strokeWeight(15);
  arc(Arcx, Arcy, 70, 70, start , stop); //size 70 is a constant across all the arcs

  stroke(darkGreen);
  strokeWeight(5);
  line(lineposx,lineposy,lineposx2,lineposy2);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  if(percent < 30){ //animation starts with old letter and goes to the default character
    new_letter["offsetx"]  = map(percent, 0, 40, oldObj["offsetx"], 0);
    new_letter["offsety"]     = map(percent, 0, 40, oldObj["offsety"], 0);
    new_letter["Trix1"]   = map(percent, 0, 40, oldObj["Trix1"], 0);
    new_letter["Trix2"]    = map(percent, 0, 40, oldObj["Trix2"], 0);
    new_letter["Trix3"]    = map(percent, 0, 40, oldObj["Trix3"], 0);
    new_letter["Triy1"]    = map(percent, 0, 40, oldObj["Triy1"], 0);
    new_letter["Triy2"]       = map(percent, 0, 40, oldObj["Triy2"], 0);
    new_letter["Triy3"]      = map(percent, 0, 40, oldObj["Triy3"], 0);
    new_letter["arcStart"]        = map(percent, 0, 40, oldObj["arcStart"], 0);
    new_letter["arcStop"]     = map(percent, 0, 40, oldObj["arcStop"], 0);
    new_letter["arcx"]        = map(percent, 0, 40, oldObj["arcx"], 0);
    new_letter["arcy"]     = map(percent, 0, 40, oldObj["arcy"], 0);
    new_letter["linex"]        = map(percent, 0, 40, oldObj["linex"], 0);
    new_letter["linex2"]     = map(percent, 0, 40, oldObj["linex2"], 0);
    new_letter["liney"]        = map(percent, 0, 40, oldObj["liney"], 0);
    new_letter["liney2"]     = map(percent, 0, 40, oldObj["liney2"], 0);
  }
  else if(percent >=30 && percent < 60){ //art deco themed default character from 30% to 60%
    new_letter["offsetx"]  = map(percent, 30, 60, 0, 0);
    new_letter["offsety"]     = map(percent, 30, 60, 0, 0);
    new_letter["Trix1"]   = map(percent, 30, 60, 0, -32);
    new_letter["Trix2"]    = map(percent, 30, 60, 0, 0);
    new_letter["Trix3"]    = map(percent, 30, 60, 0, 29);
    new_letter["Triy1"]    = map(percent, 30, 60, 0, 50);
    new_letter["Triy2"]       = map(percent, 30, 60, 0, -50);
    new_letter["Triy3"]      = map(percent, 30, 60, 0, 50);
    new_letter["arcStart"]        = map(percent, 30, 60, 0, 183.6);
    new_letter["arcStop"]     = map(percent, 30, 60, 0, 180);
    new_letter["arcx"]        = map(percent, 30, 60, 0, 0);
    new_letter["arcy"]     = map(percent, 30, 60, 0, 0);
    new_letter["linex"]        = map(percent, 30, 60, 0, 0);
    new_letter["linex2"]     = map(percent, 30, 60, 0, 0);
    new_letter["liney"]        = map(percent, 30, 60, 0, 0);
    new_letter["liney2"]     = map(percent, 30, 60, 0, 0);
   }
  else if (percent >=60){ //second part of animation from default character to new letter
    new_letter["offsetx"]  = map(percent, 60, 100, 0, newObj["offsetx"]);
    new_letter["offsety"]     = map(percent, 60, 100, 0, newObj["offsety"]);
    new_letter["Trix1"]   = map(percent, 60, 100, 0, newObj["Trix1"]);
    new_letter["Trix2"]    = map(percent, 60, 100, 0, newObj["Trix2"]);
    new_letter["Trix3"]    = map(percent, 60, 100, 0, newObj["Trix3"]);
    new_letter["Triy1"]    = map(percent, 60, 100, 0, newObj["Triy1"]);
    new_letter["Triy2"]       = map(percent, 60, 100, 0, newObj["Triy2"]);
    new_letter["Triy3"]      = map(percent, 60, 100, 0, newObj["Triy3"]);
    new_letter["arcStart"]        = map(percent, 60, 100, 0, newObj["arcStart"]);
    new_letter["arcStop"]     = map(percent, 60, 100, 0, newObj["arcStop"]);
    new_letter["arcx"]        = map(percent, 60, 100, 0, newObj["arcx"]);
    new_letter["arcy"]     = map(percent, 60, 100, 0, newObj["arcy"]);
    new_letter["linex"]        = map(percent, 60, 100, 0, newObj["linex"]);
    new_letter["linex2"]     = map(percent, 60, 100, 0, newObj["linex2"]);
    new_letter["liney"]        = map(percent, 60, 100, 0, newObj["liney"]);
    new_letter["liney2"]     = map(percent, 60, 100, 0, newObj["liney2"]);
}

  return new_letter;
}

/*These are my custom words that fit my theme of art deco for the exhibition display. I have also included a showcase of all the numbers.*/
var swapWords = [ 
  "DECOTYPE", //this is what my typeface is called
  "ART DECO",
  "SUNBURST",
  " SIMPLE ",
  "GEOMETRY",
  "STYLISH!",
  "01234567",
  "23456789",
 
]
