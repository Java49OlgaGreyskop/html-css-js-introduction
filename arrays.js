
let  str = '345152367';
let teudatStrNumber = Array.from(str); 
numberTeudatZehut = 0;

function checkTeudatZehut(tzStr) {
if(tzStr.length != str.length || isNaN(+tzStr)) {
    console.log("TZ=", tzStr, 'valid=', false);
    return false;
    }}

let char = '0'.charCodeAt();

// const result = teudatStrNumber.map((element, index) => index % 2 ==0 ? element: element*2);

let result =teudatStrNumber.map (function(symbol, index){
    let number = symbol.charCodeAt()-char
    return index % 2 ==0 ?number: number * 2;
})
 console.log(result);

let teudat = result.map (function(number){
    return number <=9 ? number : number-9;
})
console.log(teudat);
let finishSymNumber =teudat.reduce(function(res, symbol){
    return res + symbol },0);

console.log(finishSymNumber);
let verifiedTeudatZeut = finishSymNumber % 10 == 0;
    console.log("Teudat zeut =", str, "=", finishSymNumber, 'verified=', verifiedTeudatZeut);
    return verifiedTeudatZeut;

 

