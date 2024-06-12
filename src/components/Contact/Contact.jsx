import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact</h2>
      <div className="flex justify-center items-center space-x-4">
        <a href="https://github.com/fawadahmad-lab" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-800 hover:text-black" />
        </a>
        <div className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <a href="https://www.instagram.com/fawa_dkhan_?igsh=MXFoaHliaW5mOXd5aA==" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-gray-800 hover:text-black" />
        </a>
        </div>
       
      </div>
    </div>
  );
};

export default Contact;
