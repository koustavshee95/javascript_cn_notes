// for in loop....

const student =['Koustav','Ranjan','Ram','Sheyam','Suman','Ankit','Sujit','Sandip'];
console.log(student);


/*
for (let index = 0; index < student.length; index++) {
    //const element = array[index];
    console.log(`Roll no ${index+1} : ${student[index]}`);  
    
};
*/

/*
for(let index in student){
    console.log(`Roll no ${Number(index)+1} : ${student[index]}`);   
}

*/

//for of loop:

for(stu of student){
    console.log(stu);
}

/// this stu is the element of the array itself.