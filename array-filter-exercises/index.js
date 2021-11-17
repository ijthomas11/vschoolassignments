const numbers = [3, 6, 8, 2]
const fiveAndGreaterOnly = numbers.filter(function(num) {
    if (num > 5) {
        return true
    }
})
console.log(fiveAndGreaterOnly)

const numeros = [3, 6, 8, 2]
const evensOnly = numeros.filter(function(evenNums) {
    if (evenNums % 2 === 0) {
        return true
    }
})
console.log(evensOnly)

const words = ["dog", "wolf", "by", "family", "eaten", "camping"]
const fiveCharactersOrFewerOnly = words.filter(function(fiveCharacters) {
    if (fiveCharacters.length <= 5) {
        return true
    }
})
console.log(fiveCharactersOrFewerOnly)

const Illuminatians = [{
    name: "Angelina Jolie",
    member: true
}, {
    name: "Eric Jones",
    member: false
}, {
    name: "Paris Hilton",
    member: true
}, {
    name: "Kanye West",
    member: false
}, {
    name: "Bob Ziroll",
    member: true
}]
const peopleWhoBelongToTheIlluminati = Illuminatians.filter(function(Illuminatian) {
    if (Illuminatian.member === true) {
        return true
    }
})
console.log(peopleWhoBelongToTheIlluminati)

const ages = [{
    name: "Angeling Jolie",
    age: 80

}, {
    name: "Eric Jones",
    age: 2
}, {
    name: "Paris Hilton",
    age: 5
}, {
    name: "Kanye West",
    age: 16
}, {
    name: "Bob Ziroll",
    age: 100
}]
const ofAge = ages.filter(function(oldEnough) {
    if (oldEnough.age > 18) {
        return true
    }
})
console.log(ofAge)
    // dont forget to add in ES6 notation for all problems