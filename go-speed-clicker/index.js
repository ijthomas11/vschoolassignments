var header = document.getElementById("header")
header.style.color = "blue"
header.style.textAlign = "center"
var clickerCount = 1
document.addEventListener("click", function() {
    clicker.clicks.value = clickerCount++;
    localStorage.setItem("clickCount", clicker.clicks.value)

})
var timer = document.getElementById("timer")
var time = 10

function getTimer() {
    timer.textContent = time--

}
var timerID = setInterval(getTimer, 1000)
let stopClick = false

function stopTimer() {
    clearInterval(timerID);

}


var timerStop = setTimeout(stopTimer, 11000)
    // document.addEventListener("click").disabled = true
    // if (timer === 0) {
    //     document.off("click")}
    //figure out how to stop document click after time hits 0