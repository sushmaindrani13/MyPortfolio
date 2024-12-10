import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-10">
        <h2 className="text-4xl font-bold">Achievements and Certifications</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {/* Example of an achievement */}
        <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-900">
          <h3 className="text-xl font-semibold text-designColor mb-4">Microsoft Certified: Azure Fundamentals</h3>
          <ul className="text-sm text-white mb-4 list-disc pl-6">
            <li>Gained foundational knowledge of cloud computing and core Azure services, including compute, networking, and storage, enabling the design and deployment of scalable and secure solutions on Microsoft Azure.</li>
            <li>Developed skills in managing and monitoring Azure resources, utilizing tools such as Azure Portal, Azure CLI, and PowerShell.</li>
            <li>Understood best practices for governance, cost management, and security within the Azure environment.</li>
          </ul>
          <p className="text-xs text-gray-400">Issued by: Microsoft Azure</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-900">
          <h3 className="text-xl font-semibold text-designColor mb-4">AWS Academy Graduate - AWS Academy Data Engineering</h3>
          <ul className="text-sm text-white mb-4 list-disc pl-6">
            <li>Acquired expertise in data engineering concepts and AWS data services, including data storage, processing, and analytics tools like Amazon S3, AWS Glue, and Amazon Redshift for building scalable data pipelines and data lakes.</li>
            <li>Developed practical skills in data integration, transformation, and visualization, enabling the design and implementation of efficient data workflows and insights generation using AWS services and best practices</li>
            <br></br>
          </ul>
          <p className="text-xs text-gray-400">Issued by: AWS Academy</p>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-900">
          <h3 className="text-xl font-semibold text-designColor mb-4">Frontiers in Education 2024 - Research paper</h3>
          <ul className="text-sm text-white mb-4 list-disc pl-6">
            <li>Co-authored a research paper on "Guided Learning and Interactive Visualization for Teaching & Learning Stack Smashing Attacks & Defenses: Experiences and Evaluation".</li>
            <li>The research paper presents a software security module and an interactive visualization tool which are designed to teach stack smashing attacks and defenses.</li>            <li>Presented the research paper in FIE conference 2024.</li>
            <br></br>
          </ul>
          <p className="text-xs text-gray-400">Issued by: FIE</p>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-900">
          <h3 className="text-xl font-semibold text-designColor mb-4">SIGCSE 2025 - Research poster</h3>
          <ul className="text-sm text-white mb-4 list-disc pl-6">
            <li>Co-authored a research poster on "Design of a User Study to evaluate the effectiveness of a Software Security Module for Neurodivergent Students".</li>
            <li>The research paper presents a comprehensive qualitative and quantitative analysis of student perceptions of the software security module.</li>            
            <br></br>
          </ul>
          <p className="text-xs text-gray-400">Issued by: SIGCSE</p>
        </div>
        {/* Add more achievements here */}
      </div>
    </section>
  );
};

export default Achievements;
