const { promises } = require("dns")
const fs= require("fs")
// const fs=require(fs/promises)

console.log(fs)

console.log("starting")
// fs.writeFileSync("rohit.txt","rohit is a good boy")

fs.writeFile("rohit2.txt","rohit is a good boy",()=>{
    console.log("done")
    fs.readFile("rohit2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})


fs.appendFile("rohit.txt","roborohit",(e,d)=>{
    console.log(d)
})

console.log("ending")