import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-12"
    >
      <h2 className="text-4xl font-bold mb-6">Industrial Experience</h2>
      <div className="w-full border-l-[10px] border-l-black border-opacity-30 flex flex-col gap-8 overflow-y-auto max-h-[800px]">
        <ResumeCard
          title="Software Developer"
          subTitle="UNCC - (2023 - 2024)"
          result="Charlotte, NC"
          des={
            <>
              <div className="mb-4">
                <h3 className="font-semibold">Project: FIE 2024</h3>
                <ul className="list-disc ml-6">
                  <li>Performed data analysis on 3 semesters of student survey data (450 respondents) to identify trends and insights.</li>
                  <li>Created 10+ impactful visualizations and interactive dashboards using Tableau and D3.js to summarize key learning, engagement, and accessibility metrics.</li>
                  <li>Developed automation scripts using Python for automated data cleaning & analysis, reducing the analysis time by 20%.</li>
                  <li>Performed descriptive statistics on the obtained data and presented the evaluations and visualizations in FIE 2024 research paper (Co-authored).</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">Project: SIGCSE 2025</h3>
                <ul className="list-disc ml-6">
                  <li>Co-designed and conducted a user study to evaluate the effectiveness of a software security module and an interactive visualization tool for neurodivergent students.</li>
                  <li>Conducted data cleaning and data preprocessing of 9+ interview transcripts.</li>
                  <li>Performed qualitative and quantitative analysis on the data using Kruskal-Wallis H-test, Mann-Whitney U-test, and post-hoc Dunn test to identify significant differences across the data.</li>
                  <li>Presented the key findings and the evaluation results in SIGCSE 2025 poster (Co-authored).</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">Project: Chatbot for PVTool (Work in Progress)</h3>
                <ul className="list-disc ml-6">
                  <li>Collaborated in the development of a web-based application to visualize and simulate stack-smashing attacks using Java, Angular, and PostgreSQL.</li>
                  <li>Created dynamic visualizations of call stack and stack frames, providing clear, interactive representations of function parameters, local variables, and return addresses.</li>
                  <li>Contributed to the development of an educational chatbot using Google Dialogflow to answer questions related to a Software Security course.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">Project: ML Model for Voltage Prediction</h3>
                <ul className="list-disc ml-6">
                  <li>Developed a machine learning model using federated learning framework to predict voltage levels across 5 decentralized clients.</li>
                  <li>Achieved model accuracy through optimization techniques like regularization, batch normalization, and early stopping, preventing overfitting and enhancing generalizability.</li>
                  <li>Implemented a system where local models were trained on individual clients and combined into a global model.</li>
                  <li>Integrated a feedback loop where updated global parameters were sent back to local models for further training, improving accuracy and minimizing data exchange.</li>
                </ul>
              </div>
            </>
          }
        />

        <ResumeCard
          title="Senior Software Engineer"
          subTitle="Accenture - (2022 - 2023)"
          result="India"
          des={
            <>
              <div className="mb-4">
                <h3 className="font-semibold">Project: Karate QA Refactoring</h3>
                <ul className="list-disc ml-6">
                  <li>Led an Agile team of eight developers to secure client approval for recasting 128 SOAP projects to Karate (test automation framework).</li>
                  <li>Developed a smart automation framework (SAF) to automate the conversion of Groovy Scripts from ReadyAPI and SOAPUI to Karate with Java/Javascript, Python integration.</li>
                  <li>Programmed 30 reusable Java, Python, and JavaScript utilities, which are utilized across 128 SOAP Web Services and 79 RESTful Web Services, cutting development time by 36%.</li>
                  <li>Developed automated testing scripts and integration tests using JUnit, Mockito, and Cucumber frameworks.</li>
                  <li>Conducted code reviews, resolving 15+ issues per release and improving code quality by 25%.</li>
                  <li>Provided leadership and mentorship to a team of associate developers in implementing the Karate testing framework, ensuring high-quality deliverables.</li>
                  <li>Delivered client demos and facilitated smooth handovers, ensuring seamless transitions and clear understanding of project deliverables.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold">Project: Data Extraction Engine</h3>
                <ul className="list-disc ml-6">
                  <li>Built interactive REST API’s for multiple microservices using Spring MVC, secured APIs employing OAuth2, JWT authentication, and seamlessly integrated with front-end using React.js.</li>
                  <li>Programmed a DataExtract engine, a pivotal feature on the EPM website, that automated data extraction from various sources and transformed it into structured JSON files.</li>
                  <li>Created cron jobs to automate the process of creating tickets on the JIRA dashboard, with relevant error logs.</li>
                  <li>Created a server component on Amazon EC2 utilizing AWS services (RDS, S3, Secrets), distributing workloads to worker instances and enabling auto-scaling based on traffic.</li>
                  <li>Designed database structures for 10+ applications, optimizing queries for a 15% improvement in response times.
                  </li>
                </ul>
              </div>
            </>
          }
        />

        <ResumeCard
          title="Software Engineer"
          subTitle="Accenture - (2020 - 2021)"
          result="India"
          des={
            <>
              <div className="mb-4">
                <h3 className="font-semibold">Project: Bluemix to Azure and AWS Migration</h3>
                <ul className="list-disc ml-6">
                  <li>Migrated 23 microservices from the Bluemix environment to Microsoft Azure and Amazon AWS.</li>
                  <li>Deployed the migrated applications into AKS (Azure Kubernetes Service) environment through Jenkins.</li>
                  <li>Remediated microservices from IBM Message Hub to Azure Event Hubs, Cloudant DB to Cosmos DB (Mongo style), Redis to Azure Redis and Hystrix to Sidecar, enhancing system interoperability.</li>
                  <li>Facilitated the smooth handover of migrated services to clients, providing comprehensive usage demonstrations and thorough documentation.</li>
                  <li>Constructed multiple functional cloud solutions for 52 microservices using CI/CD Pipelines, Docker, and Kubernetes.
                  </li>
                </ul>
              </div>

            </>
          }
        />
      </div>
    </motion.div>
  );
};

export default Experience;
