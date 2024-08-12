import React from "react";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="about-page">
        <div className="about">
          <div className="about-section">
            <h2>Something About Me</h2>
            <p>
              Greetings! I'm Summaya, a passionate software developer with
              roots in Pakistan, now thriving in the vibrant tech landscape
              of Canada.
            </p>
            <p>
              With a background as a Mathematics teacher and a
              Google-certified UI/UX designer, I bring a unique blend of
              analytical thinking and creative design to every project I
              undertake. My journey in software development is fueled by a
              love for problem-solving and a deep-seated enthusiasm for
              Python. Whether I'm crafting intuitive user interfaces or
              diving into the intricacies of code, I approach each
              challenge with a dedication to excellence and a desire to
              make a meaningful impact.
            </p>

            <p>
              I have always been passionate about design, which led me to
              join the Google UI/UX program and make a bold decision to
              change my profession. This journey has allowed me to merge my
              creativity with user-centered design principles, transforming
              my passion into a fulfilling career.
            </p>

            <p>
              I am constantly striving to improve my work and am currently
              preparing to take the AWS Cloud Computing certification exam.
              My journey in design continues to evolve as I seek to expand
              my skill set and embrace new challenges.
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

export default About;
