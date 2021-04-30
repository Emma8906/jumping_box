var canvas;
var sound;
var redRect, yellowRect, greenRect, blueRect;
var jumpingSquare;
var edges;
function preload(){
    sound = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    redRect = createSprite (125,500,150,20);
    redRect.shapeColor="red";
   yellowRect = createSprite (300,500,150,20);
    yellowRect.shapeColor="yellow";
    greenRect = createSprite (475,500,150,20);
    greenRect.shapeColor="green";
    blueRect = createSprite (660,500,150,20);
    blueRect.shapeColor="blue";
    jumpingSquare = createSprite ((random(20,750)),300,40,40);
    jumpingSquare.shapeColor="white";
    //create 4 different surfaces
    edges=createEdgeSprites();
 //jumpingSquare.velocityX=1
 //jumpingSquare.velocityY=2

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    jumpingSquare.x=mouseX;
    jumpingSquare.y=mouseY;

    greenRect.debug=true;
    blueRect.debug=true;
    if (isTouching(redRect,jumpingSquare)){
        jumpingSquare.shapeColor="red";
        sound.play();
    }
    if (isTouching(yellowRect,jumpingSquare)){
        jumpingSquare.shapeColor="yellow";
        sound.stop();
    }
    if (isTouching(greenRect,jumpingSquare)){
        jumpingSquare.shapeColor="green";
        sound.play();
    }
    if (isTouching(blueRect,jumpingSquare)){
        jumpingSquare.shapeColor="Blue";
        jumpingSquare.velocityX=0;
        jumpingSquare.velocityY=0;
        sound.stop();
    }

 jumpingSquare.bounceOff(edges);
    drawSprites()
    //add condition to check if box touching surface and make it box
}
