import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-left">
        <h2 className="header-logo">Portfolio</h2>
      </div>

      {/* Hamburger Icon */}
      <div className="header-hamburger" onClick={toggleMenu}>
        <div className={`header-bar ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`header-bar ${isMenuOpen ? "active" : ""}`}></div>
        <div className={`header-bar ${isMenuOpen ? "active" : ""}`}></div>
      </div>

      {/* Navigation */}
      <nav className={`header-right ${isMenuOpen ? "open" : ""}`}>
        <a href="#achievements" onClick={closeMenu} className="header-link">Achievements</a>
        <a href="#projects" onClick={closeMenu} className="header-link">Projects</a>
        <a href="#experience" onClick={closeMenu} className="header-link">Internship/Xp</a>
        <a href="#skills" onClick={closeMenu} className="header-link">Skills</a>
        <a href="#certificates" onClick={closeMenu} className="header-link">Certificates</a>
        <a href="#academic" onClick={closeMenu} className="header-link">Academic</a>
        <a href="#contact" onClick={closeMenu} className="header-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
