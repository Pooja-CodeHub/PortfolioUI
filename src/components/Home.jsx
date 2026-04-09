import "./../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    
    <div className="home" id="home">

      <h1>Hi, I'm Pooja Sonawane</h1>

      <h3>Java Full Stack Developer</h3>

      <p>
        I build modern web applications using React, Spring Boot and REST APIs.
      </p>

      <div className="home-buttons">
         <Link to="/about" className="about-btn">
          About Me
        </Link>

        {/* <a href="#contact">
          <button className="btn2">Contact Me</button>
        </a> */}
      </div>

    </div>

    
  );
}

export default Home;
