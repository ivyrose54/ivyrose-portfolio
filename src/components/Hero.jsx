import "../styles/Hero.css";
import profile from "../assets/PrettyAyvee.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Hero() {
  return (
    <section className="hero" id="hero">
<div className="socials">

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

  <a href="mailto:bual.ivyrose@gmail.com">
    <MdOutlineEmail />
  </a>

</div>

      <div className="hero-text">
        <p className="hello">Hello, I'm</p>
        <h1>Ivy Rose</h1>
        <h2>WordPress &amp;<br />Frontend Developer</h2>
        <p className="desc">
          I build responsive, user-friendly websites with clean code and modern design.
        </p>
        <div className="buttons">
<a href="#work" className="primary">

  VIEW MY WORK &nbsp;&nbsp;

  <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
    <path
      d="M0 5H18M18 5L13 1M18 5L13 9"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>

</a>
<a
  href="/IvyRose_Resume.pdf"
  download
  className="secondary"
>
  DOWNLOAD CV &nbsp;&nbsp;

  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
    <path
      d="M7 1V11M7 11L3 7M7 11L11 7M1 14H13"
      stroke="#c9685f"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
</a>
        </div>
      </div>

      <div className="hero-img">
        <div className="circle">
          <img src={profile} alt="Ivy Rose" />
        </div>
      </div>
    </section>
  );
}

export default Hero;