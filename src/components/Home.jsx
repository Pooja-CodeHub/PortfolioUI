import "./../styles/Home.css";
import { Link } from "react-router-dom";
import myPhoto from "../assets/Portfoliophoto.jfif";

// function Home() {
//   return (
//     <div className="home">

//       <div className="home-container">

//         {/* LEFT SIDE (TEXT) */}
//         <div className="home-text">
//           <h2>Hi,</h2>
//           <h1> I'm Pooja Sonawane</h1>
//           <h3>Java Full Stack Developer</h3>
//           <p>
//             I build modern web applications using React, Spring Boot and REST APIs.
//           </p>

//           <div className="home-buttons">
//             <Link to="/about" className="about-btn">
//               About Me
//             </Link>

//             <a href="/Pooja_Sonawane_CV.pdf" download className="cv-btn">
//     Download CV
//   </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE (IMAGE) */}
//         <div className="home-image">
//           <img src={myPhoto} alt="Pooja" />
//         </div>

//       </div>

//     </div>
    
//   );
// }

// export default Home;


function Home() {
  return (
    <div className="home">

    
      

      {/* MAIN CONTENT */}
      <div className="home-content">

        {/* LEFT IMAGE */}
        <div className="home-left">
          <div className="circle">
            <img src={myPhoto} alt="profile" />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="home-right">
          <h4>Hello, I'm</h4>
          <h1>Pooja Sonawane</h1>
          <h3>And I'm a <span>Full Stack Developer</span></h3>

          <p>
            I am a passionate Java Full Stack Developer specializing in building scalable and responsive web applications
             using React, Spring Boot, and REST APIs. I enjoy solving real-world problems and continuously improving my technical skills.
          </p>

          <div className="buttons">
  <Link to="/contact" className="btn primary">
    Contact Me
  </Link>

  <a href="/Pooja_Sonawane_CV.pdf" download className="btn secondary">
    Download CV
  </a>
</div>
        </div>

      </div>

    
      

    </div>
  );
}

export default Home;