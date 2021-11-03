peterpan = "";
harrypotter = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(leftWristX, leftWristY, 20);

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        harrypotter.isPlaying(false);

    }

    if(peterpan = true)
    {
        song.play(peterpan);
        document.getElementById("div_song_name").innerHTML = "Song Name: Peter Pan";
    }

}

function modelLoaded()
{
    console.log("Posenet is Initilized!")
}

function preload()
{
    peterpan = loadSound("Peter.mp3");
    harrypotter = loadSound("Harry.mp3");

}

function gotPoses(error, results)
{
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
    if(results.length > 0);
    {
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    }
}

