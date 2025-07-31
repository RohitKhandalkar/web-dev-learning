console.log("this is promises")


const prom1=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("No random number was in your suppport")
    }
    else{
    setTimeout(()=>{
        console.log("YEs i am done")
        resolve("Rohit")
    },3000);
    }
})

const prom2=new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<0.5){
        reject("No random number was in your suppport 2")
    }
    else{
    setTimeout(()=>{
        console.log("YEs i am done 2")
        resolve("Rohit 2")
    },2000);
    }
})


let p3=Promise.allSettled([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
}) 

//Resolve or Reject it wil still give the status and value/reason of both promises
// let p3=Promise.allSettled([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err)
// }) 

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })
