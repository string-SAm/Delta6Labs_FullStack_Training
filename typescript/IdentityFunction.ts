// function identity<T>(arg: T):T{
//     return arg;
// }
// let result=identity<string>("Hello, world!");
// console.log(result);
 
// let numResult=identity<number>(42);
// console.log(numResult);

//-------


class ArrayWrap<T>{
    private array: T[]
 
    constructor(){
        this.array=[]
    }
    addItem(item:T):void{
        this.array.push(item)
    }
    getItemAtIndex(index:number):T{
        return this.array[index];
    }
    getArray(): T[]{
        return this.array;
    }
}
 
let stringArray=new ArrayWrap<string>()
stringArray.addItem("A");
stringArray.addItem("B");
stringArray.addItem("C");
stringArray.addItem("D");
console.log(stringArray.getArray());
 

//------


interface KeyValuePair<K,V>{
    key:K;
    value:V;
 
}
function printKeyValuePair<K,V>(pair:KeyValuePair<K, V>):void{
    console.log(`key: ${pair.key}, Value:${pair.value}`);
}
let pair1:KeyValuePair<number,string>={key: 1024, value:"hello"};
 
let pair2:KeyValuePair<number,string>={key: 1024, value:"hello"};
printKeyValuePair(pair1);
printKeyValuePair(pair2);