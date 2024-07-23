import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Bioimpedance</div>
      <nav className="nav">
        <a href="#Simulate">Simulate</a>
        <a href="#AI">AI</a>
        <a href="#Paper">Paper</a>
        <a href="#About">About</a>
        <a href="#Authors">Authors</a>
      </nav>
    </header>
  );
}

export default Header;
