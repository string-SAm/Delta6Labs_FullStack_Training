// function App(
//     name:string,
//     a:number,
//     b:number
//     ){
//         console.log(`Hello ${name}`);
//         const sum=a+b
//         console.log(`The sum of ${a} and ${b} is: ${sum}`);
//     }
// App('sam',3,4)
// Define an enum called Direction
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// You can also explicitly set the values of enum members
var CustomDirection;
(function (CustomDirection) {
    CustomDirection["Up"] = "UP";
    CustomDirection["Down"] = "DOWN";
    CustomDirection["Left"] = "LEFT";
    CustomDirection["Right"] = "RIGHT";
})(CustomDirection || (CustomDirection = {}));
// Usage of the Direction enum
var playerDirection = Direction.Up;
// Enums can be used in switch-case statements
switch (playerDirection) {
    case Direction.Up:
        console.log("Player is moving up");
        break;
    case Direction.Down:
        console.log("Player is moving down");
        break;
    case Direction.Left:
        console.log("Player is moving left");
        break;
    case Direction.Right:
        console.log("Player is moving right");
        break;
}
// Usage of the CustomDirection enum
var customPlayerDirection = CustomDirection.Down;
console.log(customPlayerDirection); // Output: "DOWN"
