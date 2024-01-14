import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-400">
          <h2 className="text-4xl font-bold">Industrial Experience</h2>
        </div>
        <div className="mt-6 w-full h-[800px] border-l-[10px] border-l-black border-opacity-30 flex flex-col gap-50000">

          <ResumeCard
            title="Full Stack Engineering Senior Analyst"
            subTitle="Accenture - (2022 - 2023)"
            result="India"
            des={
              <>
                ● In collaboration with a team of four developers, we executed a proof of concept, securing client approval to recast 320 SOAP projects into Karate.
                <br></br> <br></br>
                ● Developed a framework to automate the conversion of Groovy Scripts to Karate with Java/Javascript integration.
                <br></br> <br></br>
                ● Developed 30 reusable utilities in both Java and JavaScript, which were utilized across 128 SOAP projects, leading to a 35% increase in productivity.
                <br></br> <br></br>
                ● Provided leadership and mentorship to a team of associate developers in implementing the karate testing framework, ensuring the high quality of deliverables.
                <br></br> <br></br>
                ● Programmed a DataExtract engine, a pivotal feature on the EPM website, that automated the data extraction from various sources and transformed it into structured JSON files.

              </>
            }
          />
         <ResumeCard
            title="Full Stack Engineering Analyst"
            subTitle="Accenture - (2020 - 2021)"
            result="India"
            des={
              <>
               ● Migrated 23 microservices from Bluemix environment to Microsoft azure.
               <br></br> <br></br>
               ● Deployed the migrated applications into AKS (Azure Kubernetes Service) environment through Jenkins.
               <br></br> <br></br>
               ● Remediated issues that surfaced subsequent to the migration of the applications from BlueMix to Azure, resulting in 26% increase in performance.
               <br></br> <br></br>
               ● Facilitated the smooth handover of migrated services to clients, providing comprehensive usage demonstrations, and delivering thorough documentation.
               <br></br> <br></br>

              </>
            }
          />
        </div>
        
       
      </div>
      
    </motion.div>
  );
};

export default Experience;
