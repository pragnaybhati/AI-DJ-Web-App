song = "";
song1 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;

function preload() {
    song1 = loadSound("N'Gous + Randall.mp3");
    song = loadSound("Kalki BGM.mp3");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(430, 190);

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modal_loaded);
    posenet.on("pose", got_poses);
}

function modal_loaded() {
    console.log("PoseNet is Initialized")
}

function draw() {
    image(video, 0, 0, 400, 400);
}

function got_poses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

    }
}