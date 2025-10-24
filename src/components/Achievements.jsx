import React from "react";
import p1 from "../assets/achivements/m1.png";
import p2 from "../assets/achivements/m2.png";
import p3 from "../assets/achivements/m3.png";
import p4 from "../assets/achivements/m4.png";
import p5 from "../assets/achivements/m5.png";

const achievements = [
  {
    title: "Build & Beyond Hackathon | 21st April 2025",
    competition: "Build & Beyond",
    hostedBy: "MCA Department, IMSEC",
    achievement: "1st Runner-Up (2nd Place)",
    awards: "Trophy | Certificate",
    description: `Successfully led Team CodeCrafters to build an innovative e-commerce solution integrating Google AI APIs for personalized product search. The project achieved 1st Runner-Up among top participants.`,
    img: p1,
    btn: "https://drive.google.com/drive/folders/1Gyoz6XhdgvYa1Hbg5CczE-jFuNe0MmoO?usp=sharing",
  },
  {
    title: "Quality Assurance Bug Bounty | 7th April 2025",
    competition: "Quality Assurance Bug Bounty Challenge",
    hostedBy: "IMSUC, Ghaziabad",
    achievement: "2nd Runner-up (3rd Place)",
    awards: "Trophy | Certificate | ₹1000 Cash Prize",
    description:
      "Used manual testing, Selenium automation, and Postman to detect major bugs and performance gaps. Provided actionable QA reports that improved the site’s efficiency.",
    img: p3,
    btn: "https://drive.google.com/drive/folders/1Gyoz6XhdgvYa1Hbg5CczE-jFuNe0MmoO?usp=sharing",
  },
  {
    title: "IEEE CIS Poster Presentation | 29th March 2025",
    competition: "IEEE CIS Poster Presentation",
    hostedBy: "AKGEC, Ghaziabad",
    achievement: "2nd Rank (1st Runner-Up)",
    awards: "Certificate by IEEE | ₹2000 Cash Prize",
    description:
      "Developed ‘SentiMail’, an AI-powered email processing system using NLP & sentiment analysis, integrated with Gmail API and a live analytics dashboard using MERN stack.",
    img: p2,
    btn: "https://drive.google.com/drive/folders/1Gyoz6XhdgvYa1Hbg5CczE-jFuNe0MmoO?usp=sharing",
  },
  {
    title: "Aaghaaz (Web-A-Thon) | 9th February 2024",
    competition: "Front-End Development Hackathon",
    hostedBy: "IMSUC, Ghaziabad",
    achievement: "2nd Runner-up (3rd Place)",
    awards: "Certificate | Medal",
    description:
      "Built a complete e-commerce site in 2 hours with responsive UI, dynamic cart, and optimized backend — showcasing adaptability and quick development.",
    img: p4,
    btn: "https://drive.google.com/drive/folders/1Gyoz6XhdgvYa1Hbg5CczE-jFuNe0MmoO?usp=sharing",
  },
  {
    title: "GDSC National Hackathon | 18th December 2023",
    competition: "GDSC National Level Hackathon",
    hostedBy: "GL Bajaj College, Noida",
    achievement: "2nd Runner-up (3rd Place)",
    awards: "Certificate | Trophy | ₹2000 Cash Prize",
    description:
      "Developed a MERN-based home service platform connecting users with verified local workers — secure booking, payments & impactful social solution.",
    img: p5,
    btn: "https://drive.google.com/drive/folders/1Gyoz6XhdgvYa1Hbg5CczE-jFuNe0MmoO?usp=sharing",
  },
];

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <h2 className="section-heading">Achievements & Hackathons</h2>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="achievement-content">
              <h3>{item.title}</h3>
              <p>
                <span>Competition:</span> {item.competition}
              </p>
              <p>
                <span>Hosted By:</span> {item.hostedBy}
              </p>
              <p>
                <span>Achievement:</span> {item.achievement}
              </p>
              <p>
                <span>Awards:</span> {item.awards}
              </p>
              <p className="desc">{item.description}</p>
              <a
                href={item.btn}
                target="_blank"
                rel="noopener noreferrer"
                className="prove-btn"
              >
                Proves
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
