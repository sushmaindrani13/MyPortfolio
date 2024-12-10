import React from 'react';

const Skills = () => {
  return (
    <div className="w-full lgl:w-2/3">
      <div className="py-6">
        <h4 className="text-2xl md:text-3xl font-bold text-purple-300">Programming Languages / Scripting Languages:</h4>
        <p className="text-lg md:text-xl font-normal">Java, Python, TypeScript, JavaScript, C#, HTML5, CSS, PHP, JQuery, Shell Scripting, GraphQL</p>
      </div>

      <div className="py-6">
        <h4 className="text-2xl md:text-3xl font-bold">Frameworks:</h4>
        <p className="text-lg md:text-xl font-normal">Spring Boot, NodeJS, Django, React, Angular, Hibernate, JUnit, Mockito, Cucumber, Maven, ASP.NET, TensorFlow, PyTorch, BDD</p>
      </div>

      <div className="py-6">
        <h4 className="text-2xl md:text-3xl font-bold">Tools / Software:</h4>
        <p className="text-lg md:text-xl font-normal">GitHub, Jenkins, Jira, Spring Tool Suite, Eclipse, IntelliJ, Visual Studio, Postman, ReadyAPI, SoapUI, MySQL, pgAdmin, Grafana, Swagger, SonarQube, MS Excel, Microsoft Office</p>
      </div>

      <div className="py-6">
        <h4 className="text-2xl md:text-3xl font-bold">Databases:</h4>
        <p className="text-lg md:text-xl font-normal">MongoDB, MySQL, PostgreSQL, DynamoDB, Azure Event Hubs</p>
      </div>

      <div className="py-6">
        <h4 className="text-2xl md:text-3xl font-bold">Cloud / DevOps:</h4>
        <p className="text-lg md:text-xl font-normal">AWS, Azure, AKS, Kafka, CI/CD Pipelines, Docker, Git</p>
      </div>
    </div>
  );
};

export default Skills;
