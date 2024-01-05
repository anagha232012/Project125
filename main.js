function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 475);
    canvas.position(500,100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("initialisied posnet.");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWristX.x;
        leftWristX = results[0].pose.leftWristX.x;
        difference = floor(leftWristX - rightWristX);
    }
}
function draw() {
    background('#6C91C2');
    textSize(difference);
    fill('#DEC254');
    text('Anagha >:D', 50, 400);
}