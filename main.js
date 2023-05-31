function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    rect(30, 20, 55, 55, 100);
    describe('white rect with blue outline and round edges in mid of gray canvas');
    circle(30, 30, 20);
    describe('blue circle in mid of gray canvas');
}

function take_snapshot(){
    save('student_name_png');
}
