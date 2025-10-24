import React, { useState } from "react";
import p1 from '../assets/certificates/p1.png'
import p2 from '../assets/certificates/p2.png'
import p3 from '../assets/certificates/p3.png'
import p4 from '../assets/certificates/p4.png'
import p5 from '../assets/certificates/p5.png'
import p6 from '../assets/certificates/p6.png'
import p7 from '../assets/certificates/p7.png'
import p8 from '../assets/certificates/p8.png'
import p9 from '../assets/certificates/p9.png'

const certificates = [
  { title: "Azure AI", img: p1 },
  { title: "Gemini for Google Workspace", img: p2 },
  { title: "Introduction to Generative AI", img: p3 },
  { title: "Hack2skill-GDSC", img: p4 },
  { title: "Frontend Developer - ReactJS", img: p5 },
  { title: "JavaScript - Intermediate", img: p6 },
  { title: "SQL - Intermediate", img: p7 },
  { title: "Python - Basic", img: p8 },
  { title: "Software Engineer Intern", img: p9 },
];

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="certificates-section" id="certificates">
      <h2 className="section-heading">Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div
            className="certificate-card"
            key={index}
            onClick={() => setSelectedImg(cert.img)}
          >
            <div className="certificate-img">
              <img src={cert.img} alt={cert.title} />
            </div>
            <h4 className="certificate-title">{cert.title}</h4>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <span className="close-btn" onClick={() => setSelectedImg(null)}>&times;</span>
          <img className="lightbox-img" src={selectedImg} alt="certificate" />
        </div>
      )}
    </section>
  );
}
