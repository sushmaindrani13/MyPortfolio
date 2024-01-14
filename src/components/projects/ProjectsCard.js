import React from 'react';

const ProjectsCard = ({ title, des, githubLink }) => {
  return (
    <div className="w-full p-4 xl:px-120 h-full xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        {/* Add content or image here */}
      </div>
      <div className="w-full mt-3 flex flex-col gap-3"> {/* Reduce margin-top and gap */}
        <div className="flex items-center justify-center h-10"> {/* Set a fixed height for the title container */}
          <h3 className="text-base uppercase text-designColor font-normal text-center">
            {title}
          </h3>
        </div>
        <p className="text-sm tracking-wide mt-1 hover:text-gray-100 duration-300 text-justify-center"> {/* Reduce margin-top */}
          {des}
        </p>
        <div className="flex justify-center mt-auto"> {/* Align GitHub link to the bottom */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 hover:bg-gray-700 text-white font-normal py-2 px-2 square"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
