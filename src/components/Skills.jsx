
import "./../styles/Skills.css";

function Skills() {
  return (
    <div className="skills-main">

      <h2>
  My <span>Skills</span> 
</h2>

      {/* LANGUAGES */}
      <div className="skill-section">
        <h3>Languages</h3>
        <div className="skills-grid">
          <div className="card">Java</div>
          <div className="card">JavaScript</div>
          <div className="card">TypeScript</div>
          <div className="card">SQL</div>
        </div>
      </div>

      {/* BACKEND */}
      <div className="skill-section">
        <h3>Backend Technologies</h3>
        <div className="skills-grid">
          <div className="card">Spring Boot</div>
          <div className="card">Spring MVC</div>
          <div className="card">REST API</div>
          <div className="card">Microservices</div>
        </div>
      </div>

      {/* FRONTEND */}
      <div className="skill-section">
        <h3>Frontend</h3>
        <div className="skills-grid">
          <div className="card">React.js</div>
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">Bootstrap</div>
        </div>
      </div>

      {/* SECURITY */}
      <div className="skill-section">
        <h3>Security</h3>
        <div className="skills-grid">
          <div className="card">JWT Authentication</div>
          <div className="card">Spring Security</div>
        </div>
      </div>

      {/* DATABASE */}
      <div className="skill-section">
        <h3>Databases</h3>
        <div className="skills-grid">
          <div className="card">MySQL</div>
          <div className="card">MongoDB</div>
        </div>
      </div>

      {/* TOOLS */}
      <div className="skill-section">
        <h3>Tools & Utilities</h3>
        <div className="skills-grid">
          <div className="card">Docker</div>
          <div className="card">Postman</div>
          <div className="card">Git</div>
        </div>
      </div>

      {/* IDE */}
      <div className="skill-section">
        <h3>IDEs</h3>
        <div className="skills-grid">
          <div className="card">IntelliJ IDEA</div>
          <div className="card">VS Code</div>
        </div>
      </div>

    </div>
  );
}

export default Skills;