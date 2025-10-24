import React from "react";

const socials = [
  { name: "LinkedIn", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png", link: "https://www.linkedin.com/in/vishesh-verma-96a6b2293/" },
  { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png", link: "https://github.com/Vishesh-Verma-Work" },
  { name: "Twitter", icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png", link: "https://x.com/vishesh_verma06" }
];

export default function SocialStrip() {
  return (
    <div className="social-strip">
      {socials.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
          <img src={social.icon} alt={social.name} title={social.name} />
        </a>
      ))}
    </div>
  );
}
