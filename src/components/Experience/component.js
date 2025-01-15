import './style.css'
import { useState } from 'react'
import data from '../../data/es.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MyExperience() {
  const experiences = data.experiences

  // Estado para controlar qué experiencia mostrar
  const [selectedExp, setSelectedExp] = useState('nohbek')

  // Función para manejar el click en las opciones del menú
  const handleExpClick = (expKey) => {
    setSelectedExp(expKey)
  }

  return (
    <div className="experience-section">
      <h2># My Experience</h2>
      <div className='experiences-menu'>
        <p 
          onClick={() => handleExpClick('nohbek')}
          className={selectedExp === 'nohbek' ? 'active' : ''}
        >
          Nohbek
        </p>
        <p 
          onClick={() => handleExpClick('aws')}
          className={selectedExp === 'aws' ? 'active' : ''}
        >
          AWS
        </p>
        <p 
          onClick={() => handleExpClick('university')}
          className={selectedExp === 'university' ? 'active' : ''}
        >
          Studies
        </p>
      </div>
      <div className="vl"></div>
      <div className='experience-info'>
        <h2>{experiences[selectedExp].title}</h2>
        <p>{experiences[selectedExp].period}</p>
        <p>{experiences[selectedExp].description}</p>
        <div className='icons'>
        {experiences[selectedExp].icons.map((icon, index) => (
            <FontAwesomeIcon key={index} icon={['fab', icon]} size="2x" />
          ))}
        </div>
      </div>
    </div>
  )
}