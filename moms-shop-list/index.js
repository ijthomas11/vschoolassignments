var title = document.getElementById("title")
title.style.backgroundColor = "pink"
const addItems = document.addItem
addItems.style.textAlign = "center"
addItems.addEventListener("submit", function(event) {
    event.preventDefault()
    var newItem = document.addItem.title.value
    console.log(newItem)
    addItem.title.value = ""
    var newList = document.createElement("li")
    var newDiv = document.createElement("div")
    newList.textContent = newItem
    var mylist = document.getElementById("list")
    newList.append(newDiv)
    mylist.append(newList)
    newList.style.textAlign = "center"
    var newButton = document.createElement("button")
    newButton.textContent = "edit"
    newList.append(newButton)
    newButton.style.textAlign = "center"
    var newButton2 = document.createElement("button")
    newButton2.textContent = "X"
    newList.append(newButton2)
    newButton2.style.marginLeft = "4px"
    newButton2.style.textAlign = "center"

    newButton2.addEventListener("click", function() {

        newList.textContent = ""

    })


})

var titles = document.getElementsByClassName("title")
for (var i = 0; i < titles.length; i++) {
    titles[i].style.textAlign = "center"
}
/*complete extra cred input edit box...style touch up*/