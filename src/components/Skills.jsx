import React from "react";
// Tech stack icons via CDN
const techIcons = {
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
};

const technicalSkills = {
  "Frontend Development": ["Figma", "HTML", "CSS", "JavaScript", "React.js"],
  "Backend Development": ["Node.js", "Express.js"],
  "Database Management": ["MongoDB", "SQL"],
  "Version Control": ["Git", "GitHub"],
  "API Development & Testing": ["Postman"],
  "Programming Languages": ["C", "Java"]
};

const softSkills = {
  Adaptability: "Quick adjustments, efficient results.",
  Leadership: "Led winning teams.",
  "Time Management": "Deadline-driven.",
  "Problem-Solving": "Quick solutions.",
  Collaboration: "Team-oriented.",
  Resilience: "Quality under pressure."
};

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-heading">Engineering Skill Set</h2>
      <div className="skills-container">
        {/* Technical Skills */}
        <div className="skills-category">
          <h3 className="category-heading">Technical Skills</h3>
          {Object.entries(technicalSkills).map(([category, skills], idx) => (
            <div key={idx} className="skill-line">
              <span className="skill-category">{category}:</span>
              <span className="skill-items">
                {skills.map((skill, i) => (
                  <span key={i} className="skill-item">
                    {techIcons[skill] && (
                      <img src={techIcons[skill]} alt={skill} className="skill-icon" />
                    )}
                    {skill}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="skills-category">
          <h3 className="category-heading">Soft Skills</h3>
          {Object.entries(softSkills).map(([skill, desc], idx) => (
            <div key={idx} className="skill-line">
              <span className="skill-category">{skill}:</span>
              <span className="skill-items">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
