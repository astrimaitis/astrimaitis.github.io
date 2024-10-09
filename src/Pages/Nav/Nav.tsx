import './Nav.css';
import React from 'react';

const Nav = () => {
  return (
    <div className="Nav">
      <ul className="Nav-ul">
        <li><a href="default.asp">A. Strimaitis</a></li>
        <li><a href="news.asp">Home</a></li>
        <li><a href="contact.asp">Professional Experience</a></li>
        <li><a href="about.asp">Education</a></li>
        <li><a href="about.asp">Certifications</a></li>
        <li><a href="about.asp">Contact</a></li>
        <li><a href="about.asp">Resume</a></li>        
      </ul>
    </div>
  );
}

export default Nav;
