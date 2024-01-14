import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Personal Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SMART CANTEEN"
          des="Smart Canteen is an e-commerce website for online food ordering with a Real-time inventory management system, Real-time online payment system, and sales prediction using the ARIMA algorithm."
          githubLink="https://github.com/sushmaindrani13/Smart-Canteen.git"
        />
        <ProjectsCard
          title="WEB CONTENT EXTRACTOR"
          des="Web Content Extractor is a web scraping tool to identify and extract the exact information required by the user from a given website using Machine Learning algorithms like TD-IDF"
          githubLink="https://github.com/sushmaindrani13/Web-Content-Extractor.git"
        />
        <ProjectsCard
          title="TIC TAC TOE 3D"
          des="3D Tic-Tac-Toe game has a 3 dimensional view with dynamic 4*4 grid which is crafted using Java, AWT, and Swing libraries. The traditional 3x3 grid is replaced by an enticing 4x4 square block that elevates the strategic depth of each move."
          githubLink="https://github.com/your-username/tic-tac-toe-3d"
        />
        <ProjectsCard
          title="MY PORTFOLIO"
          des="MY PORTFOLIO is a website built using React JS, HTML, CSS, JavaScript. This website elegantly presents my professional information with a focus on a visually engaging user interface. The website features a well-designed interface, making it visually attractive and user-friendly for visitors."
          githubLink="https://github.com/sushmaindrani13/MyPortfolio.git"
        />
      </div>
    </section>
  );
};

export default Projects;
