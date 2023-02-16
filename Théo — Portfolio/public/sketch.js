var canvas;
let img;
//function preload() {
//  img = loadImage('assets/blur.png');
//}

function setup() {
    Xsize = windowWidth;
    Ysize = windowHeight;
    canvas = createCanvas(Xsize,Ysize);
    background(255,255,247)
    canvas.parent('mainCanvas');

}

function draw() { 
    background(255,255,247);

    for(let x = -(Xsize/30); x < Xsize; x=x+9){
        for(let y = -(Xsize/30); y < Ysize; y=y+9){
            noStroke();
            
            fill(133,191,255);
            let d = dist(mouseX, mouseY, x, y);
            let pnoiseVal = noise(x * 0.001,y * 0.001,frameCount * 0.04);
            ellipse(x,y,pnoiseVal*3.5);

        }
    }
    for(let x = -(Xsize/30); x < Xsize; x=x+90){
        for(let y = -(Xsize/30); y < Ysize; y=y+90){
            r=random(7,110);
            noStroke();
            fill(30,122,255);
            rectMode(CENTER);
            let pnoiseVal = noise(x * 0.001,y * 0.001,frameCount * 0.02);
            rect(x,y,pnoiseVal*15,1);
            rect(x,y,1,pnoiseVal*15);

            
        }
    }
    //image(img, 0, 0);
}


function touchMoved() {
    return false;
    resizeCanvas(windowWidth, windowHeight);

}

function windowResized() {
    Xsize = windowWidth;
    Ysize = windowHeight;
    resizeCanvas(windowWidth, windowHeight);
}