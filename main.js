song = "";
song1 = "";

function preload() {
    song = loadSound("N'Gous + Randall.mp3");
    song1 = loadSound("Kalki BGM.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(430 , 190);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 400);
}