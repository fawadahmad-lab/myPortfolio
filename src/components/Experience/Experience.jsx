import React from 'react';

const Experience = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">MERN stack developer Intern</h3>
          <p className="text-gray-600 mt-2">May 2024 - Aug - 2024 . remote </p>
          <p className="text-gray-600 mb-2">As a MERN Stack Developer intern at Two Gems IT Solutions, I have developed some user-friendly  web applications for clients. I also design and implement front-end interfaces, create and manage back-end services, integrate APIs, and ensure responsive and seamless user experiences.</p>
          
        </div>
        <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">Machine Learning Intern</h3>
          <p className="text-gray-600 mt-2">May 2024 - present . remote</p>
          <p className="text-gray-600 mb-2">As a Machine Learning (ML) intern at Bytewise Limited, I will collect and preprocess data, develop and train ML models, evaluate and validate model performance, and assist in deploying and maintaining models. I'll also stay updated on ML advancements, conduct experiments, and document my work.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Experience;
