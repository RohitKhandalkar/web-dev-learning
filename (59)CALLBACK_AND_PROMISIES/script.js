console.log("who is hacker")
console.log("Rohit is hacker")

setTimeout(()=>{
    console.log("this is asynchronous function , it executes after the whole script is runned")
} , 3000)

setTimeout(()=>{
    console.log("this is asynchronous function 2")
} ,0)


//this will print first
console.log("END")


//CALLBACK FUNCTIONS
const fn=()=>{
    console.log("nothing")
}

const callback =(arg,fn)=>{
    console.log(arg)
   fn()
}

const loadscript = (src,callback)=>{
    let sc= document.createElement("script");
    sc.src=src;
    sc.onload = callback("rohit",fn);
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)