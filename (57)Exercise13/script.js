function createCard(title, channel, views, old, duration, thumbnail){
    // Finish this function
    document.querySelector(".title").innerHTML=title
    document.querySelector(".channel").innerHTML=channel

    if(views>=1000000)views=views/1000000+"M"
    else if(views>=1000)views=views/1000+"K"
    document.querySelector(".views").innerHTML=views+" views"

    document.querySelector(".old").innerHTML=old
    document.querySelector(".duration").innerHTML=duration
    document.querySelector("img").src=thumbnail

}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5600000,7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")