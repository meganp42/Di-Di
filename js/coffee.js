//An adaptation of avoid the squares, called collect the squares. You use the mouse position to collect the green squares. Green squares increase score by one, red squares decrease score by one. If you get 15 green squares, you win. 


var playerX; // X-coordinate of the player square
var playerWidth = 90; // Size of the player square
var playerHeight = 90;
var squareX, squareY; // X and Y coordinates of the moving square
var squareColor = 'green';
var squareSize = 50; // Size of the moving square
var squareSpeed = 6; // Speed of the moving square
var entered = false; // collision checking variable
var exited = false;// collision checking variable
var score = 0;
var img;
var coffee;
var water;
var milk;
var ghost;
var imageIndex = 0;
var imgs = [];

function preload(){
  img = loadImage("img/ca_phe_sua_da.png");
  coffee = loadImage("img/coffeebeans.png");
  water = loadImage("img/water.png");
  milk = loadImage("img/condensedmilk.png");  
  ghost = loadImage("img/ghost.png");
  imgs = [coffee,water,milk,ghost];
}

function setup() {
  createCanvas(windowWidth - 200, windowHeight - 200);
  playerX = width / 2;
  squareX = random(width - squareSize);
  squareY = -squareSize;
  textSize(24);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(240, 151, 179);
  text(score,10,30);

  // Check for collision between player and moving square
  if (
    
    //if it collides AND its coffee
    squareY + squareSize/2 >  height - playerHeight &&
    (squareY-squareSpeed) + squareSize/2 < height - playerHeight &&
    squareX - squareSize/2 > playerX - playerWidth/2 &&
    squareX - squareSize/2 + squareSize < playerX + playerWidth/2 &&
    imageIndex == 0 || 
    
    //OR if it collides AND its water
    squareY + squareSize/2 >  height - playerHeight &&
    (squareY-squareSpeed) + squareSize/2 < height - playerHeight &&
    squareX - squareSize/2 > playerX - playerWidth/2 &&
    squareX - squareSize/2 + squareSize < playerX + playerWidth/2 &&
    imageIndex == 1 ||
    
    
    //OR if it collides and its milk
    squareY + squareSize/2 >  height - playerHeight &&
    (squareY-squareSpeed) + squareSize/2 < height - playerHeight &&
    squareX - squareSize/2 > playerX - playerWidth/2 &&
    squareX - squareSize/2 + squareSize < playerX + playerWidth/2 &&
    imageIndex == 2
  
  ) {
    score+=1;
  } else if (
    squareY + squareSize/2 >  height - playerHeight &&
    (squareY-squareSpeed) + squareSize/2 < height - playerHeight &&
    squareX - squareSize/2 > playerX - playerWidth/2 &&
    squareX - squareSize/2 + squareSize < playerX + playerWidth/2 &&
    // squareColor == "red"
    //if its ghost 
    imageIndex == 3
  ){
    score-=1;
  }
  

  // Display the moving square
  // fill(squareColor);
  // square(squareX, squareY, squareSize);
  image(imgs[imageIndex],squareX,squareY,squareSize,squareSize)

  // Display the player square
  // fill(0, 0, 255);
  image(img, playerX, height - 60, playerWidth, playerHeight);
  // rect(playerX, height - playerHeight/2, playerWidth, playerHeight);

  // Move the moving square vertically
  squareY += squareSpeed;

  // Reset the moving square when it goes off the bottom
  if (squareY > height) {
    squareX = random(width - squareSize);
    //move it to the top
    squareY = -squareSize;
    //randomize its speed
    squareSpeed = random(3,10);
    imageIndex = int(random(imgs.length));
  }
  
  playerX = mouseX;
  
  if (score >=15){
    squareSpeed = 0;
    clear();
    background(51, 196, 255);
    textAlign(CENTER);
    text("YOU GOT THEM ALL",width/2,height/2);
  }
  
}
