const Contact = () => {
  return (
    <div className='contact_container'>
      <a class='contact_link instagram' href='https://www.instagram.com/lukway.dev' target='_blank' rel='noopener noreferrer'><i class='fab fa-instagram' /></a>
      <a class='contact_link email' href='mailto:lukway.developer@gmail.com' target='_blank' rel='noopener noreferrer'><i class='fas fa-envelope' /></a>
      <a class='contact_link linkedin' href='https://ar.linkedin.com/in/lukway' target='_blank' rel='noopener noreferrer'><i class='fab fa-linkedin-in' /></a>
      <a class='contact_link curriculum' href='Lucas Ojeda de Sousa.pdf' download='Curriculum - Lucas Ojeda de Sousa.pdf' target='_blank' rel='noopener noreferrer'><img src='images/lukway/curriculum.svg' alt='CV de Lukway' title='CV de Lukway' /></a>
    </div>
  )
}

export default Contact
