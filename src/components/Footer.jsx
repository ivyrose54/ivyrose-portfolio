import "../styles/Footer.css";

import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">

        <h2>IR.</h2>

        <div>
          <p className="footer-name">IVY ROSE</p>
          <span>DEVELOPER</span>
        </div>

      </div>

      <p className="footer-center">
        © 2026 Ivy Rose. All Rights Reserved.
      </p>

      <div className="footer-socials">

        <a
          href="https://www.linkedin.com/in/ivy-rose-bual-9b6755382"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/ivyrose54"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.facebook.com/ivyrosecb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/ivyrose.54/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

    </footer>
  );
}

export default Footer;