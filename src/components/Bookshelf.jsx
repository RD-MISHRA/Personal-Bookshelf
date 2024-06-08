import React from 'react';

const Bookshelf = ({ books }) => (
    
  <div className="bookshelf">
  
    {books.length > 0 ? (
      books.map((book) => (
        <div key={book.key} className="book-card">
          <h3><b>Book Title  :</b>{book.title}</h3>
          <p><b>Author   :</b>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
        </div>
      ))
    ) : (
      <p>No books in your bookshelf.</p>
    )}
  </div>
);

export default Bookshelf;
