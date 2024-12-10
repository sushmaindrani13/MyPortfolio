import React from 'react';

const ProjectsCard = ({ title, des, githubLink }) => {
  return (
    <div className="flex flex-col h-full p-4 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-800 transition-colors duration-300">
      <div className="flex flex-col h-full">
        {/* Title */}
        <h3 className="text-2xl font-bold text-designColor mb-4">{title}</h3>

        {/* Description */}
        <p className="text-sm text-white tracking-wide flex-grow overflow-hidden">
          {des}
        </p>

        {/* Button */}
        <div className="flex justify-center mt-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded transition duration-300"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
