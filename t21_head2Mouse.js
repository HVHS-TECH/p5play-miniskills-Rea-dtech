/*******************************************************/
// P5.play: t21_head2Mouse
// makes sprite follow the mouse
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(windowWidth ,  windowHeight);
world.gravity.y = 5;
/*
gravity1 = new Sprite(900, 100, 250, 300 , 'd');
gravity1.rotationSpeed = 2;
gravity2 = new Sprite(700, 200, 250, 300 , 'd');
gravity3 = new Sprite(800, 50, 250, 300 , 'd');
gravity3.rotationSpeed = 2;
gravity4 = new Sprite(1000, 150, 250, 300 , 'd');
*/
box = new Sprite(0, 0, 100, 100, '100');
circle = new Sprite(100, 100, 50);
circle.collider = 'circle';
spin = new Sprite(300, -200, 250, 300, '300')
spin.rotationSpeed = 2;
spin.vel.y = 1;
/*
gravity1.color = ('#00FF00')
gravity2.color = ('#00FF00')
gravity3.color = ('#00FF00')
gravity4.color = ('#00FF00')
*/
spin.color =' #87CEEB';
box.color ='#2E8B57';
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	
	background('#000000');


if (mouse.presses()) {

spin.moveTo(mouseX, mouseY, 5);

}
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/