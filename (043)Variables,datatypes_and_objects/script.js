console.log("well come to the website.......")

// var a=4;
// var b=3;
// var c=a+b;

// var is not use generally because it is like global variable 
// insted we can use "let" it works as block variable

// There are a few rules that you need to follow when naming variables in JavaScript:

// Variable names can only contain letters, digits, underscores, and dollar signs.
// Variable names cannot start with a digit.
// Variable names are case-sensitive.
// It is also a good practice to use descriptive and meaningful names for your variables, as this makes your code easier to read and understand.

let a=4;
let b=3;
let c="Rohit";
let _b=3;
// let 3b=4;   not allowed

console.log("a="+a ,"b="+b,"c="+c);
console.log(typeof a,typeof b , typeof c);

{
    let a=56;
    console.log(a);
}
console.log(a);

const con=102;
// con=con+1; not allowed because its constant

const p=true;
var u=undefined;
let n=null;

// objeccts in javascript
let o={
    "name":"Rohit H Khandalkar",
    "roll no":43,
    year:"2nd"
}
console.log(o);
o.salary="400 crores";
console.log(o);
o.salary="800 crores";
console.log(o);



