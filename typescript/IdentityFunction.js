// function identity<T>(arg: T):T{
//     return arg;
// }
// let result=identity<string>("Hello, world!");
// console.log(result);
// let numResult=identity<number>(42);
// console.log(numResult);
//-------
var ArrayWrap = /** @class */ (function () {
    function ArrayWrap() {
        this.array = [];
    }
    ArrayWrap.prototype.addItem = function (item) {
        this.array.push(item);
    };
    ArrayWrap.prototype.getItemAtIndex = function (index) {
        return this.array[index];
    };
    ArrayWrap.prototype.getArray = function () {
        return this.array;
    };
    return ArrayWrap;
}());
var stringArray = new ArrayWrap();
stringArray.addItem("A");
stringArray.addItem("B");
stringArray.addItem("C");
stringArray.addItem("D");
console.log(stringArray.getArray());
function printKeyValuePair(pair) {
    console.log("key: ".concat(pair.key, ", Value:").concat(pair.value));
}
var pair1 = { key: 1024, value: "hello" };
var pair2 = { key: 1024, value: "hello" };
printKeyValuePair(pair1);
printKeyValuePair(pair2);
