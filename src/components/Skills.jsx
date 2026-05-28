import { useState, useEffect, useRef } from "react";

import "../styles/Skills.css";

import {
  FaReact,
  FaWordpress,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaArrowLeft,
  FaArrowRight,
  FaPhp,
  FaLaravel,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiElementor,
  SiFlutter,
  SiSupabase,
  SiCanva,
  SiFigma,
  SiReact,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {

  const skillGroups = [

    {
      category: "Frontend",
      items: [
        { icon: <FaReact />, title: "React JS" },
        { icon: <FaHtml5 />, title: "HTML5" },
        { icon: <FaCss3Alt />, title: "CSS3" },
        { icon: <FaJs />, title: "JavaScript" },
      ],
    },

    {
      category: "CMS / Backend",
      items: [
        { icon: <FaWordpress />, title: "WordPress" },
        { icon: <SiElementor />, title: "Elementor" },
        { icon: <FaPhp />, title: "PHP" },
        { icon: <FaLaravel />, title: "Laravel" },
      ],
    },

    {
      category: "Mobile Development",
      items: [
        { icon: <SiReact />, title: "React Native" },
        { icon: <SiFlutter />, title: "Flutter" },
      ],
    },

    {
      category: "Backend & Database",
      items: [
        { icon: <FaPhp />, title: "PHP" },
        { icon: <FaLaravel />, title: "Laravel" },
        { icon: <SiSupabase />, title: "Supabase" },
      ],
    },

    {
      category: "UI/UX & Design",
      items: [
        { icon: <SiFigma />, title: "Figma" },
        { icon: <SiCanva />, title: "Canva" },
      ],
    },

    {
      category: "Tools",
      items: [
        { icon: <FaGitAlt />, title: "Git" },
        { icon: <FaGithub />, title: "GitHub" },
        { icon: <VscVscode />, title: "VS Code" },
      ],
    },

  ];

  const [activeGroup, setActiveGroup] = useState(0);

  const skillsRef = useRef(null);

  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {
          setShowSkills(true);
        }

      },

      {
        threshold: 0.3,
      }

    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();

  }, []);

  const nextGroup = () => {

    setActiveGroup((prev) =>
      (prev + 1) % skillGroups.length
    );

  };

  const prevGroup = () => {

    setActiveGroup((prev) =>
      prev === 0 ? skillGroups.length - 1 : prev - 1
    );

  };

  const currentGroup = skillGroups[activeGroup];

  return (

    <section
      ref={skillsRef}
      className={`skills-section ${showSkills ? "show-skills" : ""}`}
      id="skills"
    >

      <div className="skills-title">

        <p>WHAT I DO</p>

        <h2>My Skills</h2>

        <div className="skills-line">
          <span></span>
          <small>✦</small>
        </div>

      </div>

      <div className="skills-carousel">

        <button
          className="skills-arrow"
          onClick={prevGroup}
        >
          <FaArrowLeft />
        </button>

        <div
          className="skills-content"
          key={activeGroup}
        >

          <h3>{currentGroup.category}</h3>

          <div className="skills-row">

            {currentGroup.items.map((skill, index) => (

              <div
                className="skill-item"
                key={index}
                style={{
                  animationDelay: `${index * 0.12}s`,
                }}
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h4>{skill.title}</h4>

              </div>

            ))}

          </div>

        </div>

        <button
          className="skills-arrow"
          onClick={nextGroup}
        >
          <FaArrowRight />
        </button>

      </div>

    </section>
  );
}

export default Skills;