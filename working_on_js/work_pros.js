

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