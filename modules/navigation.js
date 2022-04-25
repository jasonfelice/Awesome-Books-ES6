export default () => {
  document.querySelectorAll('.list-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('#book-list').style.display = 'block';
      document.querySelector('#ADD').style.display = 'none';
      document.querySelector('#contact').style.display = 'none';
    });
  });

  document.querySelectorAll('.add-book-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('#book-list').style.display = 'none';
      document.querySelector('#ADD').style.display = 'block';
      document.querySelector('#contact').style.display = 'none';
    });
  });

  document.querySelectorAll('.contact-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('#book-list').style.display = 'none';
      document.querySelector('#ADD').style.display = 'none';
      document.querySelector('#contact').style.display = 'block';
    });
  });
};