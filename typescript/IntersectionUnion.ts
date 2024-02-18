//Intersection with Union:
 
type A = { a: number };
type B = { b: string };
type C = { c: boolean };
 
type AB = A & B;
type BC = B & C;
 
const obj1: AB = { a: 1, b: "hello" }; // Valid
const obj2: BC = { b: "world", c: true }; // Valid

console.log(obj1);
console.log(obj2);


 
//Intersection with Class Instances:
 
// class A {
//     a: number = 10;
//     commonMethod() {
//         console.log("Common method in A");
//     }
// }
 
// class B {
//     b: string = "Hello";
//     commonMethod() {
//         console.log("Common method in B");
//     }
// }
 
// type AB = A & B;
 
// const obj: AB = new A() as AB;
// obj.commonMethod(); // Outputs: "Common method in A"
// console.log(obj.a); // Outputs: 10
// console.log(obj.b); // Outputs: undefined