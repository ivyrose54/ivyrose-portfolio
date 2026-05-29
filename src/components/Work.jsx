import { useState, useEffect, useRef } from "react";

import "../styles/Work.css";

import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

import recoopImg from "../assets/recoop.jpg";
import trashpointsImg from "../assets/trashpoints.jpg";
import trashpointsFigmaImg from "../assets/trashpoints-figma.jpg";
import nurstatisticsImg from "../assets/nurstatistics.jpg";
import icecreamImg from "../assets/icecreamstore.jpg";
import tutorlinkImg from "../assets/tutorlink.jpg";
import wakuwakuImg from "../assets/wakuwaku-anime.jpg";
import energyMonitoringImg from "../assets/energymonitoring.jpg";
import iceLandingImg from "../assets/ice-landing.jpg";

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
      type: "Website",
      link: "https://recp.coop",
    },
    {
      image: trashpointsImg,
      title: "TrashPoints",
      tech: "React Native Mobile App",
      type: "Mobile App",
      link: "https://snack.expo.dev/@rouza/trashpoints-v2",
    },
    {
      image: trashpointsFigmaImg,
      title: "TrashPoints Design",
      tech: "Figma Design & Wireframe",
      type: "Figma",
      link: "https://www.figma.com/design/slId0ZZQfRnUboHvEGagfp/TrashPoints?node-id=0-1&t=1s4Usi63y2b4egfo-1",
    },
    {
      image: nurstatisticsImg,
      title: "Nurstatistics",
      tech: "React JS Website",
      type: "Website",
      link: "https://nurstatistics-88795.web.app/",
    },
    {
      image: icecreamImg,
      title: "Ice Cream Store",
      tech: "React JS Website",
      type: "Website",
      link: "https://ivyrose54.github.io/IceCreamStore/",
    },
    {
      image: tutorlinkImg,
      title: "TutorLink Design",
      tech: "Figma Design & Wireframe",
      type: "Figma",
      link: "https://www.figma.com/design/VpC4mNFTVibUHyzkPZM1fl/Group7?node-id=0-1&t=lOXqMjo84gA7q3eQ-1",
    },
    {
      image: wakuwakuImg,
      title: "WK Anime Site Design",
      tech: "Figma Design & Wireframe",
      type: "Figma",
      link: "https://www.figma.com/design/GrIfKu24WfazhlO9lPmzrN/Anime?node-id=2-2&t=KX1QSJ3wi6lCJPFF-1",
    },
    {
      image: energyMonitoringImg,
      title: "Energy Monitoring",
      tech: "Flutter Mobile App",
      type: "Mobile App",
      link: "https://github.com/ivyrose54/flutter-energy-app",
    },
    {
      image: iceLandingImg,
      title: "ICE Landing Page Design",
      tech: "Figma Design & Wireframe",
      type: "Figma",
      link: "https://www.figma.com/design/URzPYaJN7psCpdAyK0jC0F/Bual--Ivy-Rose-C.?node-id=0-1&t=sMvC5WMY6F5rEPkt-1",
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

  const ProjectCard = ({ project, index }) => (
    <article
      className="work-card"
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
            {project.type === "Figma" ? "View Design" : "View Project"}{" "}
            <FaExternalLinkAlt />
          </span>
        </div>
      </a>

      <span
        className={`project-badge ${project.type
          .toLowerCase()
          .replace(" ", "-")}`}
      >
        {project.type}
      </span>

      <h3>{project.title}</h3>
      <p>{project.tech}</p>
    </article>
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
            Featured Projects <span>✦</span>
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
            <ProjectCard project={project} index={index} key={index} />
          ))}
        </div>

        <div className="work-grid mobile-projects">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={index} />
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