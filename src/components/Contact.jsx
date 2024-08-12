import React from "react";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="contact">
        <div className="contact-section">
          <h2>Contact Me</h2>
          <p>
            If you'd like to get in touch, feel free to reach out via
            email, phone, or LinkedIn.
          </p>

          <h3>Email</h3>
          <p>
            <a href="mailto:summaya.siddiqui@keyin.com">
              summaya.siddiqui@keyin.com
            </a>
          </p>

          <h3>Phone</h3>
          <p>709-330-0000</p>

          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/summaya.siddiqui"
              target="_blank"
              rel="noopener noreferrer">
              summaya.siddiqui@keyin.com
            </a>
          </p>
        </div>
      </div>

      <footer className="contact-footer">
        <p>
          &copy; {new Date().getFullYear()} Summaya Siddiqui. All rights
          reserved.
        </p>
        <p>Built with React and CSS</p>

        <div className="footer-links">
          <button className="footer-button" onClick={scrollToTop}>
            <i className="fas fa-home"></i> Home
          </button>
          <nav className="nav-links">
            <a href="#about">
              <i className="fas fa-user"></i> About
            </a>
            <a href="#projects">
              <i className="fas fa-briefcase"></i> Projects
            </a>
            <a href="#contact">
              <i className="fas fa-envelope"></i> Contact
            </a>
          </nav>
        </div>
      </footer>
      {/* </div> */}
    </>
  );
};

export default Contact;
