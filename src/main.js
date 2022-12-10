import { Library } from "./data/library.js";
const inputElements = document.querySelectorAll(".form-class [name]");
const inputAuthor = document.querySelectorAll(".form-class-author [name]");
const MIN_Page = 50;
const MAX_Page = 2000;
const MIN_YEAR = 1980;
const maxYear = getMaxYear();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
const ACTIVE = "active"

const yearErrorElement = document.getElementById("year_error");
const pagesErrorElement = document.getElementById("pages_error");
const pagesFromErrorElement = document.getElementById("pages_form_error");
const booksListElement = document.getElementById("books-all");
const authorListElement = document.getElementById("author-books");
const pagesListElement = document.getElementById("books-with-pages");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");

const library = new Library();
function onSubmit(event) {
    event.preventDefault();
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(book)
    library.receivedBook(book);

}
function onChange(event) {

    if (event.target.name == "pages") {
        validatePages(event.target)
    } else if (event.target.name == "year") {
        validateYear(event.target);
    }
}
function validatePages(element) {
    const value = +element.value;
    if (value < MIN_Page || value > MAX_Page) {
        const message = value < MIN_Page ? `pages must be ${MIN_Page} or greater`
            : `pages must be ${MAX_Page} or less`;
        showErrorMessage(element, message, pagesErrorElement);
    }

}
function validateYear(element) {
    const value = +element.value.slice(0, 4);
    if (value < MIN_YEAR || value > maxYear) {
        const message = value < MIN_YEAR ? `year must be ${MIN_YEAR} or greater` :
            `year must be ${maxYear} or less`;
        showErrorMessage(element, message, yearErrorElement);
    }

}
function showErrorMessage(element, message, errorElement) {
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        element.classList.remove(ERROR_CLASS);
        element.value = '';
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

function getMaxYear() {
    return new Date().getFullYear();
}

function onChangePagesFrom(event) {
    const value = +event.target.value;
    if (pagesTo && value >= pagesTo) {
        showErrorMessage(event.target, "pages 'from' must be less than pages 'to'",
            pagesFromErrorElement);
    } else {
        pagesFrom = value;
    }
}
function onChangePagesTo(event) {
    const value = +event.target.value;
    if (pagesFrom && value < pagesFrom) {
        showErrorMessage(event.target, "Pages'To' must be greater than pages 'From'",
            pagesFromErrorElement);
    }
    pagesTo = value;
}

function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.innerHTML = getBooksItem(books);
    }
}

function getBooksItem(books) {
    return books.map(book =>
        `<li class="books-item">
              <div class="books-item-container">
                 <p class="books-item-paragraph">Title: ${book.title} </p>
                 <p class="books-item-paragraph">Author: ${book.author} </p>
                 <p class="books-item-paragraph">Year publishing: ${book.year}</p>
                 <p class="books-item-paragraph">Genre: ${book.Genre}</p>
                 <p class="books-item-paragraph">Pages: ${book.pages}</p>
              </div>
          </li>`).join('');
}
function onSubmitAuthor(event) {
    event.preventDefault();
    const author = Array.from(inputAuthor)[0].value;
    const books = library.getAuthor(author);
    authorListElement.innerHTML = getBooksItem(books);
}
let pagesFrom = 0;
let pagesTo = 0;

function onSubmitPages(event) {
    event.preventDefault();
    const books = library.getBooksByPage(pagesFrom, pagesTo);
    pagesListElement.innerHTML = getBooksItem(books);
}

window.onSubmit = onSubmit;
window.onChange = onChange;
window.showSection = showSection;
window.onSubmitPages = onSubmitPages;
window.onChangePagesFrom = onChangePagesFrom;
window.onChangePagesTo = onChangePagesTo;
window.onSubmitAuthor = onSubmitAuthor;