
noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    
}

function draw() 
{
    background('black');

    document.getElementById("square_side").innerHTML = "The width and height of the square is " + difference + "px";
        fill('green');
        stroke('red');
        square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log('Posenet')
}

