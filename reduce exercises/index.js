var numbers = [1, 2, 3]
var result = numbers.reduce(function(final, num) {
    final = final + num
    return final
})
console.log(result)



var numbers1 = [1, 2, 3]
var stringConcat = numbers1.reduce(function(number, string) {
        var numbers = number.toString() + string
        return number + string
    },
    "")
console.log(stringConcat)




var voters = [{
    name: "Bob",
    age: 30,
    voted: true
}, {
    name: "Jake",
    age: 32,
    voted: true
}, {
    name: "Kate",
    age: 25,
    voted: false
}, {
    name: "Sam",
    age: 20,
    voted: false
}, {
    name: "Phil",
    age: 21,
    voted: true
}, {
    name: "Ed",
    age: 55,
    voted: true
}, {
    name: "Tami",
    age: 54,
    voted: true
}, {
    name: "Mary",
    age: 31,
    voted: false
}, {
    name: "Becky",
    age: 45,
    voted: false
}, {
    name: "Joey",
    age: 41,
    voted: true
}, {
    name: "Jeff",
    age: 30,
    voted: true
}, {
    name: "Zack",
    age: 19,
    voted: false
}]
var totalVotes = voters.reduce(function(votes, voter) {
    if (voter.voted) {
        votes++
    }
    return votes
}, 0)
console.log(totalVotes)




var wishList = [{
    title: "Tesla Model S",
    price: 90000
}, {
    title: "4 carat diamond ring",
    price: 45000
}, {
    title: "Fancy Hacky Sack",
    price: 5
}, {
    title: "Gold fidgit Sack",
    price: 2000
}, {
    title: "A second Tesla Model S",
    price: 90000
}]
var shoppingSpree = wishList.reduce(function(cost, itemPrice) {
    cost = cost + itemPrice.price
    return cost
}, 0)
console.log(shoppingSpree)



var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]
var flattenArrays = arrays.reduce(function(finalArray, array) {
    finalArray = finalArray.concat(array)
    return finalArray
}, [])
console.log(flattenArrays)


var voters = [{
    name: "Bob",
    age: 30,
    voted: true
}, {
    name: "Jake",
    age: 32,
    voted: true
}, {
    name: "Kate",
    age: 25,
    voted: false
}, {
    name: "Sam",
    age: 20,
    voted: false
}, {
    name: "Phil",
    age: 21,
    voted: true
}, {
    name: "Ed",
    age: 55,
    voted: true
}, {
    name: "Tami",
    age: 54,
    voted: true
}, {
    name: "Mary",
    age: 31,
    voted: false
}, {
    name: "Becky",
    age: 45,
    voted: false
}, {
    name: "Joey",
    age: 41,
    voted: true
}, {
    name: "Jeff",
    age: 30,
    voted: true
}, {
    name: "Zack",
    age: 19,
    voted: false
}]

var voterResults = voters.reduce(function(results, voter) {
    if (voter.voted && voter.age <= 25) {
        results.numYoungVotes++
    }
    if (voter.voted && voter.age <= 35) {
        if (voter.age > 25)
            results.numMidVotes++
    }
    if (voter.voted && voter.age > 35) {
        results.numOldVotes++
    }
    if (voter.age <= 25) {
        results.numYoungPeople++
    }
    if (voter.age <= 35) {
        if (voter.age > 25)
            results.numMidPeople++
    }
    if (voter.age > 35) {
        results.numOldPeople++
    }
    return results
}, { numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0 })
console.log(voterResults)

//add ES6 syntax to all problems