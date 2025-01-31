import React, { useState, useEffect } from 'react'
import './style.css'
import es from '../../data/es.json'
import en from '../../data/en.json'

export default function AboutMe({ language }) {

  const [aboutMe, setAboutMe] = useState("")

  const texts = language === "es" ? es.aboutme : en.aboutme;

  useEffect(() => {
    setAboutMe(texts.text)
  }, [language, texts.text]);

  const formatAboutMe = (text) => {
    return text.split("\n").map((item, index) => (
      <span key={index}>
        {item}
        <br />
        <br />
      </span>
    ));
  };

  return (
    <div className="aboutme-section">
      <h3>{texts.title}</h3>
      <p className='aboutme-text'>{formatAboutMe(aboutMe)}</p>
    </div>
  )
}