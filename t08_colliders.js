/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(windowWidth ,  windowHeight);
world.gravity.y = 5;
ball_1 = new Sprite(width/2, height/2, 50, 'd');
ball_1.vel.x = 5;
ball_1.friction = 10;
ball_1.bounciness = 1.2;
ball_1.drag = 0;
wallLH = new Sprite(0, height/2, 50, height, 'k');
wallRH = new Sprite(width, height/2, 50, height, 'k');
wallTop = new Sprite(width/2, 0, width, 50, 'k');
wallBot = new Sprite(width/2, height, width, 50, 'k');
alienGroup = new Group();
alien();
random();	
wallLH.color = ('#bbff00');
wallRH.color = ('#34a583');
wallTop.color = ('#2a28b4');
wallBot.color = ('#bb2b2b');
alienGroup.collides(ball_1, func2Call);
}

function alien() {
	for (i = 0; i < 10; i++) {
	 alien = new Sprite(random(50, width-50), random(50, height-50), 50, 50);
  alien.vel.x = random(4, 7) * random([-1, 1]);
  alien.vel.y = random(4, 7) * random([-1, 1]);
  alien.bounciness = 1.05;
  alien.friction = 0;
  alienGroup.add(alien);
}
}
function func2Call(_ssss, _ball_1) {
_ssss.remove();

}

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	
background('#000000');

}

/*******************************************************/
//  END OF APP
/*******************************************************/