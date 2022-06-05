import navlinks from './modules/navigation.js';
import { addButton, inputTitle, inputAuthor } from './modules/form-component.js';
import Book from './modules/Books.js';
import updateBooks from './modules/update-books.js';
import { DateTime } from './modules/luxon.js';

const errorMessage = document.querySelector('.message-prompt');
const now = DateTime.now();
const date = document.querySelector('.date');
const hamButton = document.querySelector('.hamburger-button');
date.textContent = now.toLocaleString(DateTime.DATETIME_MED);

navlinks();

if (localStorage.books) {
  Book.booksArray = JSON.parse(localStorage.books);
}

if (Book.booksArray.length > 0) {
  for (let i = 0; i < Book.booksArray.length; i += 1) {
    const currentObj = new Book(Book.booksArray[i].title, Book.booksArray[i].author);
    currentObj.addBook();
  }
}

hamButton.addEventListener('click', () => {
  hamButton.classList.toggle('cross');
  hamButton.classList.toggle('hamburger');
  document.querySelector('.mobile-nav').classList.toggle('disappear');
});

addButton.addEventListener('click', () => {
  if (inputTitle.value && inputAuthor.value) {
    const currentObj = new Book(inputTitle.value, inputAuthor.value);
    currentObj.addBook();
    updateBooks();
    errorMessage.textContent = 'The book has been added!';
    errorMessage.classList.add('success');
    inputTitle.value = '';
    inputAuthor.value = '';
  } else if (!inputTitle.value && !inputAuthor.value) {
    errorMessage.textContent = 'Please fill the form!';
    errorMessage.classList.add('error');
  }
});