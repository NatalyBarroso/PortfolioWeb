import React, { useState, useEffect } from 'react'
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
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Función para determinar cuántos slides mostrar según el ancho de la pantalla
  const updateSlidesPerView = () => {
    if (window.innerWidth <= 480) {
      setSlidesPerView(1);
    } else if (window.innerWidth <= 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  // Efecto para actualizar slidesPerView cuando cambie el tamaño de la ventana
  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + slidesPerView;
      if (nextIndex < projects.length) {
        return nextIndex;
      }
      return prevIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - slidesPerView;
      if (nextIndex >= 0) {
        return nextIndex;
      }
      return prevIndex;
    });
  };

  // Calcular si los botones deben estar habilitados
  const canGoNext = currentIndex + slidesPerView < projects.length;
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
              transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`
            }}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className='carousel-slide'
                style={{ 
                  width: `calc((100% - ${(slidesPerView - 1) * 1}rem) / ${slidesPerView})` 
                }}>
                <CardItem 
                  title={project.title} 
                  description={project.description} 
                  link={project.link} 
                  bg_color={project.bg_color} 
                  image_url={project.image_url} 
                />
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