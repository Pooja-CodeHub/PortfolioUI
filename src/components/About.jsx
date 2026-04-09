// import "./../styles/About.css";

// function About() {
//   return (
//     <div className="about" id="about">
//       <h2>About Me</h2>
//       <p>
//         I am a motivated Java Full Stack Developer with hands-on experience in building responsive web applications using React,
//         Spring Boot, and REST APIs. I have worked on projects involving backend integration and database management with MySQL and MongoDB.
//         I am a quick learner with strong problem-solving skills, eager to contribute and grow in a dynamic software development environment.
//       </p>

//       {/* 👇 Contact Button */}
//       <a href="#contact" className="contact-btn">Contact Me</a>
//     </div>
//   );
// }

// export default About;
import "./../styles/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <div className="about">
        <h2>About Me 👩‍💻</h2>
        <p>
          I am a motivated Java Full Stack Developer with hands-on experience in building responsive web applications using React,
          Spring Boot, and REST APIs. I have worked on projects involving backend integration and database management with MySQL and MongoDB.
          I am a quick learner with strong problem-solving skills, eager to contribute and grow in a dynamic software development environment.
        </p>

        <Link to="/contact" className="contact-btn">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default About;