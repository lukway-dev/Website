/* eslint-disable react/jsx-indent */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'

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
            ? <Contact />
            : <></>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
