console.log(anagramm('cat', 'tac'));// true
console.log(anagramm('good', 'dog'));//false
console.log(anagramm('look','koll'))//false
function anagramm(str1,str2){
    if (str1.length !=str2.length)
    return false;

    let sorted1 =str1.split('').sort().join('').toLowerCase();
    let sorted2 =str2.split('').sort().join('').toLowerCase();
    return (sorted1===sorted2);
}


