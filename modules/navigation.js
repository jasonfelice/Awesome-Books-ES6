export default function navFunction() {
document.querySelector('.list-button').addEventListener('click', () => {
    document.querySelector('#book-list').style.display = 'block';
    document.querySelector('#ADD').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
  });
  
  document.querySelector('.add-book-button').addEventListener('click', () => {
    document.querySelector('#book-list').style.display = 'none';
    document.querySelector('#ADD').style.display = 'block';
    document.querySelector('#contact').style.display = 'none';
  });
  
  document.querySelector('.contact-button').addEventListener('click', () => {
    document.querySelector('#book-list').style.display = 'none';
    document.querySelector('#ADD').style.display = 'none';
    document.querySelector('#contact').style.display = 'block';
  });
}
