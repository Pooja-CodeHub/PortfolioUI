
import "./../styles/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
       <h2>
  About <span>Me</span>
</h2>
      <div className="about">
       
        <p>
I am a passionate Java Full Stack Developer with hands-on experience in building responsive and scalable web applications using React, Spring Boot, and REST APIs. I have worked on projects that involve backend integration, authentication, and database management using MySQL and MongoDB.

I enjoy solving real-world problems and writing clean, efficient code. I am a quick learner with strong problem-solving skills, always eager to explore new technologies and improve my development skills.

I am looking for an opportunity where I can contribute to real-world projects, grow as a developer, and add value to the organization.
        </p>

        <Link to="/contact" className="contact-btn">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default About;