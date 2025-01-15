import { useRef, useState } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Card() {

  const [ active, setActive ] = useState(false);
  const dropDownRef = useRef(null);

  const handleMouseenter = () => {
    setActive(true);
  }

  const handleMouseLeave = (event) => {
    if(dropDownRef.current && !dropDownRef.current.contains(event.relatedTarget)) {
      setActive(false)
    }
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src='/images/me1.jpeg' alt='' />
      </div>
      <h1>Nataly Barroso</h1>
      <h4>Software Developer | Frontend Developer | Backend Developer</h4>
      <div className='icons' ref={dropDownRef}>
        <div onMouseEnter={handleMouseenter} onMouseLeave={handleMouseLeave}><FontAwesomeIcon icon={['fab', 'github']} /></div>
        {active && (
          <div className='dropDown'>
            <a href='https://github.com/NatalyBarroso' className='dropDownItem'>PROFESIONAL</a>
            <a href='https://github.com/natalyjoanna' className='dropDownItem'>PERSONAL</a>
          </div>
        )}
        <a href='https://www.linkedin.com/in/natalybarroso/'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        <a href='mailto:barrosonataly.dev@gmail.com'><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
      </div>
    </div>
  )
}