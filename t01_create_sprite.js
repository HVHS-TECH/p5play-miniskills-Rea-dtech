/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
width = random(300,600);
height = random(300,600);

cnv = new Canvas(width, height);
yellow = new Sprite(50, height-50,  100,100);
yellow.color = 'yellow';

red = new Sprite(50, height-400,100,100);
red.color = 'red';

green = new Sprite(width/1.15, height/6 ,  100,100);
green.color = 'green';

blue = new Sprite(width/1.15, height/1.15 ,  100,100);
blue.color = 'blue';

purple = new Sprite(width/2, height/2 ,  100,100);
purple.color = 'purple';

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