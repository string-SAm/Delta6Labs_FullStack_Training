
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
class Counter{
    private count: number=0;
 
    increment=()=>{
        this.count++; //'this' refers to the instance of Counter
    };
 
    getCount=() :number =>{
        return this.count;
    }
}
 
let counter=new Counter();
counter.increment();
console.log(counter.getCount());