import { useState } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import es from '../../data/es.json'
import en from '../../data/en.json'

export default function NavBar({ scrollToRef, activeSection, homeRef, aboutMeRef, experienceRef, projectsRef, language, setLanguage }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (ref, section) => {
    scrollToRef(ref, section);
    setIsMenuOpen(false);
  };

  const handleChangeLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const texts = language === "es" ? es.navbar : en.navbar;

  return (
    <div className='nav_bar'>
      <button className='nav_toggle' onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='Toggle navigation menu'>
        <FontAwesomeIcon icon={['fas', 'bars']} />
      </button>
      <nav className={`nav_menu ${isMenuOpen ? 'active' : ''}`}>
        <a onClick={() => handleNavClick(homeRef, 'home')} className={activeSection === 'home' ? 'active' : ''} href="#home">{texts.home}</a>
        <a onClick={() => handleNavClick(aboutMeRef, 'aboutMe')} className={activeSection === 'aboutMe' ? 'active' : ''} href="#aboutMe">{texts.aboutMe}</a>
        <a onClick={() => handleNavClick(experienceRef, 'experience')} className={activeSection === 'experience' ? 'active' : ''} href="#experience">{texts.experience}</a>
        <a onClick={() => handleNavClick(projectsRef, 'projects')} className={activeSection === 'projects' ? 'active' : ''} href="#projects">{texts.projects}</a>
      </nav>
      <div className='nav_lang' onClick={handleChangeLanguage}>
        <p>{language === "es" ? "EN" : "ES"}</p>
      </div>
    </div>
  )
}