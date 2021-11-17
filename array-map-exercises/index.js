// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const result = numbers.map(x => x + 10)
// console.log(result)

const doubledNumbers = [2, 5, 100]
    // const result = doubledNumbers.map(function(item) {
    //     return item * 2
    // })
const result = doubledNumbers.map(item => item * 2)
console.log(result)

const numbers = [2, 5, 100]
    // const stringItUp = numbers.map(function(number) {
    //     return number.toString()
    // })
const stringItUp = numbers.map(number => number.toString())
console.log(stringItUp)

const names = ["john", "JACOB", "jinGleheimer", "schmidt"]
    // const capitalizeNames = names.map(function(name) {
    //     return name[0].split("").toString().toUpperCase() + name.slice(1).toLowerCase()

// })
const capitalizeNames = names.map(name => name[0].split("").toString().toUpperCase() + name.slice(1).toLowerCase())
console.log(capitalizeNames)

const namesAndAges = [{
        name: "Angelina Jolie",
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
    // const namesOnly = namesAndAges.map(function(nameAndAge) {
    //     return nameAndAge.name
    // })
const namesOnly = namesAndAges.map(nameAndAge => nameAndAge.name)
console.log(namesOnly)

const allowances = [{
        name: "Angelina Jolie",
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
    // const allowed = allowances.map(function(allowance) {
    //     if (allowance.age > 18) {
    //         return allowance.name + " can go to The Matrix"
    //     } else if (allowance.age < 18) {
    //         return allowance.name + "is under age!"
    //     }
    // })
const allowed = allowances.map(allowance => {
    if (allowance.age > 18) {
        return allowance.name + " can go to The Matrix"
    } else if (allowance.age < 18) {
        return allowance.name + "is under age!"
    }
})
console.log(allowed)


const headers = [{
    name: "Angelina Jolie",
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
var h1 = document.getElementById("head")
const heading = headers.map(function(header) {
    return h1.innerHTML += "<h1>" + header.name + "</h1>" + "<h2>" + header.age + "</h2>"
})
console.log(h1)