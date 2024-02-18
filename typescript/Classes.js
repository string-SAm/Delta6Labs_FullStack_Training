var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.Classes = function () {
        console.log("Bkl ".concat(this.name, " ummar teri ").concat(this.age));
    };
    return Person;
}());
var bkl = new Person('gaurav', 17);
bkl.Classes();
