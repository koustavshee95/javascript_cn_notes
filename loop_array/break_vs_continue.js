const input =[11,32,12,45,65,94,7,78,10,100,131,67,81,92,53];

//find the even  umber and first five even number? 

const evenNumber = [];

for (let i of input){
    if(i % 2 !==0){
        continue;
    }
    evenNumber.push(i);
    

    if (evenNumber.length == 5) {
        break;
        
    }
    
};

console.log(evenNumber);







