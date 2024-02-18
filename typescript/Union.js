// union
var myVariable;
myVariable = 'Hello';
// myVariable = 42;
console.log(myVariable);
// function accepting union type parameter
function printData(data) {
    console.log(data);
}
printData("Hello");
printData(42);
var person = { name: "John", age: 30 };
var anyo = { name: "true", age: 30 };
// union type with type guard
function processData(data) {
    if (typeof data === "string") {
        console.log("Procesing string data:", data.toLocaleUpperCase());
    }
    else {
        console.log("Processing number data:", data * 2);
    }
}
processData("Hello");
processData(34);
function calculateArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.sideLen * shape.sideLen;
    }
}
var circle = { kind: "circle", radius: 5 };
console.log("Area of circle ", calculateArea(circle));
var square = { kind: "square", sideLen: 5 };
console.log("Area of square ", calculateArea(square));
