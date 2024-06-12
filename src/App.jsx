// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto p-4">
        <section id="home"><Home /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}
