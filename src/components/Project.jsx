import { Link } from 'react-router-dom'

const Project = ({ title, image, path, redirect, github }) => {
  return (
    <div className='project'>
      <div className='project_title'>{title}</div>
      <img className='project_icon' src='images/lukway/icon.svg' alt='Lukway Icon' />
      <img className='project_img' src={image} alt={title} title={title} />
      <div className='project_info'>
        <a
          className='link-with-icon github'
          href={github}
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
          <span className='link_logo_container'>
            <img className='link_logo' src='images/logos/github.svg' alt='Github Logo' title='Github Logo' />
            <i className='redirect_logo fas fa-external-link-alt' />
          </span>
        </a>
        <a
          className='link see'
          href={redirect}
          target='_blank'
          rel='noopener noreferrer'
        >
          Ver el proyecto
          <i className='fas fa-external-link-alt' />
        </a>
        <Link
          className='link about'
          to={path}
          rel='noopener noreferrer'
        >
          Sobre el Proyecto...
          <i className='fas fa-external-link-alt' />
        </Link>
      </div>
    </div>
  )
}

export default Project
