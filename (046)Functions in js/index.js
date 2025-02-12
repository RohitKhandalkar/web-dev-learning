function nice(name){
    console.log("hey "+name+" you are looking good today")
    console.log("hey "+name+" your t-shirt is nice")
}

nice("Rohit");

function sum(a,b,c=2){
    // console.log("the sum of a , b, and c is :"+a+b+c)
    return a+b+c;
}

// sum(5,6);
// sum(4);//b is undefined
// sum(5,6,5);

result=sum(4,5)

console.log("the sum of a , b, and c is :"+result)

// The arrow function

const func1=(x)=>{
    console.log("i am an arrow function "+x)
}

func1(45)
func1(35)
func1(20)


