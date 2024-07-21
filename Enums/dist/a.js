"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "North";
    Direction["Down"] = "South";
    Direction["Left"] = "West";
    Direction["Right"] = "East";
})(Direction || (Direction = {}));
function doSomething(key) {
    if (key == Direction.Up) {
        return;
    }
}
doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
