var flour;
var pandan;
var egg;
var waffle;

function preload(){
  flour = loadImage("img/flour.png");
  pandan = loadImage("img/pandan.png");
  egg = loadImage("img/egg.png");
  waffle = loadImage("img/pandanwaffle.png");
}

// Draggable Rectangles with a draggable rectangle class
function setup() {
  createCanvas(windowWidth - 200, windowHeight -200); // Create a canvas with a size of 400x400 pixels
  box1 = new draggableBox(60, 100);
  box2 = new draggableBox(500, 200);
  box3 = new draggableBox(900, 150);
  box4 = new draggableBox(700, 400);
}

function draw() {
  background("#FFB3E3"); // Set the background color to light gray

  // Creates a boolean variable which is true when the mouse is hovering over rectangle

  // Draw the rectangle
  box1.display1();
  box1.checkIfMouseOverBox();
  box1.makeDraggable();
  box1.moveBoxifDragging();

  box2.display2();
  box2.checkIfMouseOverBox();
  box2.makeDraggable();
  box2.moveBoxifDragging();
  
  box3.display3();
  box3.checkIfMouseOverBox();
  box3.makeDraggable();
  box3.moveBoxifDragging();
  
  box4.display4();
  box4.checkIfMouseOverBox();
  box4.makeDraggable();
  box4.moveBoxifDragging();
}

class draggableBox {
  constructor(x, y) {
    this.x = x;
    this.y = y; // Position of the rectangle
    this.w = 150; // Width of the rectangle
    this.h = 150; // Height of the rectangle
    this.isDragging = false;
    this.isMouseOverBox = false;
  }

  display1() {
    // rect(this.x, this.y, this.w, this.h);
    image(flour, this.x, this.y, this.w, this.h);
  }
  
  display2() {
    // rect(this.x, this.y, this.w, this.h);
    image(egg, this.x, this.y, this.w, this.h);
  }
  
  display3() {
    // rect(this.x, this.y, this.w, this.h);
    image(pandan, this.x, this.y, this.w, this.h);
  }
  
  display4() {
    // rect(this.x, this.y, this.w, this.h);
    image(waffle, this.x, this.y, this.w, this.h);
  }

  checkIfMouseOverBox() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      this.isMouseOverBox = true;
    } else {
      this.isMouseOverBox = false;
    }
  }

  moveBoxifDragging() {
    if (this.isDragging) {
      // Update the position of the rectangle when it's being dragged
      this.x = mouseX - this.w / 2;
      this.y = mouseY - this.h / 2;
    }
  }

  makeDraggable() {
    if (this.isMouseOverBox && mouseIsPressed) {
      // Start dragging the rectangle when the mouse is pressed over it
      this.isDragging = true;
    } else {
      // Stop dragging when the mouse is released
      this.isDragging = false;
    }
  }
}
