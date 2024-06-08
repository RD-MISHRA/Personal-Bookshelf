import React, { useState, useEffect } from 'react';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBooks = localStorage.getItem('bookshelf');
    if (savedBooks) {
      setBookshelf(JSON.parse(savedBooks));
    }
  }, []);

  return (
    <div>
      <Bookshelf books={bookshelf} />
    </div>
  );
};

export default BookshelfPage;
