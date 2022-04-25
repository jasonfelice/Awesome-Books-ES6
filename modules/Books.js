export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static booksArray = [];

  addBook() {
    const booksWrapper = document.querySelector('.books-wrapper');
    const book = document.createElement('div');
    book.classList.add('book');
    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
    const bookTitle = document.createElement('h2');
    const bookAuthor = document.createElement('p');
    const remove = document.createElement('button');
    remove.setAttribute('type', 'button');
    remove.setAttribute('value', this.title + this.author);
    remove.textContent = 'Remove';
    remove.addEventListener('click', (e) => {
      e.target.parentNode.remove();
      const eventValue = e.target.attributes.value.value;
      Book.booksArray = Book.booksArray.filter((v) => !(v.title + v.author === eventValue));
      localStorage.setItem('books', JSON.stringify(Book.booksArray));
    });
    bookTitle.textContent = this.title;
    bookAuthor.textContent = this.author;
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    book.appendChild(bookInfo);
    book.appendChild(remove);
    booksWrapper.appendChild(book);
  }
}