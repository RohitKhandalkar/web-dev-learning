let boxes=document.body.getElementsByClassName("box")
console.log(boxes)
 let arr=Array.from(boxes);

function rancolor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})` 
}

function bkcolor(){
    arr.forEach(element => {
        element.style.backgroundColor= rancolor();
    })
}

function fcolor(){
    arr.forEach( element => {
        element.style.color=rancolor();
    })
}
fcolor();
bkcolor();
