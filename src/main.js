import { Company } from "./data/company.js";
import { EmployeesList } from "./ui/EmploeesList.js";
import { EmployeeForm } from "./ui/employeeForm.js";
import { SalariesForm } from "./ui/SalariesForm.js";

const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const MIN_YEAR = 1950;


const ACTIVE = "active"


const listAllEmployees = new EmployeesList("employees-all");
const listEmployeeBySalary = new EmployeesList("employees-salary");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
/************************************************************************** */
//functions of Company


const company = new Company();
//functions of Employee Form




const employeeForm = new EmployeeForm({idForm: "employee_form", idDateInput: "date_input",
idSalaryInput: "salary_input", idDateError: "date_error", idSalaryError: "salary_error",
 minYear: MIN_YEAR, minSalary: MIN_SALARY, maxSalary: MAX_SALARY})
 employeeForm.addSubmitHandler((employee) => company.hireEmployee(employee))
/************************************************************* */

/********************************************************************************** */

//functions of Salary Form

const paramsSalaries =({idForm: "salary-form", idSalaryFromInput: "salaryFrom",idSalaryToInput: "salaryTo",
idErrorMassage: "salary_form_error"})
const salariesForm = new SalariesForm(paramsSalaries);
salariesForm.addSubmitHandler((salariesObj) => {
    const employees = company.getEmployeesBySalary(salariesObj.salaryFrom, salariesObj.salaryTo);
   listEmployeeBySalary.showEmployees(employees);
})


   

function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const employees = company.getAllEmployees();
       listAllEmployees.showEmployees(employees);
    }
}



window.showSection = showSection;
