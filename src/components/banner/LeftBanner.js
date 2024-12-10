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
        Welcome to my profile! Myself Sushma Indrani and I am a passionate Software Engineer with over 4 years of experience, building impactful and reliable software solutions. My expertise spans Java, Python, JavaScript, and modern frameworks such as React, Angular, and Spring Boot. I have strong experience in designing and deploying scalable applications, leveraging cloud platforms (AWS, Azure), and utilizing containerization technologies (Docker, Kubernetes). I’m skilled at managing complex databases and developing interactive web applications that enhance user experiences. Driven by challenges, I thrive in collaborative environments and am always eager to learn and adapt. Let’s connect and explore how we can work together to create innovative and meaningful software!        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner