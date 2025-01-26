import './style.css';
import ProjectsSlider from './ProjectsSlider/slider'

export default function MyProjects() {

  const projects = [
    { title: 'Quotes web', description: 'Aplicación web que muestra una cita diaria inspirada en las frases literarias de Cassandra Clare. En el futuro, podría incluir un juego para practicar la traducción de citas a distintos idiomas.', link: 'https://github.com/NatalyBarroso/QuotesWeb', bg_color: "#242424", image_url: '/images/quotes-project.png' },
    { title: 'Movies Reviews Web', description: 'Un sitio web desarrollado con Next.js que permite a los usuarios explorar reseñas de películas, buscar información detallada sobre ellas y mantenerse actualizados con las últimas noticias del mundo cinematográfico.', link: 'https://github.com/NatalyBarroso/rev-web', bg_color: "#f0efef", image_url: '/images/rev-series-project.png' },
    { title: 'Portfolio Web', description: 'Un portafolio web interactivo desarrollado con React, diseñado para destacar mis habilidades, experiencia laboral y proyectos realizados. Este sitio ofrece una navegación intuitiva y moderna para presentar mi perfil profesional de manera atractiva y funcional.', link: 'https://github.com/NatalyBarroso/PortfolioWeb', bg_color: "#242424", image_url: '/images/porfolio-project.png' },
    { title: 'Movie Tracker', description: 'Es una aplicación de Android desarrollada en Android Studio utilizando el lenguaje de programación Kotlin, cuyo objetivo es proporcionar a los usuarios una plataforma conveniente para realizar un seguimiento de las películas que han visto y las que planean ver.', link: 'https://github.com/NatalyBarroso/MoviesAndroidApp', bg_color: "#f0efef", image_url: '/images/movieTracker-project.png' }



  ]
  return (
    <div className='projects-section'>
      <h2>#My Projects</h2>
      <div className='projects-card'>
      <ProjectsSlider projects={projects} />
      </div>
    </div>
  )
}