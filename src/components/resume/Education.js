import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
       
        <div className="mt-6 lgl:mt-14 w-[1000px] h-[650px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Masters in Computer Science"
            subTitle="University of North Carolina at Charlotte (2023 - 2025)"
            result="4/4"
            des={
              <>
                - Established a robust groundwork in algorithms and data structures, essential for crafting software solutions that are both efficient and scalable.
                <br /> <br />
                - Attained proficiency in the intricacies of database design and management, actively contributing to the optimization of data organization and retrieval processes.
                <br /> <br />
                - Developed a comprehensive understanding of intelligent systems, including machine learning applications, enhancing analytical and decision-making capabilities.
              </>
            }
            />
          <ResumeCard
            title="B.Tech in Computer Science"
            subTitle="G.Narayanamma Institute Of Technology and Science for Women (2016 - 2020)"
            result="8.1/10"
            des={
              <>
                - Ganied strong foundation in core computer science subjects.
                <br /> <br />
                - Developed a specific interest in subjects such as Operating systems, Networking and programming languages.
                <br /> <br />
                - Acquired practical experience through engaging in diverse projects throughout academic studies.
              </>
            }
          />
          
        </div>
      </div>
      
    </motion.div>
  );
}

export default Education