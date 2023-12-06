/*
const city = ['Calcutta','Mumbai','Delhi','Pune'];

console.log(city.length);

city[0]='Kolkata';

console.log(city);
*/

//Note: here we can change the value of array enen though city data type is const.Because const is working like premitive data type, but array in js is lie an abject.so we can easyly change the value.

//adding an element:
//Push method:

const teams=['CSK','MI','RCB','SRH'];

console.log(teams);

teams.push('KKR');
console.log(teams);

//Note: If we want to add elemet last of the array, Then we need to use push. and if I want to add element front of the array, Then we need to use unshift.

teams.unshift('GT');
console.log(teams);

//Note: If you want delete something from last you have to use pop and for first you have to use shift.


teams.pop();
console.log(teams);

teams.shift();
console.log(teams);

const pushArray=teams.push('GT');
console.log(pushArray);

//Note: push and unshift return type is length of the array.

