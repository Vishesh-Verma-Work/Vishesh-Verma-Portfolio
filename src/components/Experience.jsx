import React from "react";
import certificateImg from "../assets/intern/intern.png"; // replace with your local certificate path

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-heading">Internship / Experience</h2>
      <div className="experience-container">
        <div className="experience-data">
          <h3>Innowinds Inc. - Software Development Intern (Frontend)</h3>
          <p><span>Duration:</span> 1st July 2025 - 11th August 2025 (6 weeks)</p>
          <p><span>Company:</span> Innowinds Inc., Noida</p>
          <p><span>Role:</span> Software Development Intern (Frontend)</p>
          <p><span>Tech Stack:</span> HTML, CSS, JavaScript, React.js</p>
          <p><span>Responsibilities:</span></p>
          <ul>
            <li>Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js</li>
            <li>Collaborated with team members for integration and functionality</li>
            <li>Assisted in debugging, optimization, and code reviews</li>
          </ul>
          <p>He demonstrated professionalism, dedication, and a quick learning ability, adding value to projects.</p>
        </div>
        <div className="experience-certificate">
          <img src={certificateImg} alt="Internship Certificate" />
        </div>
      </div>
    </section>
  );
}
