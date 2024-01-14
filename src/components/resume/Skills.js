import React from 'react'

const Skills = () => {
  return (
    
      <div className="w-full lgl:w-2/3">
        <div className="py-12  flex flex-col gap-4">
         
          <h4 className="text-2xl md:text-3xl font-bold text-purple-300">Programming Languages/ Scripting Languages : </h4>
          <h4 className="text-2xl md:text-300xl font-normal">Java, Python, C, SQL, JavaScript, HTML, CSS, PHP, Karate DSL</h4>

       </div>
       

       <div className="py-120  flex flex-col gap-4">
         
        <h4 className="text-2xl md:text-3xl font-bold">Frameworks : </h4>
          <h4 className="text-2xl md:text-300xl font-normal">Spring Boot, Spring MVC, Django, ReactJS, Karate </h4>         
      </div>
      

      <div className="py-12  flex flex-col gap-4">
         
        <h4 className="text-2xl md:text-3xl font-bold">Tools/ Softwares: </h4>
          <h4 className="text-2xl md:text-300xl font-normal">GitHub, Jenkins, Jira, Spring Tool Suite, Eclipse, IntelliJ, Visual Studio,
Postman, ReadyAPI, SoapUI, MySQL, pgAdmin, AKS (Azure Kubernetes Service), SonarQube, MS Excel, Microsoft Office
</h4>         
      </div>

      <div className="py-0  flex flex-col gap-4">
         
         <h4 className="text-2xl md:text-3xl font-bold">Databases : </h4>
           <h4 className="text-2xl md:text-300xl font-normal">MySQL, PostgreSQL, MongoDB, Azure Redis, Azure Cosmos DB</h4> 
                
       </div>
      </div>

      
  );
}

export default Skills