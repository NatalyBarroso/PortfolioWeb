import './item.css';

export default function CardItem({ title, description, link, bg_color, image_url }) {
  const color = bg_color === '#242424' ? 'white' : bg_color === '#f0efef' ? 'rgb(36,36,36)' : 'black';

  return (
    <div className='card-item' target='_blank' rel='noopener noreferrer' style={{ backgroundColor: bg_color }}>
      <img src={process.env.PUBLIC_URL + image_url} alt='project' />
      <h4 style={{ color: color }}>{title}</h4>
      <p style={{ color: color }}>{description}</p>
      <div className='buttons-container'>
        <button src={link} className='button' style={{ color: color, border: `1px solid ${color}` }}>
          REPO
        </button>
        {/* <button className='button' style={{ color: color, border: `1px solid ${color}` }}>
          DEMO
        </button> */}
      </div>
    </div>
  )
}