/// <reference path='Person.ts'/>
namespace MyNamespace{
    export function greets(person:Person){
        console.log(`hello ${person.name}`);
        
    }
}
let gian: MyNamespace.Person = {name: "Gian", age:22};
MyNamespace.greets(gian);