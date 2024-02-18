/// <reference path='Person.ts'/>
var MyNamespace;
(function (MyNamespace) {
    function greets(person) {
        console.log("hello ".concat(person.name));
    }
    MyNamespace.greets = greets;
})(MyNamespace || (MyNamespace = {}));
var gian = { name: "Gian", age: 22 };
MyNamespace.greets(gian);
