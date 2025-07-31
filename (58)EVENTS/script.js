let button =document.getElementById("bt");

button.addEventListener("click",()=>{
    document.querySelector(".container").style.backgroundColor="Red";
    alert("i was clicked")
}
)

button.addEventListener("contextmenu",()=>{
   
    alert("dont right click, you may be hacked")
}
)

document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode);
})