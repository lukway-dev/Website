/* eslint-disable react/jsx-indent */
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ currentPage }) => {
  const [displayContact, showDisplayContact] = useState(
    {
      state: false,
      class: ''
    }
  )

  let isHome = false
  let isAboutMe = false
  let isPortfolio = false
  if (currentPage === 'Home') {
    isHome = true
  } else if (currentPage === 'About Me') {
    isAboutMe = true
  } else if (currentPage === 'Portfolio') {
    isPortfolio = true
  }

  const handleContact = () => {
    if (displayContact.state) {
      showDisplayContact({
        state: false,
        class: ''
      })
    } else {
      showDisplayContact({
        state: true,
        class: 'current_page-contact'
      })
    }
  }

  return (
    <nav className='nav'>
      <Link className='nav_logo' to='/'><img src='../images/lukway/Logo.svg' alt='Lukway Logo' /></Link>
      <div className='nav_button_container'>
        {
          isHome
            ? <Link className='nav_button current_page' to='/'>Inicio</Link>
            : <Link className='nav_button' to='/'>Inicio</Link>
        }
        {
          isAboutMe
            ? <Link className='nav_button current_page' to='/about_me'>Sobre Mi</Link>
            : <Link className='nav_button' to='/about_me'>Sobre Mi</Link>
        }
        {
          isPortfolio
            ? <Link className='nav_button current_page' to='/portfolio'>Portafolio</Link>
            : <Link className='nav_button' to='/portfolio'>Portafolio</Link>
        }
        <button className={'nav_button ' + displayContact.class} onClick={handleContact}>
          Contacto
          {displayContact.state
            ? <div className='contact'>
                <a
                  className='contact_link instagram'
                  href='https://www.instagram.com/lukway.dev'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fab fa-instagram' />
                </a>
                <a
                  className='contact_link email'
                  href='mailto:lukway.developer@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fas fa-envelope' />
                </a>
                <a
                  className='contact_link linkedin'
                  href='https://ar.linkedin.com/in/lukway'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                <i class='fab fa-linkedin-in' />
                </a>
                <a
                  className='contact_link curriculum'
                  href='Lucas Ojeda de Sousa.pdf'
                  download='Curriculum - Lucas Ojeda de Sousa.pdf'
                  target='_blank' rel='noopener noreferrer'
                >
                  {/* <img src='images/lukway/curriculum.svg' alt='Curriculum' /> */}
                  <i className='fas fa-file-download' />
                </a>
              </div>
            : <></>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
