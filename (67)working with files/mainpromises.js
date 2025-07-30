import { readFile } from "fs"
import fs from "fs/promises"

let a= await fs.readFile("rohit.txt")
// let b= await fs.writeFile("rohit2.txt","this is very good promise")

let b= await fs.appendFile("rohit2.txt","\n\n\nthis is very good promise")


console.log(a.toString(),b)

