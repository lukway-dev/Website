const Footer = () => {
  return (
    <footer>
      <div className='social'>
        <a
          className='social_link instagram'
          href='https://www.instagram.com/lukway.dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-instagram' />
        </a>
        <a
          className='social_link email'
          href='mailto:lukway.developer@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fas fa-envelope' />
        </a>
        <a
          className='social_link linkedin'
          href='https://ar.linkedin.com/in/lukway'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin-in' />
        </a>
      </div>
      <div className='copyright'>
        <p>Hecho con <i className='fas fa-heart' /></p>
        <span>&copy; Lukway 2021</span>
      </div>
    </footer>
  )
}

export default Footer
