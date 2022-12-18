export class BooksList{ 
    #listElement;
    constructor(idList){
        this.#listElement = document.getElementById(idList);
    }
showBooks(books){
    this.#listElement.innerHTML =getBooksItem(books);
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
