//Write a program that moves your mouse cursor accross the screen in a horizontal line
const robot = require("robotjs");

robot.setMouseDelay(2); //makes mouse move faster

var screenSize = robot.getScreenSize();
var height = screenSize.height / 2 - 10; //this is the halfway point of the user's screen
var width = screenSize.width;

for (let x = 0; x < width; x++) {
  //this for loop is what causes the mouse to "Move" along the x axis and stop when it reaches the edge of the screen
  y = height; //sets the mouse to appear at the halfway point
  robot.moveMouse(x, y);
}
