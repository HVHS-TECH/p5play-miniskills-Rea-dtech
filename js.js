
//create a line of 10 sprites across the top of the screen
for (var i = 0; i < 10; i++) {
  var block = new Sprite(i*80 + 40, 40, 50, 50);
  block.color = color(255, 0, 0); // Red color
}
