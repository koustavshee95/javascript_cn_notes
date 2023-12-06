// Check the element is present or not:

const teams = ['CSK','MI','RCB','SRH'];



//indexof()

const RCBIndex=teams.indexOf('RCB');
console.log(RCBIndex);

//if not present in the array

const GTindex=teams.indexOf("GT");
console.log(GTindex);

//Note: Its returning -1 because its not present in the array list.

//includes()
// includes return us boolean value, respect to element  present or not in the array list.

const RCB2inclu=teams.includes("RCB");
console.log(RCB2inclu);

const GTindex2=teams.includes("GT");
console.log(GTindex2);

//slice:
//its help you tream the array but not going to change the original array.

console.log(teams);
console.log(teams.slice(-1));
console.log(teams);

//NOTE: here we can see after using slice not tream the original array.its showing thet first 2 element is removed temporaryly but not from original array.
//another thing is slice takes number as an argument. if we use positive number it will remove from first element but of we use negative number it will remove everyting accept last respective  element.

//teams.splice(index_number,delete_count,insert)
/*
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …,  itemN)
*/

const splc=teams.splice(2,1,'GT');
console.log(splc);

//concat:

const teams1 = ['CSK','KKR','GT','DC'];
const teams2 = ['LSG','MI','PK','RR'];

const teams3=teams1.concat(teams2);
console.log(teams3);