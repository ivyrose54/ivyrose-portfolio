import { useState, useEffect, useRef } from "react";

import "../styles/Work.css";

import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

import recoopImg from "../assets/recoop.jpg";
import trashpointsImg from "../assets/trashpoints.jpg";
import nurstatisticsImg from "../assets/nurstatistics.jpg";
import icecreamImg from "../assets/icecreamstore.jpg";
import energyMonitoringImg from "../assets/energymonitoring.jpg";

function Work() {
  const workRef = useRef(null);
  const [showWork, setShowWork] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowWork(true);
        }
      },
      { threshold: 0.2 }
    );

    if (workRef.current) {
      observer.observe(workRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      image: recoopImg,
      title: "Renewable Energy Website",
      tech: "WordPress / Elementor / PHP",
      link: "https://recp.coop",
    },
    {
      image: trashpointsImg,
      title: "Trashpoints",
      tech: "React Native Mobile App",
      link: "https://snack.expo.dev/@rouza/trashpoints-v2",
    },
    {
      image: nurstatisticsImg,
      title: "Nurstatistics",
      tech: "React JS Website",
      link: "https://nurstatistics-88795.web.app/",
    },
    {
      image: icecreamImg,
      title: "Ice Cream Store",
      tech: "React JS Website",
      link: "https://ivyrose54.github.io/IceCreamStore/",
    },
    {
      image: energyMonitoringImg,
      title: "Energy Monitoring",
      tech: "Flutter Mobile App",
      link: "https://github.com/ivyrose54/flutter-energy-app",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextProjects = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevProjects = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const visibleProjects = projects.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section
      ref={workRef}
      className={`work-section ${showWork ? "show-work" : ""}`}
      id="work"
    >
      <div className="work-header">
        <div>
          <p>PORTFOLIO</p>

          <h2>
            My Recent Work <span>✦</span>
          </h2>
        </div>

        <a href="#work">
          VIEW ALL PROJECTS <span>→</span>
        </a>
      </div>

      <div className="work-carousel">
        <button className="work-arrow" onClick={prevProjects}>
          <FaArrowLeft />
        </button>

        <div className="work-grid desktop-projects">
          {visibleProjects.map((project, index) => (
            <article
              className="work-card"
              key={index}
              style={{ animationDelay: `${index * 0.18}s` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="work-image-link"
              >
                <img src={project.image} alt={project.title} />

                <div className="work-overlay">
                  <span>
                    View Project <FaExternalLinkAlt />
                  </span>
                </div>
              </a>

              <h3>{project.title}</h3>
              <p>{project.tech}</p>
            </article>
          ))}
        </div>

        <div className="work-grid mobile-projects">
          {projects.map((project, index) => (
            <article
              className="work-card"
              key={index}
              style={{ animationDelay: `${index * 0.14}s` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="work-image-link"
              >
                <img src={project.image} alt={project.title} />

                <div className="work-overlay">
                  <span>
                    View Project <FaExternalLinkAlt />
                  </span>
                </div>
              </a>

              <h3>{project.title}</h3>
              <p>{project.tech}</p>
            </article>
          ))}
        </div>

        <button className="work-arrow" onClick={nextProjects}>
          <FaArrowRight />
        </button>
      </div>

      <div className="work-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span key={index} className={page === index ? "active" : ""}></span>
        ))}
      </div>
    </section>
  );
}

export default Work;