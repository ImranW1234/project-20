var backGround,bgImg;

var tom1,tom2,tom3;

var mouse1,mouse2,mouse3;

var cat, mouse;

function preload() {
    //load the images here
bgImg = loadImage("garden.png");

tom1 = loadAnimation("cat1.png");

tom2 = loadAnimation("cat2.png","cat3.png");

tom3 = loadAnimation("cat4.png");

mouse1 = loadAnimation("mouse1.png");

mouse2 = loadAnimation("mouse2.png","mouse3.png");

mouse3 = loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(700,575);
cat.addAnimation("catLabel",tom1);
cat.scale = 0.2;

mouse = createSprite(200,600);
mouse.addAnimation("mouseLabel",mouse1);
mouse.scale = 0.1;

//cat.depth = backGround.depth;
//cat.depth = cat.depth+1;


//mouse.depth = backGround.depth;
//mouse.depth = mouse.depth+1;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.addAnimation("mouseLabel3",mouse3)
        mouse.changeAnimation("mouseLabel3", mouse3);
        cat.velocityX = 0;
        cat.addAnimation("catLabel3",tom3);
        cat.changeAnimation("catLabel3",tom3);
    }

  

    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here



  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseLabel2",mouse2);
    mouse.changeAnimation("mouseLabel2");
    mouse.frameDelay = 25;

    cat.velocityX = -1;
    cat.addAnimation("catLabel2",tom2);
   cat.changeAnimation("catLabel2");
}

}
