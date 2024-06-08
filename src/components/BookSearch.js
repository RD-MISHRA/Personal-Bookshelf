import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      setBooks(response.data.docs);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const inputStyle = {
    width: isMobile ? '100%' : '50%',
    padding: '1rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

 
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        placeholder="Search for books"
        value={query}
        onChange={handleSearch}
        style={inputStyle}
      />
      
      <div className="book-results">
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
