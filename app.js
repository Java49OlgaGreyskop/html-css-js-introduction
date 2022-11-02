// let strNum1 = "123";
// let strNum2 ="9";
//  console.log(strNum1+strNum2); //=>1239
//  console.log(strNum1-strNum2); //=>114
//  console.log(strNum1 >strNum2); //false
// let num1 = +strNum1;
// let num2 = +strNum2;
// console.log(num1+ num2); //=>132
//  console.log(num1- num2); //=>114
//  console.log(num1 > num2); //true
//  let strNumStr='123abg';
//  let numStr = +strNumStr;
//  console.log(numStr);//NaN
//  let num = parseInt(strNumStr);// 123
//  console.log(num);
//  if (isNaN(numStr))
// {
//     console.log("numStr is NaN")//numStr is NaN
// }
// let num10= 156;
// let strNum10 =""+num10; 
//  console.log(num10);//156
//  let strNum16 = num10.toString(16);
//  console.log(strNum16,strNum10);

//conversion from Morse code to number
//symbol "." >0
//symbol "-" >1
// function fromMorseToNumber(morseCode){
//     let result =0;
//     for (let i=0; i < morseCode.length; i++){
//         let code = morseCode[i] == '.' ? 0 : 1;
//         result =  result * 2 + code;
//     }
//      return result;
// }
// console.log(fromMorseToNumber('-.-...---..'));
// function fromNumberToMorse(number)
// {
//     number =  Math.abs(number);
//     let res = "";
//     do {

//         let digit = number % 2;
//         let sym = digit == 0 ? '.' : '-';
//         res = sym +res;
//         number = Math.trunc(number/2);
//     } while(number != 0);
//     return res;
// }

//     console.log(fromNumberToMorse(1308));
function getSymbol(digit){
    let codeA = 'a'.charCodeAt();
return digit < 10 ? digit : String.fromCharCode(codeA + digit - 10);
}
    function fromNumberToString(number,base)
    {
        number =  Math.abs(number);
        let res = "";
        do {
    
            let digit = number % base;
            let sym = getSymbol(digit);
            
            res = sym +res;
            number = Math.trunc(number/base);
        } while(number != 0);
        return res;
    }
    
        console.log(fromNumberToString(900550, 36));

       function getSymbol(digit){
            let codeA = 'a'.charCodeAt();
        return digit < 10 ? digit : String.fromCharCode(codeA + digit - 10);
        }
            function fromNumberToString(number,base)
            {
                number =  Math.abs(number);
                let res = "";
                do {
            
                    let digit = number % base;
                    let sym = getSymbol(digit);
                    
                    res = sym +res;
                    number = Math.trunc(number/base);
                } while(number != 0);
                return res;
            }
            
                console.log(fromNumberToString(46016237, 36));
            
                function getSymbol(digit){
                    let codeA = 'a'.charCodeAt();
                    if (digit > 9){
                        digit = String.fromCharCode(codeA + digit - 10);  
                    }
               return digit;
                }
                    function fromNumberToString(number,base)
                    {
                        number =  Math.abs(number);
                        let res = "";
                        do {
                    
                            let digit = number % base;
                            let sym = getSymbol(digit);
                            
                            res = sym +res;
                            number = Math.trunc(number/base);
                        } while(number != 0);
                        return res;
                    }
                    
                        console.log(fromNumberToString(11483, 2));
function  getDigit(symbol){
    let codeA = 'a'.charCodeAt();
    let res = symbol < '9' ? +symbol : symbol.charCodeAt() - codeA +10;
    return res;

}

    function fromStringToNumber(string, base){
      string = string.toLowerCase();
                let result = 0;
                for (let i = 0; i < string.length; i++){
                    let digit = getDigit(string[i]);
                    result =  result * base + digit;
                }
                 return result;
            }
            console.log(fromStringToNumber("java"));
    