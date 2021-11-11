var header = document.getElementById("header")
header.textContent = "Javavscript Made This!!"
var span = document.createElement("span")
span.textContent = "Ishwantis"
header.append(span)
span.style.color = "burlywood"
var subHeader = document.createElement("subHeader")
subHeader.textContent = " wrote the Javascript"
span.append(subHeader)
header.style.alignItems = "center"
header.style.display = "flex"
header.style.flexDirection = "column"
subHeader.style.color = "black"
span.style.fontSize = "20px"
header.style.fontSize = "50px"
var messageRight = document.querySelectorAll(".right")
for (var i = 0; i < messageRight.length; i++) {
    messageRight[0].textContent = "Fine.. and yoursef?"
    messageRight[1].textContent = "Sure..its XXX-XXX-XXXX ;)"
}

var messageLeft = document.querySelectorAll(".left")
for (var i = 0; i < messageLeft.length; i++) {
    messageLeft[0].textContent = "Hello, how are you?"
    messageLeft[1].textContent = "May I have your #?...I'm not fond of internet dating"
}


var select = document.getElementById("theme-drop-down")
var option1 = document.getElementById("colors1")
var option2 = document.getElementById("colors2")
var selectArray = option1.value.split(",")
var selectArray2 = option2.value.split(",")
var blueOrange = true
var redGrey = false
console.log(selectArray)
console.log(selectArray2)
select.addEventListener("change", function() {

    function changeColor() {
        var rightMessage = document.querySelector(".right")
        var leftMessage = document.querySelector(".left")
        var rightMessage2 = document.querySelector("#otherColor")
        var leftMessage2 = document.querySelector("#color")
        if (blueOrange) {
            rightMessage.style.backgroundColor = selectArray[0]
            rightMessage2.style.backgroundColor = selectArray[0]
            leftMessage.style.backgroundColor = selectArray[1]
            leftMessage2.style.backgroundColor = selectArray[1]
            blueOrange = false
            redGrey = true
        } else {
            rightMessage.style.backgroundColor = selectArray2[2]
            rightMessage2.style.backgroundColor = selectArray2[2]
            leftMessage.style.backgroundColor = selectArray2[3]
            leftMessage2.style.backgroundColor = selectArray2[3]
            blueOrange = true
            redGrey = false
        }

    }
    changeColor()

})

var messages = document.querySelector(".messages")
var inputBox = document.querySelector("input")
var clearButton = document.getElementById("clearbutton").addEventListener('click', function() {
    messages.textContent = ""
    inputBox.value = ""
})



var newMessages = document.createElement("div")
var inputBox = document.querySelector("input")
var newMessage = document.getElementById("newMessage").addEventListener('click', function() {
    newMessages.textContent = inputBox.value
    newMessages.style.backgroundColor = "#505050"
    messages.append(newMessages)
})


//figure out how to send message and input into text box...try to add event listener to form instead of actual button//
//seems that i can append newmessage to messages (although it wont stick)...however, im really trying to append it to messageLeft and right (wont append because node object/queryselectorall)//