

let box=document.body.getElementsByClassName("box");


const messages=[
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
]
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function  main(){

   

    for(message of messages){
        
    const line= document.createElement("div");
    line.textContent=message;
    box[0].appendChild(line);
    const dot=setInterval(() => {
        let last=box[0].lastElementChild;
        if(last.innerHTML.endsWith("...")){
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
        }
        else{
            last.innerHTML+=".";
        }
    }, 800);
    
    await delay(Math.random() * 6000 + 1000);
        clearInterval(dot);
}


}

main()