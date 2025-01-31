import './style.css';
import ProjectsSlider from './ProjectsSlider/slider'
import es from '../../data/es.json'
import en from '../../data/en.json'

export default function MyProjects({ language }) {

  const texts = language === "es" ? es.projects : en.projects;

  const projects = [
    { title: texts.quotesWeb.title, description: texts.quotesWeb.description, link: 'https://github.com/NatalyBarroso/QuotesWeb', bg_color: "#242424", image_url: '/images/quotes-project.png' },
    { title: texts.tvShowsWeb.title, description: texts.tvShowsWeb.description, link: 'https://github.com/NatalyBarroso/rev-web', bg_color: "#f0efef", image_url: '/images/rev-series-project.png' },
    { title: texts.portafolioWeb.title, description: texts.portafolioWeb.description, link: 'https://github.com/NatalyBarroso/PortfolioWeb', bg_color: "#242424", image_url: '/images/porfolio-project.png' },
    { title: texts.movieTracker.title, description: texts.movieTracker.description, link: 'https://github.com/NatalyBarroso/MoviesAndroidApp', bg_color: "#f0efef", image_url: '/images/movieTracker-project.png' }


  ]
  return (
    <div className='projects-section'>
      <h2>{texts.header}</h2>
      <div className='projects-card'>
      <ProjectsSlider projects={projects} />
      </div>
    </div>
  )
}