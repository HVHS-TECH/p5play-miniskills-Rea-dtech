/*******************************************************/
// P5.play: t04_collision
// sprite falls by gravity and hits the floor
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(windowWidth ,  windowHeight);
world.gravity.y = 5;
box = new Sprite(0, 0, 100, 100, '100');
box1 = new Sprite(900, 100, 250, 300 , 'd');
box1.rotationSpeed = 2;
box1.friction = 0.01;
box1.bounciness = 0.5;
box2 = new Sprite(700, 200, 250, 300 , 'd');
box2.friction = 0.01;
box2.bounciness = 0.5;
box3 = new Sprite(800, 50, 250, 300 , 'd');
box3.rotationSpeed = 2;
box3.friction = 0.03;
box3.bounciness = 0.3;
box4 = new Sprite(1000, 150, 250, 300 , 'd');
box4.friction = 0.1;
box4.bounciness = 0.2;
box5 = new Sprite(400, 400, 100, 100, 'd');
box5.vel.x = 2;
box5.friction = 0.03;
box.rotationSpeed = 2;
box5.friction = 0.05;
box5.bounciness = 0.5;
platform1 = new Sprite(-400, 500, 3500, 50, 'k');
platform1.rotation = 5;
circle = new Sprite(100, 100, 50);
circle.collider = 'circle';
spiningBox = new Sprite(300, -200, 250, 300, '300')
spiningBox.rotationSpeed = -10;
spiningBox.vel.y = 1;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	spiningBox.color =' #87CEEB';
	box.color ='#2E8B57';
	background('#000000');
	box1.color = ('#00FF00')
	box2.color = ('#00FF00')
	box3.color = ('#00FF00')
	box4.color = ('#00FF00')
	box5.color = ('#880808')
	platform1.color = ('#bbff00')
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/