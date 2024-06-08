import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div style={{ textAlign: 'center' }}>
    <Link to="/" style={{ textDecoration: 'none', marginRight: '10px' }}>
      <button style={buttonStyle}>Search Books</button>
    </Link>
    <Link to="/bookshelf" style={{ textDecoration: 'none' }}>
      <button style={buttonStyle}>My Bookshelf</button>
    </Link>
  </div>
);

const buttonStyle = {
  backgroundColor: '#4CAF50', 
  border: 'none',
  color: 'white', 
  padding: '15px 32px', 
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '12px', 
}

export default Navbar;
