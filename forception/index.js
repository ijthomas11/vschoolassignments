var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Shmidt"]
    for (var i = 0; i < people.length; i++) {
        console.log(people[i])
        var people1 = (people.join(": "))
        var people2 = (people1.split(" "))
        var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
        var newAlphabet = alphabet.split('')
        console.log(newAlphabet)
        for (var j = 0; j < newAlphabet.length; j++) {}
    }
    var person1 = people2.slice(0, 1).concat(newAlphabet)
    var person2 = people2.slice(1, 2).concat(newAlphabet)
    var person3 = people2.slice(2, 3).concat(newAlphabet)
    var person4 = people2.slice(3, 4).concat(newAlphabet)
    var person5 = people2.slice(4).concat(newAlphabet)
    var persons = person1.concat(person2, person3, person4, person5)
    console.log(persons)


}


forception()