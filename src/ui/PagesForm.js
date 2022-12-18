import { showErrorMessage } from "./errorMessage.js";
export class PagesForm{
    #formElement;
    #pagesFromInputElement;
    #pagesToInputElement;
    #errorMessageElement;
    #pagesFrom;
    #pagesTo;
    constructor(params){
        this.#formElement = document.getElementById(params.idForm);
        this.#pagesFromInputElement = document.getElementById(params.idPagesFromInput);
        this.#pagesToInputElement = document.getElementById(params.idPagesToInput);
        this.#errorMessageElement = document.getElementById(params.idErrorMessage);
        this.onChangePagesFrom();
        this.onChangePagesTo();
}


addSubmitHandler(processPagesFun){
    this.#formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const pagesObj = {pagesFrom: this.#pagesFrom, pagesTo: this.#pagesTo};
        processPagesFun(pagesObj);
    })
}
    onChangePagesFrom() {
        this.#pagesFromInputElement.addEventListener("change", (event) => {
        const value = +event.target.value;
        if (this.#pagesTo && value >= this.#pagesTo) {
            showErrorMessage(event.target, "pages 'from' must be less than pages 'to'",
                this.#errorMessageElement);
        } else {
            this.#pagesFrom = value;
        }
    })
}
     onChangePagesTo() {
        this.#pagesToInputElement .addEventListener("change", (event) => {
        const value = +event.target.value;
        if (this.#pagesFrom && value < this.#pagesFrom) {
            showErrorMessage(event.target, "Pages'To' must be greater than pages 'From'",
                this.#errorMessageElement);
        }
       this.#pagesTo = value;
    })
}
}
