
console.log("The generated name is "+namegenerator("Crazy","Amazing","Fire")+" "+namegenerator("Engine","Food","Garmets")+" "+namegenerator("Bros","Limited","Hub"));

function namegenerator(a,b,c){
    let random=Math.floor((Math.random()*3)+1);
    if(random==1){
        return(a);
    }
    else if(random==2){
        return(b);
    }
    else{
        return(c);
    }
}