import './item.css';

export default function CardItem({ title, description, link, bg_color, image_url }) {
  const textColor = bg_color === '#242424' ? 'white' : bg_color === '#f0efef' ? 'rgb(36,36,36)' : 'black';

  return (
    <a href={link} className='card-item' target='_blank' rel='noopener noreferrer' style={{ backgroundColor: bg_color }}>
      <img src={process.env.PUBLIC_URL + image_url} alt='project' />
      <h4 style={{ color: textColor }}>{title}</h4>
      <p style={{ color: textColor }}>{description}</p>
    </a>
  )
}