import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="text-center   p-4 rounded-xl ">
        <h2 className="text-2xl font-semibold mb-4">Hi, I'm Fawad</h2>
        <p className="text-black-600 mb-4">
          I am a passionate developer and machine learning enthusiast. Currently, I work remotely as a Machine Learning Fellow at Bytewise and as a MERN Stack Developer at Two Gems IT Solutions. I thrive on solving real-world problems by shaping them into effective web solutions, blending my skills in both development and machine learning.
        </p>
        <p className='mt-4'>My favourite tech</p>
        <div className="mt-2 flex justify-center space-x-4 text-3xl text-gray-700">
          <FontAwesomeIcon icon={faPython} title="Python" />
          <FontAwesomeIcon icon={faJs} title="JavaScript" />
          <FontAwesomeIcon icon={faReact} title="React" />
          <FontAwesomeIcon icon={faNodeJs} title="Node.js" />
        </div>
      </div>
    </div>
  );
};

export default Home;
