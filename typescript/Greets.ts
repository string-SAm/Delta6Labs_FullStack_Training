//Define a function with static typing
function Greeting(name: string):string{
    return `Hello, ${name}!`;
}
 
//Function call
const message: string=Greeting("World");
 
//Print the message
console.log(message); 