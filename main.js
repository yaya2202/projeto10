var dori, dori_img;
var mar, mar_img;

function preload(){
    dori_img = loadAnimation("dori.gif");
    mar_img = loadImage("mar3.jpg");
}

function setup(){
    createCanvas(400,300);
    mar = createSprite(250,200);
    mar.scale = 1.5;
    mar.velocityX = -2;
    mar.addImage(mar_img);
    dori = createSprite(100,200,20,70);
    dori.addAnimation("correndo", dori_img);
    dori.scale = 0.2;
    dori.velocityX = 2;
}

function draw(){
    background("white");
    if(mar.x < 0){
        mar.x = mar.width/2;
    }
    if(dori.x > 400){
        dori.x = 0;
    }
    drawSprites();
}