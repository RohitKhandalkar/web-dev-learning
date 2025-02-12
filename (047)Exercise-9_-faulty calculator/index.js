/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

// solution

// const prompt = require('prompt-sync')();

"we have to use Number with the prompt because, the prompt takes the input as string"
let a=Number(prompt("enter first value :"))
let b=Number(prompt("enter second value :"))

let r=Math.random()
console.log("the value of r is :"+r)

if(r<=0.1){
    alert(a+"+"+b+"="+(a-b));
    alert(a+"*"+b+"="+(a+b));
    alert(a+"-"+b+"="+(a/b));
    alert(a+"/"+b+"="+(a**b)); // ** used for to give a raise to power b
}
else{
    alert(a+"+"+b+"="+(a+b));
    alert(a+"*"+b+"="+(a*b));
    alert(a+"-"+b+"="+(a-b));
    alert(a+"/"+b+"="+(a/b));
}




