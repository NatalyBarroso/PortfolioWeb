import React, { useState, useEffect } from 'react'
import './style.css'
import data from '../../data/es.json'

export default function AboutMe() {

  const [aboutMe, setAboutMe] = useState("")

  useEffect(() => {
    setAboutMe(data.aboutme)
  }, []);

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
      <h3># ABOUT ME</h3>
      <p className='aboutme-text'>{formatAboutMe(aboutMe)}</p>
    </div>
  )
}