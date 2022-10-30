function sumdigits(num){
    
        num = Math.abs(num);
        let sum =0;
        num = Math.trunc(num);
     
do {
     let digit = num %10;
     num = (num-digit)/10;
     sum += digit;
}
while(num!=0);
return sum;
}
console.log('sum =', sumdigits(123));
