import { useEffect, useRef, useState } from "react";

import "../styles/Contact.css";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";

import { FaPaperPlane } from "react-icons/fa";

import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const contactRef = useRef(null);

  const [showContact, setShowContact] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if(entry.isIntersecting){
          setShowContact(true);
        }

      },

      {
        threshold:0.2,
      }

    );

    if(contactRef.current){
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();

  }, []);

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs

      .sendForm(
        "service_i69w3bg",
        "template_gb5qc2h",
        form.current,
        "svkul6bayOlR5aX77"
      )

      .then(() => {

        alert("Message sent successfully!");

        form.current.reset();

      })

      .catch((error) => {

        console.log(error);

        alert("Failed to send message.");

      });

  };

  return (

    <section
      ref={contactRef}
      className={`contact-section ${showContact ? "show-contact" : ""}`}
      id="contact"
    >

      <div className="contact-header">

        <p>LET'S CONNECT</p>

        <h2>
          Get In Touch <span>✦</span>
        </h2>

      </div>

      <div className="contact-wrapper">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <div
            className="contact-item"
            style={{ animationDelay:"0.2s" }}
          >

            <div className="contact-icon">
              <FiMail />
            </div>

            <span>bual.ivyrose@gmail.com</span>

          </div>

          <div
            className="contact-item"
            style={{ animationDelay:"0.35s" }}
          >

            <div className="contact-icon">
              <FiPhone />
            </div>

            <span>+63 975 408 0413</span>

          </div>

          <div
            className="contact-item"
            style={{ animationDelay:"0.5s" }}
          >

            <div className="contact-icon">
              <FiMapPin />
            </div>

            <span>Cagayan de Oro, Philippines</span>

          </div>

          <div
            className="contact-item"
            style={{ animationDelay:"0.65s" }}
          >

            <div className="contact-icon">
              <FiCalendar />
            </div>

            <span>Available for Work</span>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">

            SEND MESSAGE

            <FaPaperPlane />

          </button>

        </form>

      </div>

    </section>

  );
}

export default Contact;