import React from "react";

const projects = [
  {
    title: "SentiMail: AI-Powered Email Analysis & Insights",
    description: `SentiMail uses AI, NLP, and ML to automate email processing via Gmail API and OAuth 2.0. It categorizes emails (feedback, queries, complaints) and provides real-time analytics with a MERN stack dashboard.`,
    youtubeId: "6kLZVGk2eyA", // YouTube ID
    hostedLink: "https://sentimail-client.onrender.com/",
    githubLink: "https://github.com/Vishesh-Verma-Work/Datamatics-SentiMail-IITB",
  },
  {
    title: "Prodify – AI-Powered Smart Product Discovery Platform",
    description: `Prodify uses AI and NLP to understand detailed search prompts and fetch precise matches across the internet with structured results, price comparison, advanced filters, and a smart cart.`,
    youtubeId: "rA-V1SuCpTg",
    hostedLink: "https://cart-craft-e-commerce-hackathon.vercel.app/",
    githubLink: "https://github.com/Vishesh-Verma-Work/CartCraft-E-Commerce-Hackathon",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-heading">Projects Implementations</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.youtubeId && (
              <div className="project-video">
                <iframe
                  width="100%"
                  height="300"
                  src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&controls=1`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="desc">{project.description}</p>
              <div className="project-btns">
                <a
                  href={project.hostedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Hosted Web
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
