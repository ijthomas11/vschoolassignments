var colorDropdown = document.getElementById("colorDropdown")
var container = document.getElementById("container")
const colors = ["orange", "red", "blue"]
for (i = 0; i < colors.length; i++) {
    colorDropdown.value = colors[i]
}
colorDropdown.addEventListener("change", function(e) {
    function changeColor() {
        container.style.backgroundColor = colorDropdown.value
    }
    changeColor()
})
document.add.addEventListener("submit", function(e) {
    e.preventDefault()
    let addNum = function(num1, num2) {
        return +num1 + +num2
    }
    let num1 = document.add.num1.value
    let num2 = document.add.num2.value
    let result1 = document.add.result1.value
    document.add.result1.value = addNum(num1, num2)
    console.log(result1)
})
document.subtract.addEventListener("submit", function(e) {
    e.preventDefault()
    let subNum = function(num1, num2) {
        return +num1 - +num2
    }
    let num3 = document.subtract.num3.value
    let num4 = document.subtract.num4.value
    let result2 = document.subtract.result2.value
    document.subtract.result2.value = subNum(num3, num4)
    console.log(result2)
})
document.multiply.addEventListener("submit", function(e) {
    e.preventDefault()
    let multNum = function(num1, num2) {
        return +num1 * +num2
    }
    let num5 = document.multiply.num5.value
    let num6 = document.multiply.num6.value
    let result3 = document.multiply.result3.value
    document.multiply.result3.value = multNum(num5, num6)
    console.log(result3)
})