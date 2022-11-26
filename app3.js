
function createEmployee(id, name, birthYear, salary) {
    return { id, name, birthYear, salary }
}
function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, birthYearMin, birthYearMax) {
    let employees = [];

    for (let i = 0; i < nEmployees; i++) {
        id = getRandomId(idDigits);
        let name = 'name' + id;
        employees.push(createEmployee(id, name,
            getRandomSalary(minSalary, maxSalary), getRandomBithYear(birthYearMin, birthYearMax)
        ));
    }
    return employees;
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

let RandomArr = createRandomEmployees(8, 3, 1945, 2004, 10000, 50000);
console.log('task 1', RandomArr);

function averageAge(employees) {
    let currentDateYear = (new Date()).getFullYear();

    return Math.round(employees.reduce((sum, empl) => {
        return sum + currentDateYear - empl.birthYear;
    }, 0) / employees.length);
}
console.log('task 2', averageAge(RandomArr));
function getEmployeesBySalary(employees, minSalary, maxSalary) {
    return employees.filter
        (empl => empl.salary > minSalary && empl.salary < maxSalary).sort((empl1, emp2) => empl1.salary - emp2.salary);
}
console.log('task 3', getEmployeesBySalary(RandomArr, 5000, 50000));

function increaseSalary(employees, borderSalary, percent) {
    return employees.map(employee => {
        if (employee.salary < borderSalary) {
            employee.salary = employee.salary + (employee.salary * percent / 100);
        }
        return employee;
})
}
console.log('task 4', increaseSalary(RandomArr, 45000, 50));