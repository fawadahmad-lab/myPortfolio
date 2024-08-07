import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

const projectData = [
  {
    title: 'TwoGemsIT-Website',
    description: 'Developed website for the company as an intern of MERN stack.',
    techStack: [faNodeJs, faReact],
    repoLink: 'https://github.com/fawadahmad-lab/React_TwoGemsITSol',
  },
  {
    title: 'Blogify',
    description: 'A full stack blogging application where users can upload blogs about different topics and can comment on other blog posts.',
    techStack: [faNodeJs, faJs],
    repoLink: 'https://github.com/fawadahmad-lab/Blogify',
  },
  {
    title: 'Restful API',
    description: 'Restful API where CRUD operations have been performed on user data.',
    techStack: [faNodeJs, faJs],
    repoLink: 'https://github.com/fawadahmad-lab/RestApi_CRUD_Nodejs-',
  },
  {
    title: 'Amazon Product Recommendation System and Search Engine',
    description: 'A recommendation system and search engine for Amazon products, deployed in the Streamlit Cloud Community.',
    techStack: [],
    repoLink: 'https://github.com/fawadahmad-lab/100DaysOFBytewiseMachineLearning/tree/a1a362ba94c324b85b6255be9bdb94c7400c0cf0/Project-2',
    liveLink: 'https://recomendationsys.streamlit.app/',
    banner: 'img.jpg', 
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            {project.banner && (
              <img src={project.banner} alt={project.title} className="w-full h-32 object-cover mb-4 rounded-lg" />
            )}
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-4 text-2xl text-gray-700 mb-4">
              {project.techStack.map((icon, idx) => (
                <FontAwesomeIcon key={idx} icon={icon} />
              ))}
            </div>
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors flex items-center mb-2"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" /> View on GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors flex items-center"
              >
                View Live Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
