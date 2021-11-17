const numbers = [1, 3, 5, 2, 90, 20]
numbers.sort(function(a, b) {
    return a - b
})
console.log(numbers)

const numbers1 = [1, 3, 5, 2, 90, 20]
numbers1.sort(function(a, b) {
    return b - a
})
console.log(numbers1)

const words = ["dog", "wolf", "by", "family", "eaten"]
words.sort(function(a, b) {
    return a.length - b.length
})
console.log(words)

const words1 = ["dog", "wolf", "by", "family", "eaten"]
words1.sort()
console.log(words1)

const byAge = [{
    name: "Quiet Samurai",
    age: 22
}, {
    name: "Arrogant Ambassador",
    age: 100
}, {
    name: "Misunderstood Observer",
    age: 2
}, {
    name: "Unlucky Swami",
    age: 77
}]
byAge.sort(function(a, b) {
    return a.age - b.age
})
console.log(byAge)

// add in ES6 notation for all problems