import { Link } from 'react-router-dom'

const Project = ({ title, image, aboutProjectUrl, seeProjectUrl, githubUrl, figmaUrl, projectIcon }) => {
  return (
    <div className='project'>
      <div className='project_title'>{title}</div>
      <img className='project_icon' src='images/lukway/icon.svg' alt='Lukway Icon' />
      <img className='project_img' src={image} alt={title} title={title} />
      <div className='project_button_container'>
        <Link
          className='project_button-about'
          to={aboutProjectUrl}
          rel='noopener noreferrer'
        >
          <i className='fas fa-question-circle' />
        </Link>
        <a
          className='project_button-seeproject'
          href={seeProjectUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={projectIcon} alt='Project Icon' />
        </a>
        <a
          className='project_button-github'
          href={githubUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='link_logo' src='images/logos/github.svg' alt='Github Logo' title='Github Logo' />
        </a>
        <a
          className='project_button-figma'
          href={figmaUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='link_logo' src='images/logos/figma.svg' alt='Github Logo' title='Github Logo' />
        </a>
      </div>
    </div>
  )
}

export default Project
