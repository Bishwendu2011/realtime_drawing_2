  function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(1450, 750);
    canvas.position(700,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  }
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    background('#e8dff2');
}