var square = document.getElementById("square")
document.getElementById("square").addEventListener("mouseenter", function() {
    square.style.backgroundColor = "blue"
})
document.getElementById("square").addEventListener("mousedown", function() {
    square.style.backgroundColor = "red"
})
document.getElementById("square").addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow"
})
document.getElementById("square").addEventListener("dblclick", function() {
    square.style.backgroundColor = "green"
})
window.addEventListener("scroll", function() {
    square.style.backgroundColor = "orange"
})
document.addEventListener("keydown", checkKeyPress);

function checkKeyPress(key) {
    if (key.keyCode == 66) {
        square.style.backgroundColor = "blue"
    }
    if (key.keyCode == 82) {
        square.style.backgroundColor = "red"
    }
    if (key.keyCode == 89) {
        square.style.backgroundColor = "yellow"
    }
    if (key.keyCode == 71) {
        square.style.backgroundColor = "green"
    }
    if (key.keyCode == 79) {
        square.style.backgroundColor = "orange"
    }


}


square.style.padding = "10%"
square.style.width = "350px"
square.style.height = "350px"
square.style.border = "10%"
square.style.margin = "10%"
var container = document.getElementById("container")
container.style.width = "1000px"
container.style.height = "1000px"