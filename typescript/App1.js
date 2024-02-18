var MyNamespace;
(function (MyNamespace) {
    function greet(person) {
        console.log("Hello, ".concat(person.name, "!"));
    }
    MyNamespace.greet = greet;
})(MyNamespace || (MyNamespace = {}));
var john = { name: "John", age: 30 };
MyNamespace.greet(john);
