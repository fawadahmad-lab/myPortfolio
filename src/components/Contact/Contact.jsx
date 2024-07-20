import React from 'react';

const Contact = () => {
  return (
    <footer className="relative py-6 mt-12 text-black dark:text-white">
      {/* Footer Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-end space-y-6">
        {/* Contact Information */}
        <div className="flex flex-col items-end space-y-2">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact</h3>
          <p className="text-right font-bold">
            Phone: <span className="text-gray-600 dark:text-gray-400 font-normal">+923130583693</span>
          </p>
          <p className="text-right font-bold">
            Email: <a href="mailto:fawadqureshi136@gmail.com" className="text-gray-600 dark:text-gray-400 font-normal hover:underline">fawadqureshi136@gmail.com</a>
          </p>
          <p className="text-right font-bold">
            Address: <span className="text-gray-600 dark:text-gray-400 font-normal">Rawalpindi, Cantt, Islamabad, Pakistan</span>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/fawad-qureshi-034481216/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              className="w-full h-full object-contain"
            />
          </a>
          <a
            href="https://github.com/fawadahmad-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <img
              src="/github.png"
              alt="GitHub"
              className="w-full h-full object-contain"
            />
          </a>
          <a
            href="https://www.instagram.com/fawa_dkhan_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <img
              src="/instagram.png"
              alt="Instagram"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="flex flex-col items-center mt-12 space-y-4">
        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Read My Latest Blog Posts</h4>
        <ul className="list-disc list-inside text-center space-y-2">
          <li>
            <a
              href="https://medium.com/@fawadqureshi136/week-3-advancing-in-data-visualization-and-statistical-analysis-cd1915d6bc15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline dark:text-blue-300"
            >
              Advancing in Data Visualization and Statistical Analysis
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@fawadqureshi136/week-2-of-100daysofbytewise-machine-learning-fellowship-exploring-regression-and-classification-485604f037d4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline dark:text-blue-300"
            >
              Exploring Regression and Classification
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@fawadqureshi136/my-first-week-as-a-bytewise-machine-learning-fellow-0f39f672fdf1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline dark:text-blue-300"
            >
              First Week of Bytewise Machine Learning
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
