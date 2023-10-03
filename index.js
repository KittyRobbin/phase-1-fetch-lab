function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        Error('response not ok');
      }
      
      return response.json();

    })

      .then(data => {
        renderBooks(data);
        console.log(data)
    })
    .catch(error => {
      
      console.error('Fetch error:', error);
    });
  }


function renderBooks(books) {
  const bookList= document.querySelector('bookList');
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.innerHTML= book.name;
    bookList.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
