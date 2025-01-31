import './item.css';

export default function CardItem({ title, description, link, bg_color, image_url }) {
  const color = bg_color === '#242424' ? 'white' : bg_color === '#f0efef' ? 'rgb(36,36,36)' : 'black';
  const hideRepoButton = title === "Letterboxd but for TV Shows" || title === "Letterboxd pero para series de televisión";

  return (
    <div className='card-item' target='_blank' rel='noopener noreferrer' style={{ backgroundColor: bg_color }}>
      <img src={process.env.PUBLIC_URL + image_url} alt='project' />
      <h4 style={{ color: color }}>{title}</h4>
      <p style={{ color: color }}>{description}</p>
      <div className='buttons-container'>
        {!hideRepoButton && (
          <button 
          onClick={() => window.open(link, '_blank', 'noopener noreferrer')} 
          className='button' 
          style={{ color: color, border: `1px solid ${color}` }}
        >
          REPO
        </button>
        )}
        {/* <button className='button' style={{ color: color, border: `1px solid ${color}` }}>
          DEMO
        </button> */}
      </div>
    </div>
  )
}