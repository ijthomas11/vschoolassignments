var numbers = [3, 5, 2, 8, 1]

function largest() {

    if (numbers[0] > numbers[1]) {
        console.log(numbers[0])
    }
    if (numbers[1] > numbers[0] && numbers[1])
        if (numbers[1] > numbers[3] && numbers[4]) {
            console.log(numbers[1])
        }
    if (numbers[2] > numbers[0] && numbers[1])
        if (numbers[2] > numbers[3] && numbers[4]) {
            console.log(numbers[2])
        }
    if (numbers[3] > numbers[0] && numbers[1])
        if (numbers[3] > numbers[2] && numbers[4]) {
            console.log(numbers[3])
        }
    if (numbers[4] > numbers[0] && numbers[1])
        if (numbers[4] > numbers[2] && numbers[3]) {
            console.log(numbers[4])
        }
}

largest()

var letters = ["#3", "$$$", "C#4", "Hey!", "!"]
var characters = ["C", "H", "e", "y"]

function lettersWithStrings() {
    var newLetters = letters.join()
    console.log(newLetters)
    var newLetters2 = newLetters.split('')
    console.log(newLetters2)
    if (newLetters2[7] === characters[0])
        if (newLetters2[11] === characters[1])
            if (newLetters2[12] === characters[2])
                if (newLetters[13] === characters[3]) {
                    console.log(letters[2], letters[3])
                }
}
lettersWithStrings()



var isDivisible = function(num1, num2) {


    return +num1 / +num2;
}

console.log(isDivisible(4, 2))
var result = isDivisible()
console.log(result)

function isDivisible() {
    if (isDivisible === 1) {
        console.log("true")
    }
    if (isDivisible === 2) {
        console.log("true")
    }
    if (isDivisible === 3) {
        console.log("true")
    }
    if (isDivisible === 4) {
        console.log("true")
    }
    if (isDivisible === 5) {
        console.log("true")
    }
}