// import "./../styles/Footer.css";
// function Footer() {
//   return (
//     <div className="footer">
//       <p>© 2026 Pooja | All Rights Reserved</p>

//       <div className="social-links">
//         <a 
//           href="https://www.linkedin.com/in/pooja-sonawane08"
//           target="_blank" 
//           rel="noopener noreferrer"
//         >
//           LinkedIn
//         </a>

//         <span> | </span>

//         <a 
//           href="https://github.com/Pooja-CodeHub"
//           target="_blank" 
//           rel="noopener noreferrer"
//         >
//           GitHub
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import "./../styles/Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <p>© 2026 Pooja | All Rights Reserved</p>

      <div className="social-links">

        <a 
          href="https://www.linkedin.com/in/pooja-sonawane08"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a 
          href="https://github.com/Pooja-CodeHub"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

      </div>
    </div>
  );
}

export default Footer;