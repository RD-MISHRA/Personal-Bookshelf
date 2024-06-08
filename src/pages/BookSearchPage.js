import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';

const BookSearchPage = () => {
  const [bookshelf, setBookshelf] = useState(() => {
    const savedBooks = localStorage.getItem('bookshelf');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <BookSearch addToBookshelf={addToBookshelf} />
    </div>
  );
};

export default BookSearchPage;
