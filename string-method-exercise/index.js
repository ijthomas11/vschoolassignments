function CapitalizeAndLowercase(hello) {
    var hello = "hello"
    var upperCaseHello = hello.toUpperCase()
    var lowerCaseHello = hello.toLowerCase()
    var upLowCaseHello = upperCaseHello.concat(lowerCaseHello)
    console.log(upLowCaseHello)
}
CapitalizeAndLowercase();

function findMiddleIndex(hello, helloWorld) {
    var hello = "hello"
    var helloWorld = "Hello World"
    console.log(Math.floor(2.5))
    console.log(Math.floor(5.5))
}
findMiddleIndex()

function returnFirstHalf(hello, helloWorld) {
    var hello = "Hello"
    var firstHalf = hello.slice(0, 2)
    var helloWorld = "Hello World"
    var firstHalf2 = helloWorld.slice(0, 6)
    console.log(firstHalf)
    console.log(firstHalf2)
}
returnFirstHalf()

function lowerCaseAndCapitalize(hello, helloWorld) {
    var hello = "hello"
    var firstHalf = hello.slice(0, 2).toUpperCase()
    var lastHalf = hello.slice(2, 5).toLowerCase()
    var HEllo = firstHalf.concat(lastHalf)
    console.log(HEllo)
    var helloWorld = "Hello World"
    var firstHalf1 = helloWorld.slice(0, 6).toUpperCase()
    var lastHalf1 = helloWorld.slice(6, 12).toLowerCase()
    var HELLOworld = firstHalf1.concat(lastHalf1)
    console.log(HELLOworld)
}
lowerCaseAndCapitalize()

function capitalize(hey) {
    var hey = "hey friends! practice practice practice!"
    var hey1 = hey.split(" ")
    console.log(hey1)
    var hey2 = hey1.join(" ")
    console.log(hey2)
}
capitalize()
    //figure out to capitalize letter after space and change back to string//