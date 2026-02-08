/*******************************************************/
// P5.play: t03_gravity
// sprite falls due to gravity
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(windowWidth ,  windowHeight);
world.gravity.y = 10;

box = new Sprite(0, 0, 100, 100, '100');
circle = new Sprite(100, 100, 50);
circle.collider = 'circle';
spin = new Sprite(300, -200, 250, 300, '300')
spin.rotationSpeed = -10;
spin.vel.y = 1;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	spin.color =' #87CEEB';
	box.color ='#2E8B57';
	background('#000000');
}

/*******************************************************/
//  END OF APP
/*******************************************************/