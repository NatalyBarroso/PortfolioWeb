import './style.css'
import { useState } from 'react'
import es from '../../data/es.json'
import en from '../../data/en.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MyExperience({ language }) {

  // Estado para controlar qué experiencia mostrar
  const [selectedExp, setSelectedExp] = useState('nohbek')
  const texts = language === "es" ? es.experiences : en.experiences; 

  // Función para manejar el click en las opciones del menú
  const handleExpClick = (expKey) => {
    setSelectedExp(expKey)
  }

  const currentExp = texts[selectedExp]
  console.log(texts)


  return (
    <div className="experience-section">
      <h2>{texts.header}</h2>
      <div className='experiences-menu'>
        <p 
          onClick={() => handleExpClick('nohbek')}
          className={selectedExp === 'nohbek' ? 'active' : ''}>
          Nohbek
        </p>
        <p 
          onClick={() => handleExpClick('aws')}
          className={selectedExp === 'aws' ? 'active' : ''}>
          AWS
        </p>
        <p 
          onClick={() => handleExpClick('university')}
          className={selectedExp === 'university' ? 'active' : ''}>
          {language === "es" ? "Estudios" : "Studies"}
        </p>
      </div>
      <div className="vl"></div>
      <div className='experience-info'>
        <h2>{currentExp.title}</h2>
        <p>{currentExp.period}</p>
        <p>{currentExp.description}</p>
        <div className='icons'>
          {currentExp.icons.map((icon, index) => (
            <FontAwesomeIcon key={index} icon={['fab', icon]} size="2x" />
          ))}
        </div>
      </div>
    </div>
  )
}