import { Library } from "./data/library.js";
import { BookForm } from "./ui/BookForm.js";
import { showErrorMessage } from "./ui/errorMessage.js";

const MIN_Page = 50;
const MAX_Page = 2000;
const MIN_YEAR = 1980;


const ACTIVE = "active"


const pagesFromErrorElement = document.getElementById("pages_form_error");
const booksListElement = document.getElementById("books-all");
const authorListElement = document.getElementById("author-books");
const pagesListElement = document.getElementById("books-with-pages");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");

const library = new Library();

const bookForm = new BookForm({idForm: "books_form", idDateInput: "date_input",idYearError: "year_error",
 idPagesInput: "pages_input", idPagesError: "pages_error", minPages: "minPages", maxPages: "maxPages",
minYear: "minYear"})
bookForm.addSubmitHandler((book) =>library.receivedBook(book))


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