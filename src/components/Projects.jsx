import "./../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2>My <span>Projects</span></h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>Agriculture Chatbot </h3>
          <p>React + Spring Boot + REST API + MySQL</p>

          
        </div>

        <div className="project-card">
          <h3>User Management System </h3>
          <p>Spring Boot + JWT + MongoDB</p>

          
        </div>
         <div className="project-card">
          <h3> My Portfolio </h3>
          <p>React + Spring Boot + MySQL</p>

          
        </div>

      </div>
    </div>
  );
}

export default Projects;