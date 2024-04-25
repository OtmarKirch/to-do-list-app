const newText = $("<p>new text</p>")
$("body").append(newText)

const newElement = document.createElement("p")
newElement.innerText = "new p line"
document.querySelector("main").appendChild(newElement)

console.log("hello")