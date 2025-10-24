import React from "react";

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="home-left">
        <h1 className="home-name">Vishesh Verma</h1>
        <h3 className="home-title">
          SOFTWARE ENGINEER | FULL STACK (MERN) DEVELOPER
        </h3>
        <p className="home-bio">
          5x National Hackathon Winner & Full-Stack MERN Developer with expertise
          in both Frontend and Backend development. A multiple-time finalist,
          including prestigious hackathons at IITs, actively expanding knowledge
          in Data Structures and Algorithms using Java language.
        </p>

        {/* Download Resume Button */}
        <a
          href="https://drive.google.com/file/d/1NQdcCOEagY8o0IDEkCf8K3DcsLlsa0rP/view?usp=sharing"  // Replace with your resume path
         target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
        >
          📄 Download Resume
        </a>
      </div>

      <div className="home-right">
        <div className="home-video-frame">
          <video
            className="home-video"
            src="https://vishesh-verma-portfolio.vercel.app/assets/intro-PLrddNKw.mp4"
            loop
            controls
            playsInline
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Home;
