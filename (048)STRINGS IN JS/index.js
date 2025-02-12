let name="Rohit"

console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
// console.log(name[5])   UNDEFINED

console.log(name.length)

let friend= "mogambo"

console.log("i am "+name+" and my friend name is "+friend)
// TEMPLATE LITERALS
console.log(`i am ${name} and\n my friend name is ${friend}`)
console.log("roh`an")
console.log(`roh"an`) 
// escape sequence character
console.log("roh\"an")

let b="Harry"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.slice(1,4))
console.log(b.slice(2))
console.log(b.replace("rr","fari"))
console.log(b.concat(name,friend,"concat"))
