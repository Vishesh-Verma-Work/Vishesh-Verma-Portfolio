import React from "react";

const testimonials = [
  {
    name: "Anjali Sharma",
    designation: "Owner",
    company: "Glow Makeup Studio",
    feedback: "Vishesh developed a stunning website for my makeup studio! The UI/UX is fantastic, and booking features are smooth. Clients love the simplicity and aesthetics.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    name: "Rohan Mehta",
    designation: "Owner",
    company: "Shine Jewellery ERP",
    feedback: "The ERP system Vishesh built for my jewellery store is a game-changer! Inventory, billing, and reporting are seamless. Truly professional work with great attention to detail.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    name: "Priya Verma",
    designation: "Manager",
    company: "Tech Hackathon",
    feedback: "Vishesh is highly professional and delivered our hackathon project on time. Exceptional frontend and backend integration with clean code.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-heading">Client Testimonials</h2>
      <div className="testimonials-slider-wrapper">
        <div className="testimonials-slider">
          {[...testimonials, ...testimonials].map((test, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-img">
                <img src={test.img} alt={test.name} />
              </div>
              <div className="testimonial-content">
                <p className="feedback">"{test.feedback}"</p>
                <h4>{test.name}</h4>
                <span className="designation">{test.designation}, {test.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
