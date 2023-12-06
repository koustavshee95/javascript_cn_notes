//ternary operation:

//condition ? (true)  expression : (false) expression
//it is if else in a single line.

// condition if true expression:if false expression;

/*
const number=59;

number%2===0 ?console.log("This is even number") :console.log("This is odd number");

*/


const age = prompt("Please enter your age");

const message=age>=18?"you are adult":"you are not adult ";
console.log(message);

const message1=age>=18? age==18?"you are 18 only":"You are more then 18":"you are under 18";
console.log(message1);

