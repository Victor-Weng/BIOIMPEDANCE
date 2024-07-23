import React from 'react';
import './Header.css';

function Header() {
  return (
    <header class="header">
  <div class="logo">Bioimpedance</div>
  <nav class="nav">
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
