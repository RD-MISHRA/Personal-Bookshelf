import React from 'react';

const BookCard = ({ book, addToBookshelf }) => {

  const handleAddToBookshelf = (book) => {
    addToBookshelf(book);
    alert(`${book.title} has been added to the Bookshelf!`);
  }

  return (
    <div className="book-card">
      <h3><b>Book Title  :</b>{book.title}</h3>
      <p><b>Book Edition :</b>{book.edition_count}</p>
      <p><b>Author   :</b>{book.author_name}</p>
      <button style={buttonStyle} onClick={() => handleAddToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white', 
  padding: '7px 16px', 
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '10px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '12px', 
}

export default BookCard;
