import React, { useState } from 'react'
import CardItem from '../CarItem/item';
import './style.css'

const ChevronLeftIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ProjectsSlider = ({ projects }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if(prevIndex + 3 < projects.length){
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if(prevIndex > 0){
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  // Obtener los tres proyectos que se mostraran
  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  // Calcular si los botones deben de estar habilitados
  const canGoNext = currentIndex + 3 < projects.length;
  const canGoPrev = currentIndex > 0;

  return (
    <div className='carousel-container'>
      <div className='carousel-content'>
        <button
          onClick={prevSlide}
          className={`carousel-button carousel-button-prev ${!canGoPrev ? 'carousel-button-disabled' : ''}`}
          disabled={!canGoPrev}>
            <ChevronLeftIcon />
          </button>
          <div className='carousel-wrapper'>
            <div
              className='carousel-slides'
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`
              }}>
                {visibleProjects.map((project, index) => (
                  <div key={index} className='carousel-slide'>
                    <CardItem title={project.title} description={project.description} link={project.link} bg_color={project.bg_color} image_url={project.image_url} />
                  </div>
                ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className={`carousel-button carousel-button-next ${!canGoNext ? 'carousel-button-disabled' : ''}`}
            disabled={!canGoNext}>
              <ChevronRightIcon />
            </button>
      </div>
    </div>
  )
}

export default ProjectsSlider