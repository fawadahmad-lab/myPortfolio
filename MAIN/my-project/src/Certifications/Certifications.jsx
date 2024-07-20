import React from 'react';

const Certifications = () => {

  const certifications = [
    {
      title: 'Python for Data Science',
      link: 'https://courses.cognitiveclass.ai/certificates/25f9ad42151a445ba6fd126858b722c1',
      image: '/images.png', 
      points: [
        '. Completed coursework in Python programming for data science',
        '. Learned data manipulation and analysis using Pandas        ',       
      ]
    },
    {
      title: 'Data Analysis with Python',
      link: 'https://courses.cognitiveclass.ai/certificates/5192cd595ad7472980a137a61a1ee472',
      image: '/images.png',
      points: [
        '. Worked on data cleaning and preprocessing techniques',
        '. Applied statistical analysis and data visualization',
      ]
    },
    {
      title: 'SQL Basics ',
      link: 'https://www.hackerrank.com/certificates/63a3d1acb8ee',
      image: 'HackerRank_logo.png', 
      points: [
        '. SQL Basics'
      ]
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Certifications</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="flex flex-col items-center">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-40 h-40 rounded-full overflow-hidden flex items-center justify-center"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain"
              />
            </a>
            <div className="mt-2 text-center">
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <ul className="list-disc list-inside text-gray-700">
                {cert.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
