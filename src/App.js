import React, { useRef, useEffect, useState } from 'react';
import './styles/App.css'
import HomeCard from './components/HomeCard/component'
import AboutMe from './components/AboutMe/component'
import Experience from './components/Experience/component'
import Projects from './components/Projects/component'
import NavBar from './components/NavBar/component'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function App() {

  const [activeSection, setActiveSection] = React.useState('home');

  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // const homeTop = homeRef.current.offsetTop;
      const aboutMeTop = aboutMeRef.current.offsetTop;
      const experienceTop = experienceRef.current.offsetTop;
      const projectsTop = projectsRef.current.offsetTop;

      if (scrollPosition >= projectsTop -100) {
        setActiveSection('projects');
      } else if (scrollPosition >= experienceTop -100) {
        setActiveSection('experience');
      } else if (scrollPosition >= aboutMeTop -100) {
        setActiveSection('aboutMe');
      } else {
        setActiveSection('home');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, []);

  const scrollToRef = (ref, section) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
  }


  return (
    <div className="App">
      <NavBar scrollToRef={scrollToRef} activeSection={activeSection} homeRef={homeRef} aboutMeRef={aboutMeRef} experienceRef={experienceRef} projectsRef={projectsRef} />
      <div className='content-container'>
        <div ref={homeRef}>
          <HomeCard />  
        </div>
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div ref={experienceRef}>
         <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
