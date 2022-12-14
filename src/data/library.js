export class Library {
    constructor() {
        this.books = [];
    }
    receivedBook(book) {
        book.pages = +book.pages;
        this.books.push(book);
    }
    getAllBooks(){
        return this.books;
    }
    getAuthor(author){
        return this.books.filter(b => b.author==author);
    }
    
    getBooksByPage(pagesFrom, pagesTo) {
        return this.books.filter(b => b.pages >= pagesFrom && b.pages < pagesTo);
    }
}