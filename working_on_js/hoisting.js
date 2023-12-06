

console.log(`userName: ${user_name}`);
console.log(`userAge: ${user_age}`);

greatUser(user_name)

var user_name = 'Koustav';
var user_age = '28';

console.log(`userName: ${user_name}`);
console.log(`userAge: ${user_age}`);


function greatUser(name) {
    var great = 'I hope you are doing fine';
    console.log(`hello ${name} , ${great}`);
    var currentYear = 2023;
    const year = currentYear -user_age;
    return `Your barthyear is ${year} `
};

var barthyear = greatUser(user_name);
console.log(barthyear);

/*

userName: undefined
hoisting.js:4 userAge: undefined
hoisting.js:17 hello undefined , I hope you are doing fine
hoisting.js:11 userName: Koustav
hoisting.js:12 userAge: 28
hoisting.js:17 hello Koustav , I hope you are doing fine
hoisting.js:24 Your barthyear is 1995 

*/

// Note : It is Called hoisting in js, here we can see before declearing variable we are trying to get console, because of execution context always variable will execute in js, so we are getting undefined.