/*
3.	Write function getSortedEvenOdd(numbers)
3.1.	Takes array of numbers 
3.2.	Returns array sorted in the following order
3.2.1.	First numbers should be the even ones in the ascending order
3.2.2.	Last numbers should be the odd ones in the descending order
3.3.	The input array of numbers must not been updated
3.4.	Example: getSortedEvenOdd(numbers) returns new array with no update of “numbers”. let numbers=[1,6,3,8,5,2,7,4] then being returned array will be [2, 4, 6, 8, 7, 5, 3, 1]
*/
let numbers = [3, -25, 10, 12, -7, -2, 15, 4, -11, 20];
function getSortedEvenOdd(numbers) {
    return numbers.sort((a, b)=> {
        let aEven = a % 2 == 0;
        let bEven = b % 2 == 0;
        if(aEven && bEven) { 
            // Both are even
            return a-b;
        } else if(!aEven && !bEven) {
            // Both are odd
            return b-a;
        } if(aEven) {
            // a is even, b is odd
            return -1;
        } else {
            // a is odd, b is even
            return 1;
        }
    })
}
console.log(`1. getSortedEvenOdd. input: ${numbers}, output: ${getSortedEvenOdd(numbers)}`);
function getSortedEvenOdd1(numbers) {
    return numbers.sort((a, b)=> {
        return a % 2 == 0 && a < b ? -1 : b % 2 == 0 ? 1 : b-a;
    })
}
numbers = [3, -25, 10, 12, -7, -2, 15, 4, -11, 20];
console.log(`2. getSortedEvenOdd1. input: ${numbers}, output: ${getSortedEvenOdd1(numbers)}`);
