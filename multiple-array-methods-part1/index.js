var peopleArray = [{
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
}, {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
}, {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
}, {
    firstName: "Morty",
    lastName: "Smith",
    age: 29
}, {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
}, {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13
}, {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82
}]

var h1 = document.getElementById("head")

var ofAge = peopleArray.reduce(function(list, personArray) {
    if (personArray.age > 18) {
        h1.innerHTML += "<li>" + personArray.firstName + " " + personArray.lastName + " is " + personArray.age + ","
    }
    if (personArray.age > 18) {
        peopleArray.sort(function(a, b) {
            return a.lastName - b.lastName
        });
        list += "<li>" + personArray.firstName + " " + personArray.lastName + " is " + personArray.age + "</li>" + ",";
    }
    return list
}, "")

console.log(ofAge)

{ /* <figure out to include sort function into reduced func */ }