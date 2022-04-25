export default function updateBooks() {
    Book.booksArray.push({
      title: `${inputTitle.value}`,
      author: `${inputAuthor.value}`,
    });
    localStorage.setItem('books', JSON.stringify(Book.booksArray));
  }
  