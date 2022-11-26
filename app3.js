
function createEmployee(id, name, birthYear, salary) {
    return { id, name, birthYear, salary }
}
function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, birthYearMin, birthYearMax) 
{
    let employees=[];

    for (let i=0; i<nEmployees; i++) 
    { id = getRandomId(idDigits);
        let name = 'name' + id;
        employees.push(createEmployee(id, name,
            getRandomSalary(minSalary, maxSalary), getRandomBithYear(birthYearMin, birthYearMax)
            ));
        return employees;
    }
}
function getRandomId(idDigits) {
    min = Math.pow(10, idDigits - 1);
    max = Math.pow(10, idDigits);
    minid = Math.ceil(min)
    maxid = Math.floor(max)
    return Math.floor(Math.random() * (maxid - minid + 1) + minid)
}

function getRandomSalary(minSalary, maxSalary) {
    return Math.floor(Math.random() * (maxSalary - minSalary) + minSalary);
}

function getRandomBithYear(minBithYear, maxBithYear) {
    return Math.floor(Math.random() * (maxBithYear - minBithYear) + minBithYear);
}

let RandomArr = createRandomEmployees(8, 6, 1945, 2004, 10000, 50000);
console.log(RandomArr);

