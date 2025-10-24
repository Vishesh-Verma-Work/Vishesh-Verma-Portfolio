import React from "react";

const socials = [
  { name: "LinkedIn", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png", link: "https://www.linkedin.com/in/vishesh-verma-96a6b2293/" },
  { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", link: "https://github.com/Vishesh-Verma-Work" },
  { name: "Twitter", icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png", link: "https://x.com/vishesh_verma06" }
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-heading">📬 Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <span className="icon">📧</span>
            <span className="text">visheshverma.workin@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <span className="text">+91 8445172303</span>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <span className="text">Ghaziabad, India</span>
          </div>

          {/* Social Links */}
          <div className="social-links">
            {socials.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.name} title={social.name} />
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}
