import { showErrorMessage } from "./errorMessage.js";
export class AuthorForm{
    #formElement;
    #authorElement;
    constructor(params){
        this.#formElement = document.getElementById(params.idForm);
        this.#authorElement = document.getElementById(params.idAuthor);
    }
    addSubmitHandler(processAuthorFun){
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const author =  this.#authorElement.value;
            processAuthorFun(author);
        })
}
}