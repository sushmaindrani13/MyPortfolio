import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [ "Programmer.", "Software Engineer.", "Computer Science Student.", "Full Stack Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-[1000px] flex flex-col gap-100">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Dangeti Sushma Indrani</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#E0B0FF"
          />
        </h2>
        <p className="text-base  leading-6 tracking-wide">
        Experienced software developer with more than 3 years of hands-on experience in diverse projects, specifically in the healthcare domain, showcasing full-stack development proficiency. Currently pursuing a Masters degree in Computer Science at the University of North Carolina at Charlotte, I'm eager to contribute my skills to innovative solutions addressing societal challenges. Seeking a challenging position to leverage technical expertise, problem-solving skills, and a passion for positive impact.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner