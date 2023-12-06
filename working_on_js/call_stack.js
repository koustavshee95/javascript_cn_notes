var user_name = 'Koustav';
var user_age = '28';

console.log(`userName: ${user_name}`);
console.log(`userAge: ${user_age}`);


greatUser(user_name)

function greatUser(name) {
    console.log("***************");
    var great = 'I hope you are doing fine';
    console.log(`hello ${name} , ${great}`);
    var currentYear = 2023;
    const year = birthYear(currentYear,user_age)
    return `Your barthyear is ${year} `
};

function birthYear(year,age) {
    console.log("calculating the birthYear");
    return year - age;
}
var bYear = greatUser(user_name);
console.log(bYear);

//first when we use debug and select call stack, we get anonymus, means global execution contest.
