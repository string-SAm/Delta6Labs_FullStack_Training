// union
 
type Mytype = string | number;
let myVariable: Mytype;
myVariable ='Hello';
// myVariable = 42;
 
console.log(myVariable);
 
 
// union type for function
type MyParameter = string| number
 
// function accepting union type parameter
function printData(data: MyParameter): void{
    console.log(data)
}
 
printData("Hello");
printData(42);
 
// union with interface
interface Myinterface {
    name: string|null;
    age: number |null;
 
}
 
let person :Myinterface = { name:"John", age: 30};
let anyo : Myinterface= { name: "true", age:30} ;
 
// union type with type guard
 
function processData(data: string | number):void{
    if(typeof data === "string"){
        console.log("Procesing string data:", data.toLocaleUpperCase())
    }else{
        console.log("Processing number data:", data*2);
    }
}
 
processData("Hello");
processData(34);
 
 
// union type with discriminated uniions
// defining a descriminated union type
 
type Shape = {kind: "circle"; radius: number} | {kind: "square"; sideLen: number}
 
function calculateArea(shape: Shape): number{
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius*shape.radius
        case "square":
            return shape.sideLen * shape.sideLen
    }
}
 
const circle: Shape ={kind: "circle",radius: 5};
console.log("Area of circle ", calculateArea(circle));
 
const square: Shape ={kind: "square", sideLen: 5};
console.log("Area of square ", calculateArea(square));