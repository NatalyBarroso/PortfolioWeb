import './style.css'

export default function NavBar({ scrollToRef, activeSection, homeRef, aboutMeRef, experienceRef, projectsRef }) {

  return (
    <div className='nav_bar'>
      <nav className="nav_menu">
        <a onClick={() => scrollToRef(homeRef, 'home')} className={activeSection === 'home' ? 'active' : ''} href="#home">Home</a>
        <a onClick={() => scrollToRef(aboutMeRef, 'aboutMe')} className={activeSection === 'aboutMe' ? 'active' : ''} href="#aboutMe">About Me</a>
        <a onClick={() => scrollToRef(experienceRef, 'experience')} className={activeSection === 'experience' ? 'active' : ''} href="#experience">Experience</a>
        <a onClick={() => scrollToRef(projectsRef, 'projects')} className={activeSection === 'projects' ? 'active' : ''} href="#projects">Projects</a>
      </nav>
    </div>
  )
}