import "./../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <p>© 2026 Pooja | All Rights Reserved</p>

      <div className="social-links">
        <a 
          href=" linkedin.com/in/pooja-sonawane08 " 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <span> | </span>

        <a 
          href=" | github.com/PoojaCodeHub" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Footer;