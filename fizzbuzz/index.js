for (var i = 0; i <= 100; i++) {
    var h1 = document.getElementById("number")
    var h2 = document.createElement("h1")
    h2.textContent = [i]
    h1.append(h2)
    for (var j = 0; j < [i].length; j += 3) {}
}
//for (i = 0; i<=100; i+=3) {
//h2.textContent = "fizz"
//}
//if (i = 5;i<=100;i+=5) {
//h2.textContent = "buzz"
//}
//figure out how to combine multiple of 3 and 5 into first for loop//