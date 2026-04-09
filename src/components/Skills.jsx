// import "./../styles/Skills.css";

// function Skills() {
//   return (
//     <div className="skills" id="skills">
//       <h2>My Skills</h2>

//       <div className="skills-container">
//         <div className="card">Java</div>
//         <div className="card">React</div>
//         <div className="card">Spring Boot</div>
//         <div className="card">MySQL</div>
//         <div className="card">MongoDB</div>
//       </div>
//     </div>
//   );
// }

// export default Skills;
import "./../styles/Skills.css";

function Skills() {
  return (
    <div className="skills-container-main">
      <h2>My Skills 🚀</h2>

      <div className="skills-grid">
        <div className="card">☕ Java</div>
        <div className="card">⚛️ React</div>
        <div className="card">🌱 Spring Boot</div>
        {/* <div className="card">🗄️ MySQL</div> */}
        <div className="card">🍃 MongoDB</div>
      </div>
    </div>
  );
}

export default Skills;