//basically while loop we use when we dont know how many times we have to iterate when certen condition gets true,

//while(condition){};

//suppose we are taking input from user, we dont know how many number user going to be enter.In that case while loop will work fine.



let num=12345;

while(num !== 0){
let digit = (num % 10);
num=parseInt(num/10);
console.log(digit);
}

