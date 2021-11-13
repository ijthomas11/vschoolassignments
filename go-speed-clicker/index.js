 var clickCount = 1
 document.addEventListener("click", function() {

     clicker.clicks.value = clickCount++;
     localStorage.setItem("clickCount", clicker.clicks.value)
 })