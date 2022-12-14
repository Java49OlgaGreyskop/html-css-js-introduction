import { showErrorMessage } from "./errorMessage.js";
export class BookForm{
#formElement;
#inputElements;
#dateInputElement;
#yearErrorElement;
#pagesInputElement;
#pagesErrorElement;
#minPages;
#maxPages;
#minYear;
#maxYear;

constructor(params){
    this.#formElement = document.getElementById(params.idForm);
    this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
    this.#dateInputElement = document.getElementById(params.idDateInput);
    this.#yearErrorElement = document.getElementById(params.idYearError);
    this.#pagesInputElement = document.getElementById(params. IdPagesInput);
    this.#pagesErrorElement = document.getElementById(params.idpagesError);
    this.#minPages = params.minPages;
    this.#maxPages = params.maxPages;
    this.#minYear = params.minYear;
    this.maxYear = getMaxYear();
    this.onChange();
}
addSubmitHandler(processBooksFun){
    this.#formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submitted");
    const book = Array.from(this.#inputElements).reduce((res, car) => {
        res[cur.name] = cur.value;
        return res;
    }, {}
)
console.log(book)
processBooksFun(book)
})
}
onChange() {
    this.#dateInputElement.addEventListener("change", (event) => {
        this.validateYear(event.target);
    })
    this.#pagesInputElement.addEventListener("change", (event) => {
    this.validatePages(event.target);
  
    })
}
validatePages(element) {
    const value = +element.value;
    if (value < this.#minPages || value > this.maxPages) {
        const message = value < this.#minPages ? `pages must be ${this.#minPages} or greater`
            : `pages must be ${this.#maxPages} or less`;
        showErrorMessage(element, message, this.#pagesErrorElement);
    }

}
validateYear(element) {
    const value = +element.value.slice(0, 4);
    if (value < this.#minYear|| value > this.#maxYear) {
        const message = value < this.#minYear? `year must be ${this.#minYear} or greater` :
            `year must be ${this.#maxYear} or less`;
        showErrorMessage(element, message, this.#yearErrorElement);
    }
}
}
function getMaxYear() {
    return new Date().getFullYear();
}