import { Library } from "./data/library.js";
import { BookForm } from "./ui/BookForm.js";
import { BooksList } from "./ui/BooksList.js";
import { PagesForm } from "./ui/PagesForm.js";
import { AuthorForm } from "./ui/AuthorForm.js";

const MIN_Page = 50;
const MAX_Page = 2000;
const MIN_YEAR = 1980;
const ACTIVE = "active"



const booksListElement = new BooksList ("books-all");
const listBooksPages = new BooksList("books-with-pages");

const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
const authorFormInputElement = document.querySelectorAll(".form-class-author [name]");
// const authorListElement = document.getElementById("author-books");

const library = new Library();

const bookForm = new BookForm({idForm: "books_form", idDateInput: "date_input",idYearError: "year_error",
 idPagesInput: "pages_input", idpagesError: "pages_error", minPages: MIN_Page, maxPages: MAX_Page,
minYear: MIN_YEAR})
bookForm.addSubmitHandler((book) =>library.receivedBook(book))


const paramsPages = {
    idForm: "pages-Form", idPagesFromInput: "pagesFrom", 
    idPagesToInput:"pagesTo", idErrorMessage: "pages_form_error"
}
const pagesForm = new PagesForm(paramsPages);
pagesForm.addSubmitHandler((pagesObj) =>{
    const books = library.getBooksByPage(pagesObj.pagesFrom,
        pagesObj.pagesTo);
        listBooksPages.showBooks(books)
})

const paramsAuthor ={
    idForm: "author_form", idAuthor: "author-book"
}
const authorForm = new AuthorForm(paramsAuthor);
authorForm.addSubmitHandler((author) => {
  const books = library.getAuthor();
  authorFormInputElement = showBooks(books)
})

function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.showBooks(books)
    }
}



let pagesFrom = 0;
let pagesTo = 0;

function onSubmitPages(event) {
    event.preventDefault();
    const books = library.getBooksByPage(pagesFrom, pagesTo);
    pagesListElement.innerHTML = getBooksItem(books);
}

window.showSection = showSection;
window.onSubmitPages = onSubmitPages;
