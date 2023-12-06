// Scope in js:

//global
//function
//block

{var varNum = 10;
let letNum = 20;
const constNum= 30;}



function print() {
    var varLocal = 10;
    let letLocal = 20;
    const constLocal = 30;

    console.log(varLocal,letLocal,constLocal);
    console.log(varNum,letNum,constNum);
}
console.log(varNum,letNum,constNum);
console.log(varLocal,letLocal,constLocal);

print();

//if we want to print local variable or if i declared any variable inside a function, then we want to print outside the function the we got the error.
//It is happend because of scope of the variable.

//if i started a carly bracet and closed it, it is called block.
//By default all the variable are functional scope, but let and const are blocked scope.but var is not blocked scope.

//Laxical Enviroment: It is local memory & outer memory or global memory or outer context.
//if something not present in the inner one it will go to outer one it is called scope chaining.

//Difference between undefined and not defined is : If we declere a variable like a=10, its not defined any data type.
//but if we declare any var a=10, in this case will be undifined.