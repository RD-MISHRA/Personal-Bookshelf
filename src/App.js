import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

const App = () => (
<div>
<h1 style={{ textAlign: 'center' }}>Search for Books</h1>


  <Router>
  <Navbar />
    <Routes>
      <Route path="/" element={<BookSearchPage />} />
      <Route path="/bookshelf" element={<BookshelfPage />} />
    </Routes>
   
  </Router>
  </div>
);

export default App;
