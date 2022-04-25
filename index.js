import navlinks from './modules/navigation.js';
import {addButton, inputTitle, inputAuthor} from './modules/form-component.js';
import Book from './modules/Books.js';
import updateBooks from './modules/update-books.js';
import { DateTime } from "./modules/luxon.js";

const errorMessage = document.querySelector('.message-prompt');
const now = DateTime.now();
const date = document.querySelector('.date');
date.textContent = now.toLocaleString(DateTime.DATETIME_MED) ;

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
  
  addButton.addEventListener('click', () => {
    if (inputTitle.value && inputAuthor.value) {
    const currentObj = new Book(inputTitle.value, inputAuthor.value);
    currentObj.addBook();
    updateBooks();
    errorMessage.textContent = "The book has been added!";
    errorMessage.classList.add('success');
    }
    else if(!inputTitle.value && !inputAuthor.value) {
      errorMessage.textContent = "Please fill the form!";
      errorMessage.classList.add('error');
    }
    
  });