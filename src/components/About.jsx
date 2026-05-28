import { useEffect, useRef } from "react";
import "../styles/About.css";
import aboutImg from "../assets/About.jpg";

import { FiCheckCircle } from "react-icons/fi";
import { BsGrid, BsSuitHeart, BsCodeSlash } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && aboutRef.current) {
            const els = aboutRef.current.querySelectorAll(
              ".about-title, .about-desc, .about-list, .about-btn, .about-right, .stat"
            );

            els.forEach((el) => el.classList.add("animate"));
          }
        });
      },
      { threshold: 0.15 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-left">
        <div className="about-title">
          <h3>ABOUT ME</h3>

          <div className="about-line">
            <span className="line-bar"></span>
            <span className="line-star">✦</span>
          </div>
        </div>

        <p className="about-desc">
          I'm a WordPress and Frontend Developer who loves turning ideas into
          beautiful, functional, and responsive websites.
        </p>

        <ul className="about-list">
          <li><FiCheckCircle /> WordPress Developer</li>
          <li><FiCheckCircle /> Frontend Developer</li>
          <li><FiCheckCircle /> Mobile App Developer</li>
          <li><FiCheckCircle /> Passionate about UI/UX</li>
        </ul>

        <button className="primary about-btn">
          MORE ABOUT ME
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
            <path
              d="M0 5H18M18 5L13 1M18 5L13 9"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      <div className="about-right">
        <img src={aboutImg} alt="About" />
      </div>

      <div className="about-stats">
        <div className="stat">
          <span className="stat-icon"><BsCodeSlash /></span>
          <div>
            <h4>10+</h4>
            <p>Technologies</p>
          </div>
        </div>

        <div className="stat">
          <span className="stat-icon"><BsGrid /></span>
          <div>
            <h4>5+</h4>
            <p>Projects Completed</p>
          </div>
        </div>

        <div className="stat">
          <span className="stat-icon"><BsSuitHeart /></span>
          <div>
            <h4>4+</h4>
            <p>Happy Clients</p>
          </div>
        </div>

        <div className="stat">
          <span className="stat-icon"><AiOutlineHeart /></span>
          <div>
            <h4>100%</h4>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;