/*
1.	Write function minMax(numbers) 
 
1.1.	Takes array of numbers
1.2.	Returns array containing two numbers: first is minimal value , second is maximal value form input array
1.3.	Example: minMax([1, 2, 3, 4, 5]) returns array [1, 5]
1.4.	Implementation Requirements
1.4.1.	Apply the reduce pattern for getting result array by one “reduce” method 
*/
let numbers = [3, -25, 10, -12, 7, 2];
function minMax(numbers) {
    return numbers.reduce((mm, element) => {
        if(element < mm[0]) {
            mm[0] = element;
        }
        if(element > mm[1]) {
            mm[1] = element;
        }
        return mm;
    }, [numbers[0],numbers[0]]);
}
console.log(`minMax. input: ${numbers} output: ${minMax(numbers)}`);

// let zzz = numbers.map(element => element+1);
// function xxx() {
// let outArr = [];
// for(let i=0; i<numbers.length; i++) {
//     outArr[i] = numbers[i]+1;
// }
// return outArr;
// }
// let yyy = xxx();
// console.log('yyy=', yyy);
// console.log('zzz=', zzz);
