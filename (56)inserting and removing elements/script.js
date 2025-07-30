document.body.querySelector(".box").innerHTML
// ' this is box'
document.body.querySelector(".box").innerText
// 'this is box'
document.body.querySelector(".container").innerText
// 'this is box\nthis is box'
document.body.querySelector(".container").innerHTML
// '\n        <div class="box"> this is box</div>\n        <div class="box"> this is box</div>\n   
document.body.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box"> this is box</div>\n        <div class="box"> this is box</div>\n    </div>'
document.body.querySelector(".container").tagName
//  'div'
document.body.querySelector(".container").nodeName
// 'div'
document.body.querySelector(".container").textContent
// '\n         this is box\n         this is box\n    '
// document.body.querySelector(".box").hidden=true
// true
document.body.querySelector(".box").innerHTML="i am rohit"
// 'i am rohit'
document.body.querySelector(".box").hasAttribute("style")
// true
document.body.querySelector(".box").getAttribute("style")
// 'font-size: larger;'
document.body.querySelector(".box").setAttribute("style","color:red")

document.body.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

document.body.querySelector(".box").removeAttribute("style")

// documet.designmode="on"
document.querySelector(".box").dataset
// DOMStringMap {createdby: 'Rohit'}

let div=document.createElement("div")
div.innerHTML="this is the div tag created by the js"
div.setAttribute("class","create")
// document.querySelector(".box").insert

document.querySelector(".container").append(div)
// append comes at the bottom

document.querySelector(".container").before(div)
// above

let cont=document.querySelector(".container").insertAdjacentHTML("afterend","hey this is inserted html by 'insertAdjacentHTML'")

// document.querySelector(".box").remove()
// it removes the tag

document.querySelector(".container").classList
// DOMTokenList ['container', value: 'container']
// 0: "container"
// length:1
// value: "container"
// [[Prototype]] :DOMTokenList

document.querySelector(".container").className
// 'container'


document.querySelector(".container").classList.add="rohit"
// 'rohit'
// document.querySelector(".container").classList.remove="rohit"
// 'rohit'
// document.querySelector(".container").classList.toggle("red")

document.querySelector(".box").classList.toggle("red")
// true or false