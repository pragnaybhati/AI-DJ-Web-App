song = "";
song1 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
scorelw = 0;
song1_status = "";
song2_status = "";
scorerw = "";

function preload() {
    song1 = loadSound("N'Gous + Randall.mp3");
    song2 = loadSound("Kalki BGM.mp3");
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

function got_poses(results) {
    if (results.length > 0) {
        scorelw = results[0].pose.keypoints[9].score;
        scorerw = results[0].pose.keypoints[10].score;
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

    }
}

function draw() {
    image(video, 0, 0, 400, 400);

    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();

    fill("#000000");

    if (scorerw > 0.2) {
        circle(rightWristX, rightWristY, 30);
        song2.stop();

        if (song1_status == false) {
            song1.play();
            document.getElementById("song_name").innerHTML = "Song Playing = Randall x N'Gous";
        }
    }

    if (scorelw > 0.2) {
        circle(leftWristX, leftWristY, 30);
        song1.stop();

        if (song2_status == false) {
            song2.play();
            document.getElementById("song_name").innerHTML = "Song Playing = Kalki BGM";
        }

    }
}