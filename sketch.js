function setup() {
createCanvas(1000,500);
}

function draw() {
	for(var i = 0; i < 10; i = i+1) {
		push();
		translate((width/20)*i, 0);
		noStroke();
		fill(255-32*i);
		beginShape();
		vertex(300, 355);
		vertex(400, 28);
		vertex(400, 355);
		endShape(CLOSE)
		pop();
	}


}