const Contact = () => {
  return (
    <div className='contact'>
      <a
        className='contact_link instagram'
        href='https://www.instagram.com/lukway.dev'
        target='_blank'
        rel='noopener noreferrer'
        title='Instagram'
      >
        <i className='fab fa-instagram' />
      </a>
      <a
        className='contact_link email'
        href='mailto:lukway.developer@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
        title='Email'
      >
        <i className='fas fa-envelope' />
      </a>
      <a
        className='contact_link linkedin'
        href='https://ar.linkedin.com/in/lukway'
        target='_blank'
        rel='noopener noreferrer'
        title='Linkedin'
      >
        <i className='fab fa-linkedin-in' />
      </a>
      <a
        className='contact_link curriculum'
        href='./Curriculum - Lucas Ojeda de Sousa.pdf'
        download='Curriculum - Lucas Ojeda de Sousa.pdf'
        target='_blank'
        rel='noopener noreferrer'
        title='Curriculum Vitae'
      >
        {/* <p>PDF</p> */}
        <i className='fas fa-file-download' />
        {/* <img src='images/lukway/curriculum.svg' alt='CV de Lukway' title='CV de Lukway' /> */}
      </a>
    </div>
  )
}

export default Contact
