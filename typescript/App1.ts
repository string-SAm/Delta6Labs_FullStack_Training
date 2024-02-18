namespace MyNamespace {
    export interface Person{
        name: string;
        age: number;
    }
    export function greet(person:Person){
        console.log(`Hello, ${person.name}!`)
    }
}
let john: MyNamespace.Person = {name: "Gian", age:22};
MyNamespace.greet(john);