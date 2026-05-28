import { useEffect, useRef, useState } from "react";
import "../styles/Services.css";

import { FiMonitor, FiSmartphone } from "react-icons/fi";
import { LuPenTool } from "react-icons/lu";
import { TbRocket } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

function Services() {
  const servicesRef = useRef(null);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowServices(true);
        }
      },
      { threshold: 0.25 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: (
        <div className="device-icon">
          <FiMonitor />
          <FiSmartphone />
        </div>
      ),
      title: (
        <>
          WordPress <br />
          Development
        </>
      ),
      desc: "Building custom, fast and responsive WordPress websites.",
    },
    {
      icon: (
        <div className="device-icon">
          <FiMonitor />
          <FiSmartphone />
        </div>
      ),
      title: (
        <>
          Frontend <br />
          Development
        </>
      ),
      desc: "Creating responsive and interactive UI using React JS.",
    },
    {
      icon: <LuPenTool />,
      title: (
        <>
          UI/UX <br />
          Design
        </>
      ),
      desc: "Designing clean, modern and user-friendly interfaces.",
    },
    {
      icon: <TbRocket />,
      title: (
        <>
          Website <br />
          Optimization
        </>
      ),
      desc: "Improving performance, speed and SEO for better results.",
    },
  ];

  return (
    <section
      ref={servicesRef}
      className={`services-section ${showServices ? "show-services" : ""}`}
      id="services"
    >
      <div className="services-title">
        <h2>
          My Services <span>✦</span>
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article
            className="service-card"
            key={index}
            style={{
              animationDelay:
                index === 0
                  ? "0.25s"
                  : index === 1
                  ? "0.55s"
                  : "0.85s",
            }}
          >
            <div className="service-top-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <button className="service-arrow">
              <FaArrowRight />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;