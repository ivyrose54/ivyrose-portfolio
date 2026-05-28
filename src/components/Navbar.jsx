import { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -50% 0px"  /* ✅ accounts for sticky navbar height */
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();               /* ✅ prevent default jump */
    setActive(id);                    /* ✅ immediately set active */
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="logo">
        <span>IR.</span>
        <div className="logo-text">
          <h3>IVY ROSE</h3>
          <p>DEVELOPER</p>
        </div>
      </div>

      <nav>
        <a href="#hero"     onClick={(e) => handleNav(e, "hero")}     className={active === "hero"     ? "active" : ""}>Home</a>
        <a href="#about"    onClick={(e) => handleNav(e, "about")}    className={active === "about"    ? "active" : ""}>About</a>
        <a href="#skills"   onClick={(e) => handleNav(e, "skills")}   className={active === "skills"   ? "active" : ""}>Skills</a>
        <a href="#services" onClick={(e) => handleNav(e, "services")} className={active === "services" ? "active" : ""}>Services</a>
        <a href="#work"     onClick={(e) => handleNav(e, "work")}     className={active === "work"     ? "active" : ""}>Work</a>
      </nav>

      <button
  className="talk-btn"
  onClick={(e) => handleNav(e, "contact")}
>
  Contact
</button>
    </header>
  );
}

export default Navbar;