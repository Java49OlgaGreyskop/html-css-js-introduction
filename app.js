function sumdigits(num){
let sum = 0; 
    
while(num>0)
{
    sum += num % 10; return sum;
    num = Math.floor (num /10);
   
}
return sum;
}
console.log('sum =', sumdigits(123));
