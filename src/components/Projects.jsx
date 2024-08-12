import React from "react";

const Projects = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="projects-page">
        <div className="projects">
          <div className="projects-section">
            <h2>My Projects</h2>
            <p>
              I have worked on a wide range of projects that demonstrate my
              skills in web development, UI/UX design, and software
              engineering. Each project reflects my dedication to creating
              intuitive and efficient solutions.
            </p>

            <h3>1. E-commerce Website</h3>
            <p>
              Developed a fully functional e-commerce website using React,
              CSS, and an API. The site includes features such as product
              listings, a shopping cart, and a secure checkout process.
            </p>

            <h3>2. Portfolio Website</h3>
            <p>
              Designed and developed a personal portfolio website to
              showcase my work and skills. The site features a responsive
              design, interactive elements, and a clean, user-friendly
              interface.
            </p>

            <h3>3. Restaurant Website</h3>
            <p>
              Developed a restaurant website using HTML, DOM manipulation,
              JavaScript, and CSS. The site features a dynamic menu,
              interactive elements, and a responsive design for an optimal
              user experience.
            </p>
          </div>

          <button onClick={scrollToTop} className="back-to-top">
            <i className="fa fa-home"></i> Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
