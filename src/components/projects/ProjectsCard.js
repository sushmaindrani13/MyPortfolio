import React from 'react';

const ProjectsCard = ({ title, des, githubLink }) => {
  return (
    <div className="w-full p-4 xl:px-120 h-full xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
      </div>
      <div className="w-full mt-3 flex flex-col gap-3"> 
        <div className="flex items-center justify-center h-10"> 
          <h3 className="text-base uppercase text-designColor font-normal text-center">
            {title}
          </h3>
        </div>
        <p class="text-sm text-white tracking-wide mt-1 hover:text-purple-200 duration-300 text-justify-center">
          {des}
        </p>
        <div className="flex justify-center mt-auto">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-500 text-white-500 font-normal py-2 px-2 square"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
