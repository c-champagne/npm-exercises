const _ = require("lodash");

let colors = ["red", "blue", "red", "yellow", "green", "blue", "white"];

console.log(_.uniq(colors));

//returns [ 'red', 'blue', 'yellow', 'green', 'white' ]