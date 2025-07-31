// let boxes=document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor="red"

// uses element id given in the html
// document.getElementById("redbox").style.backgroundColor="red"

// uses css selector
// document.querySelector(".box").style.backgroundColor="green"

// document.querySelectorAll(".box").forEach(e=>(
//     e.style.backgroundColor="green"
// )
// )

console.log(document.getElementsByTagName("div"))
let e=document.getElementsByTagName("div")

console.log(e[3].matches("#redbox"))
console.log(e[3].closest(".container"))
console.log(e[3].closest("html"))


console.log(document.querySelector(".container").contains(e[3]))

