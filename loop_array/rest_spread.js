
const aprilBatch = ['Tina','Madhur'];

const mayBatch = ['Rittek','Depak','Shalini'];

const juneBatch = [];

/*
function addNewStudent(batch,student) {
    batch.push(student)
}

addNewStudent(juneBatch,'Koustav');
addNewStudent(mayBatch,'Papu','Ranjan','Chandan');

console.log(mayBatch);  

//Note: in may batch I have trying to push 3 name but only one its pushed other is missing because in function only one parameter is passed.
//so in this case we are using rest operator.(...)
*/



function addNewStudent(batch,...student) {
    for (let i of student) {
        batch.push(i);
    }
    console.log(batch);
};

addNewStudent(juneBatch,'Ram','sheyam','Deepak','sonu');

console.log(juneBatch);





