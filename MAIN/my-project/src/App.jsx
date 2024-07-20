import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Certifications from './Certifications/Certifications';
import './App.css'; // Import the custom CSS file

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Navbar />
      <main className="flex-grow flex flex-col justify-center items-center py-12">
        <div className="card-container bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <section id="home" className="mb-12"><Home /></section>
          <section id="projects" className="mb-12"><Projects /></section>
          <section id="experience" className="mb-12"><Experience /></section>
          <section id="certifications" className="mb-12"><Certifications /></section>
          <section id="contact" className="mb-12"><Contact /></section>
        </div>
        <img src="/Nam.png" alt="Signature" className="w-auto h- mt-20 ml-36" />
      </main>
    </div>
  );
}
