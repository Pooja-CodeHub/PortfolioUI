import "./../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2>My Projects 🚀</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>Agriculture Chatbot 🌱</h3>
          <p>React + Spring Boot + REST API + MySQL</p>

          {/* <div className="buttons">
            <a href="#" target="_blank">Live</a>
            <a href="#" target="_blank">Code</a>
          </div> */}
        </div>

        <div className="project-card">
          <h3>User Management System 🔐</h3>
          <p>Spring Boot + JWT + MongoDB</p>

          {/* <div className="buttons">
            <a href="#" target="_blank">Live</a>
            <a href="#" target="_blank">Code</a>
          </div> */}
        </div>

      </div>
    </div>
  );
}

export default Projects;