/*
//Arrow Function
let add= (a: number,b: number): number=>{
    return a+b;
}
console.log(add(10,20));
*/
/*
//Lexical Scoping
let outerFunction=()=>{
    let x=10;
 
    let innerFunction=()=>{
        console.log(x); //Accessing x from the outer function's scope
    }
    innerFunction();
};
 
outerFunction();// Output:10
*/
//Combining Arrow function with lexical scoping
var Counter = /** @class */ (function () {
    function Counter() {
        var _this = this;
        this.count = 0;
        this.increment = function () {
            _this.count++; //'this' refers to the instance of Counter
        };
        this.getCount = function () {
            return _this.count;
        };
    }
    return Counter;
}());
var counter = new Counter();
counter.increment();
console.log(counter.getCount());
