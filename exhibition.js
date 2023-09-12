/* 
 * do not edit this file, instead edit the letter
 * drawing code in draw_letters.js
 */

if (typeof systemBackgroundColor === 'undefined') {
    var systemBackgroundColor = "#e3eded";
}

const canvasWidth = 960;
const canvasHeight = 500;

// these variables are used for animation
let soloCurLetter = "B";
let soloLastLetter = "A"
let soloPrevObj = alphabet["default"];
let soloIsAnimating = false;
let soloNumAnimationFrames = 30;
let soloCurAnimationFrame = 0;

// Handy string of all letters available
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?";

let chosenLetters = [];
let chosenPrevObjs = [null, null, null, null, null, null, null, null];
let chosenIsAnimating = [false, false, false, false, false, false, false, false];
let chosenNumAnimationFrames = 30;
let chosenCurAnimationFrame = [0, 0, 0, 0, 0, 0, 0, 0];
let curChosenLetter = 0;

let lastKeyPressedTime;
let secondsUntilSwapMode = 15;
let lastWordSwappedTime;
let isSwappingWords = true;
let secondsPerWord = 8;
let curSwapWord = 0;

var defaultSwapWords = [
  "ACTUALLY",
  "1234567?",
  "EXPECTED",
  "PROPERTY",
  "ADDITION",
  "FOLLOWED",
  "PROVIDED",
  "ALTHOUGH",
  "HAPPENED",
  "QUESTION",
  "AMERICAN",
  "INCREASE",
  "RECEIVED",
  "ANYTHING",
  "INDUSTRY",
  "RELIGION",
  "BUILDING",
  "INTEREST",
  "REMEMBER",
  "BUSINESS",
  "INVOLVED",
  "REQUIRED",
  "CHILDREN",
  "NATIONAL",
  "SERVICES",
  "COMPLETE",
  "ORGANIZE",
  "SOUTHERN",
  "CONSIDER",
  "PERSONAL",
  "STANDARD",
  "CONTINUE",
  "PLANNING",
  "STRENGTH",
  "ALPHABET",
  "POSITION",
  "STUDENTS",
  "DECISION",
  "POSSIBLE",
  "SUDDENLY",
  "DIRECTLY",
  "PRESSURE",
  "THINKING",
  "DISTRICT",
  "PROBABLY",
  "TOGETHER",
  "ECONOMIC",
  "PROBLEMS",
  "TRAINING",
  "EVIDENCE",
  "PROGRAMS"
]

const interpolation_is_on = (typeof interpolate_letter === "function")

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  let now = millis();
  lastKeyPressedTime = now;
  lastWordSwappedTime = now;

  if (typeof swapWords === 'undefined') {
      // the variable is defined
      swapWords = [];
  }
  swapWords = swapWords.concat(defaultSwapWords);
  chosenLetters = [];
  let first_word = swapWords[0];
  for(let i=0; i<first_word.length; i++) {
    chosenLetters.push(first_word[i]);
  }
}

function getCharacterInterpolationObj(percent, oldObj, newObj) {
  if (interpolation_is_on) {
    // safe to use the function
    obj = interpolate_letter(percent, oldObj, newObj)
  }
  else {
    if(percent == 0) {
      obj = oldObj;
    }
    else {
      obj = newObj;
    }
  }
  return obj;
}

function getObjFromChar(c) {
  if (c in alphabet) {
    return alphabet[c];
  }
  else {
    return alphabet["default"];
  }  
}

function getCharacterInterpolation(percent, oldChar, newChar) {
  let oldObj = getObjFromChar(oldChar);
  let newObj = getObjFromChar(newChar);
  return getCharacterInterpolationObj(percent, oldObj, newObj);
}


function computeCurrentSoloChar() {
  // now figure out what object to draw
  let obj;
  if (soloIsAnimating) {
    nextObj = getObjFromChar(soloCurLetter);
    progress = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, 0, 100);
    obj = getCharacterInterpolationObj(progress, soloPrevObj, nextObj)
  }
  else {
    obj = getObjFromChar(soloCurLetter);
  }
  return obj;
}

// draws a single character given an object, position, and scale
function drawFromDataObject(x, y, s, obj) {
  push();
  translate(x, y);
  scale(s, s);
  drawLetter(obj);
  pop();
}

function computeCurrentChosenChar(n) {
  // now figure out what object to draw
  var obj;
  if (chosenIsAnimating[n]) {
    if(chosenCurAnimationFrame[n] < 0) {
      obj = chosenPrevObjs[n];
    }
    else {
      nextObj = getObjFromChar(chosenLetters[n]);
      if (interpolation_is_on) {
        // safe to use the function
        let percent = map(chosenCurAnimationFrame[n], 0, chosenNumAnimationFrames, 0, 100)
        // obj["box1"]["position"] = map(chosenCurAnimationFrame[n], 0, chosenNumAnimationFrames, chosenPrevObjs[n]["box1"]["position"], nextObj["box1"]["position"])

        obj = interpolate_letter(percent, chosenPrevObjs[n], nextObj)
      }
      else {
        obj = nextObj;
      }
    }
  }
  else {
    obj = getObjFromChar(chosenLetters[n]);
  }
  return obj;
}

function draw () {
  now = millis();
  // check to see if we should go into swapping mode
  if(!isSwappingWords && lastKeyPressedTime + 1000 * secondsUntilSwapMode < now) {
    isSwappingWords = true;
  }

  if(isSwappingWords) {
    if(lastWordSwappedTime + 1000 * secondsPerWord < now) {
      lastWordSwappedTime = now;
      curSwapWord = (curSwapWord + 1) % swapWords.length;
      for(var i=0; i<8; i++) {
        var c = swapWords[curSwapWord][i];
        swapExhibitLetter(i, c, 6*i);
      }
    }
  }

  background(systemBackgroundColor);
  //Art deco design
  stroke(176,144,61); 
  strokeWeight(5);
  noFill();

  //top section for art deco design 
  arc(480, 120, 60, 50, 180 , 0); //top arc

  line(280,120,680,120); //top horizontal line

  line(480,20,480,95); //middle top line vertical

  line(460,30,470,95); //left top diagonal line
  line(500,30,490,95); //right top diagonal line

  line(440,50,460,100);  //second left diagonal from middle
  line(520,50,500,100); //second right from middle diagonal line

  line(420,70,450,110); //third left diagonal from middle
  line(540,70,510,110); //thrid right diagonal from middle

  line(400,90,440,120); //fourth left diagonal from middle
  line(560,90,520,120); //fourth right diagonal from middle

  //bottom section for art deco decoration
  arc(480, 380, 60, 50, 0 , 180); //bottom arc
  line(280,380,680,380); //bottom horizontal line

  line(480,480,480,405); //middle bottom line vertical

  line(460,470,470,405); //left bottom diagonal line
  line(500,470,490,405); //right bottom diagonal line

  line(440,450,460,400);  //bottom second left diagonal from middle 
  line(520,450,500,400); // bottom second right from middle diagonal line

  line(420,430,450,390); //bottom third left diagonal from middle
  line(540,430,510,390); //bottom thrid right diagonal from middle

  line(400,410,440,380); //bottom fourth left diagonal from middle
  line(560,410,520,380); //bottom fourth right diagonal from middle


  // shorthand variables to allow margin
  var o = 20
  var w2 = width - 2 * o
  var h2 = height - 2 * o
  for(var i=0; i<8; i++) {
    // see if animation should be turned off
    if(chosenIsAnimating[i] && chosenCurAnimationFrame[i] >= chosenNumAnimationFrames) {
      chosenIsAnimating[i] = false;
    }
    // if we are animating, increment the number of animation frames
    if(chosenIsAnimating[i]) {
      chosenCurAnimationFrame[i] = chosenCurAnimationFrame[i] + 1;
    }
    var obj = computeCurrentChosenChar(i);
    drawFromDataObject(o + i*w2/8.0, o + h2/2.0 - 120, 1.0, obj)
  }
}

function swapExhibitLetter(n, c, frameDelay) {
  chosenPrevObjs[n] = computeCurrentChosenChar(n);
  chosenLetters[n] = c;
  chosenIsAnimating[n] = true;
  chosenCurAnimationFrame[n] = 0 - frameDelay;
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
  else {
    lastKeyPressedTime = millis();
    if(isSwappingWords) {
      isSwappingWords = false;
    }
    upper_key = key.toUpperCase();
    swapExhibitLetter(curChosenLetter, upper_key, 0);
    curChosenLetter = (curChosenLetter + 1) % 8;  
  }
}
