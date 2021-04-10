/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Header from '../components/Header'
import AboutText from '../components/AboutText'

const logos = {
  stack: [
    {
      id: 1,
      src: './images/logos/html.svg',
      text: 'HTML'
    },
    {
      id: 2,
      src: './images/logos/css.svg',
      text: 'CSS'
    },
    {
      id: 3,
      src: './images/logos/sass.svg',
      text: 'Sass'
    },
    {
      id: 4,
      src: './images/logos/js.svg',
      text: 'JavaScript'
    },
    {
      id: 5,
      src: './images/logos/react.svg',
      text: 'React.js'
    },
    {
      id: 6,
      src: './images/logos/git.svg',
      text: 'Git'
    },
    {
      id: 7,
      src: './images/logos/firebase.svg',
      text: 'Firebase'
    }
  ],
  learning: [
    {
      id: 1,
      src: './images/logos/webpack.svg',
      text: 'Webpack'
    },
    {
      id: 2,
      src: './images/logos/jest.svg',
      text: 'Jest'
    },
    {
      id: 3,
      src: './images/logos/graphql.svg',
      text: 'GraphQL'
    },
    {
      id: 4,
      src: './images/logos/nodejs.svg',
      text: 'Node.js'
    }
  ],
  tools: [
    {
      id: 1,
      src: './images/logos/vsc.svg',
      text: 'Visual Studio Code'
    },
    {
      id: 2,
      src: './images/logos/figma.svg',
      text: 'Figma'
    },
    {
      id: 3,
      src: './images/logos/invision.svg',
      text: 'Invision Studio'
    },
    {
      id: 4,
      src: './images/logos/illustrator.svg',
      text: 'Illustrator'
    }
  ]
}

const About_Me = () => {
  return (
    <Layout currentPage='About Me'>
      <Helmet>
        <title>Lukway - Sobre Mi</title>
        <link rel='canonical' href='https://www.lukway.site/about_me' />
      </Helmet>

      <Header>
        <h2 className='header_secondary'>Sobre</h2>
        <h1 className='header_principal'>Lukway</h1>
        <p className='header_text'>Antes que nada, <span className='highlight'>muchas gracias</span> por visitar mi página personal y espero que te sea de ayuda</p>
      </Header>

      <AboutText caption='¿Quien es Lukway?'>
        <p className='text'>
          Mi nombre es <span className='highlight'>Lucas Matias Ojeda de Sousa</span>,
          pero Lukway es el nombre que representa mi marca personal.
          Nací en la ciudad de <span className='highlight'>Mar del Plata</span>,
          Argentina, y soy un <span className='highlight'>Desarrollador Frontend Junior</span>.
        </p>
        <p className='text'>
          Hace 1 año que decidi aprender a hacer páginas web, por eso me
          converti en un desarrollador <span className='highlight'>autodidacta</span> y
          he basado mi conocimiento principalmente
          en <span className='highlight'>documentación</span> y
          cursos en plataformas de educación online
          como <a
            className='link-with-icon'
            href='https://www.coursera.org/'
            target='_blank'
            rel='noopener noreferrer'
               >
            Coursera
            <span className='link_logo_container'>
              <img
                className='link_logo'
                src='images/logos/coursera.svg'
                alt='Coursera Logo'
                title='Coursera Logo'
              />
              <i className='redirect_logo fas fa-external-link-alt' />
            </span>
          </a>
        </p>
        <p className='text'>
          Mi objetivo es ser un <span className='highlight'>Desarrollador Frontend Profesional</span>,
          por eso actualmente estoy enfocado en aprender sobre
          las <span className='highlight'>tecnologías</span> más usadas en ese ámbito.
        </p>
        <p className='text'>
          Me gusta mantenerme al tanto de la <span className='highlight'>actualidad</span> del
          mundo del desarrollo, por eso leo muchas noticias o veo videos
          informativos de plataformas de educación online
          como <a
            className='link-with-icon'
            href='https://platzi.com/'
            target='_blank'
            rel='noopener noreferrer'
               >
            Platzi
            <span className='link_logo_container'>
              <img
                className='link_logo'
                src='images/logos/platzi.svg'
                alt='Platzi Logo'
                title='Platzi Logo'
              />
              <i className='redirect_logo fas fa-external-link-alt' />
            </span>
          </a> o <a
            className='link-with-icon'
            href='https://ed.team/'
            target='_blank'
            rel='noopener noreferrer'
                 >
            EDteam
            <span className='link_logo_container'>
              <img
                className='link_logo'
                src='images/logos/edteam.svg'
                alt='EDteam Logo'
                title='EDteam Logo'
              />
              <i className='redirect_logo fas fa-external-link-alt' />
            </span>
          </a>
        </p>
        <p className='text'>
          Además, disfruto <span className='highlight'>compartir</span> mi conocimiento
          y <span className='highlight'>ayudar</span> a quien sea posible, porque creo
          que todos merecen sentir el placer de hacer <span className='highlight'>“magia”</span> al
          diseñar o programar.
        </p>
      </AboutText>

      <AboutText caption='Mi Stack' logos={logos.stack}>
        <p className='text'>Estas son las <span className='highlight'>tecnologías</span> que me gustan usar en mis proyectos web:</p>
      </AboutText>

      <AboutText caption='Lo que quiero aprender' logos={logos.learning}>
        <p className='text'>Y estas son las tecnologías que estoy <span className='highlight learning'>aprendiendo</span> o me interesa <span className='highlight'>aprender en el futuro</span>:</p>
      </AboutText>

      <AboutText caption='Mis Herramientas' logos={logos.tools}>
        <p className='text'>No puede faltar un buen <span className='highlight'>editor de código</span> y un programa para <span className='highlight'>diseñar</span></p>
      </AboutText>
    </Layout>
  )
}

export default About_Me
