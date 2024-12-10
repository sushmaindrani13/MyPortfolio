import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-12"
    >
      <h2 className="text-4xl font-bold mb-6">Academic Knowledge</h2>
      <div className="w-full border-l-[10px] border-l-black border-opacity-30 flex flex-col gap-8 overflow-y-auto max-h-[800px]">
        <ResumeCard
          title="Masters in Computer Science"
          subTitle="University of North Carolina at Charlotte (2023 - 2024)"
          result="GPA 4.0"
          des={
            <>
              <div className="mb-4">
                <ul className="list-disc ml-6">
                  <li>Established a robust groundwork in algorithms and data structures, essential for crafting software solutions that are both efficient and scalable.</li>
                  <li>Attained proficiency in the intricacies of database design and management, actively contributing to the optimization of data organization and retrieval processes.</li>
                  <li>Developed a comprehensive understanding of intelligent systems, including machine learning applications, enhancing analytical and decision-making capabilities.</li>
                  <li>Acquired knowledge of building scalable, fault-tolerant systems using platforms like AWS, Azure, and Kubernetes.</li>
                  <li>Advanced skills in software engineering methodologies, including Agile and DevOps practices, to ensure high-quality software delivery.</li>
                  <li>Conducted in-depth research, analyzed data, and authored technical papers, contributing to advancements in computer science.</li>
                </ul>
              </div>
              
            </>
          }
        />
        <ResumeCard
          title="B.Tech in Computer Science"
          subTitle="G.Narayanamma Institute Of Technology and Science for Women (2016 - 2020)"
          result="GPA 8.1"
          des={
            <>
              <div className="mb-4">
                <ul className="list-disc ml-6">
                  <li>Learned key concepts in algorithms, data structures, and object-oriented programming, enabling problem-solving and software development.</li>
                  <li>Gained expertise in programming languages like Java, Python, and C++, along with hands-on experience in writing clean, efficient, and scalable code.</li>
                  <li>Explored the inner workings of operating systems, including process management, memory allocation, and file systems.</li>
                  <li>Learned how to design, optimize, and manage databases using SQL and NoSQL technologies.</li>
                  <li>Gained practical knowledge of the Software Development Life Cycle (SDLC), including Agile methodologies and version control systems.</li>
                  <li>Applied theoretical knowledge to real-world problems through academic projects.</li>
                </ul>
              </div>
              
            </>
          }
        />
      </div>
    </motion.div>
  );
};

export default Education;