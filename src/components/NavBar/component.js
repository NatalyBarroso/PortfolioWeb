import { useState } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar({ scrollToRef, activeSection, homeRef, aboutMeRef, experienceRef, projectsRef }) {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  const handleNavClick = (ref, section) => {
    scrollToRef(ref, section);
    setIsMenuOpen(false);
  };

  return (
    <div className='nav_bar'>
      <button className='nav_toggle' onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='Toggle navigation menu'>
        <FontAwesomeIcon icon={['fas', 'bars']}/>
      </button>
      <nav className={`nav_menu ${isMenuOpen ? 'active' : ''}`}>
        <a onClick={() => handleNavClick(homeRef, 'home')} className={activeSection === 'home' ? 'active' : ''} href="#home">Home</a>
        <a onClick={() => handleNavClick(aboutMeRef, 'aboutMe')} className={activeSection === 'aboutMe' ? 'active' : ''} href="#aboutMe">About Me</a>
        <a onClick={() => handleNavClick(experienceRef, 'experience')} className={activeSection === 'experience' ? 'active' : ''} href="#experience">Experience</a>
        <a onClick={() => handleNavClick(projectsRef, 'projects')} className={activeSection === 'projects' ? 'active' : ''} href="#projects">Projects</a>
      </nav>
    </div>
  )
}