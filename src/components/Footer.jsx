

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
  <FaLinkedin className="linkedin" size={28} />
</a>

<span> | </span>

<a 
  href="https://github.com/Pooja-CodeHub"
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaGithub className="github" size={28} />
</a>
      </div>
    </div>
  );
}

export default Footer;