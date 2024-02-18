type Printable = { print: () => void };
type Loggable = { log: () => void };
 
function logAndPrint(obj: Printable & Loggable) {
    obj.log();
    obj.print();
}
 
const obj = {
    print() { console.log("Printing..."); },
    log() { console.log("Logging..."); }
};
 
logAndPrint(obj); // Valid