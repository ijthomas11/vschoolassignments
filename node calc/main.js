const readlineSync = require("readline-sync")


var addNum = function(num1, num2) {
    return +num1 + +num2
}
var subNum = function(num1, num2) {
    return +num1 - +num2
}
var multNum = function(num1, num2) {
    return +num1 * +num2
}
var divNum = function(num1, num2) {
    return +num1 / +num2
}




var num1 = readlineSync.question("Please enter your first number: ");
console.log(num1);
var num2 = readlineSync.question("Please enter your second number: ");
console.log(num2);
var operation = readlineSync.question("Please enter the operation to perform(add,subtract,multiply, or divide)): ")
console.log(operation);
if (operation === "add") {
    var result = addNum(num1, num2);
}
if (operation === "subtract") {
    var result = subNum(num1, num2)
}
if (operation === "multiply") {
    var result = multNum(num1, num2)
}
if (operation === "divide") {
    var result = divNum(num1, num2)
}
console.log("The result is:" + result)