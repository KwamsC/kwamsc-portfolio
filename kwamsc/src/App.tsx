import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header" id="header">
        <nav className="nav container">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="nav__menu" data-visible="false" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#origine" className="nav__link active-link">origine</a>
              </li>
              <li className="nav__item">
                <a href="#diensten" className="nav__link">diensten</a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">contact</a>
              </li>
            </ul>
            <i className="uil uil-times nav__close" id="nav-close"></i>
          </div>

          <button
            className="mobile-nav-toggle"
            id="hamburger-menu"
            aria-controls="nav-menu"
            aria-expanded="false"
          >
            <div className="menu-bar1"></div>
            <div className="menu-bar2"></div>
          </button>
        </nav>
      </header>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
