import React, { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-slate-950">
      <div className="flex items-center space-x-4">
        <img src="/profile.jpeg" alt="Profile" className="w-12 h-12 rounded-full md:w-20 md:h-20" />
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">
          <img 
          src="/code.png" alt="icon-code"
          className="w-8 h-8 cursor-pointer md:w-10 md:h-10"
        /></h1>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors">Home</a></li>
          <li><a href="#projects" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors">Projects</a></li>
          <li><a href="#about" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors">About</a></li>
          <li><a href="#contact" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors">Contact</a></li>
        </ul>
        <img
          src="/moon.png"
          alt="Toggle Dark Mode"
          className="w-8 h-8 cursor-pointer md:w-10 md:h-10"
          onClick={toggleDarkMode}
        />
      </div>
      <button onClick={toggleMenu} className="md:hidden">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-slate-950 flex flex-col items-center space-y-4 py-4 md:hidden">
          <li><a href="#home" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors" onClick={toggleMenu}>Home</a></li>
          <li><a href="#projects" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#about" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors" onClick={toggleMenu}>About</a></li>
          <li><a href="#contact" className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors" onClick={toggleMenu}>Contact</a></li>
          <img
            src="/moon.png"
            alt="Toggle Dark Mode"
            className="w-8 h-8 cursor-pointer md:w-10 md:h-10 mt-2 -ml-2"
            onClick={toggleDarkMode}
          />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
