import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Navbar = () => {
  // grabbing from my darkmode component
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women World Cup</h1>
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;