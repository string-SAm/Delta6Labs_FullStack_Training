function logAndPrint(obj) {
    obj.log();
    obj.print();
}
var obj = {
    print: function () { console.log("Printing..."); },
    log: function () { console.log("Logging..."); }
};
logAndPrint(obj); // Valid
