import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import ProjectImage from '../../components/ProjectImage'
import ProjectText from '../../components/ProjectText'

const project = {
  images: [
    {
      id: 0,
      image: '../images/projects/personal_web/home.jpg'
    }, {
      id: 1,
      image: '../images/projects/personal_web/about.jpg'
    }, {
      id: 2,
      image: '../images/projects/personal_web/potfolio.jpg'
    }
  ],
  items: [
    {
      id: 1,
      logo: '../images/logos/html.svg',
      text: 'HTML'
    }, {
      id: 2,
      logo: '../images/logos/css.svg',
      text: 'CSS'
    }, {
      id: 3,
      logo: '../images/logos/sass.svg',
      text: 'Sass'
    }, {
      id: 4,
      logo: '../images/logos/js.svg',
      text: 'JavaScript'
    }, {
      id: 5,
      logo: '../images/logos/react.svg',
      text: 'React'
    }, {
      id: 6,
      logo: '../images/logos/git.svg',
      text: 'Git'
    }, {
      id: 7,
      logo: '../images/logos/github.svg',
      text: 'Github Pages'
    }
  ],
  design: 'https://www.figma.com/file/cdmRwlCSVUAXvK5QMUmlGT/Personal-Website?node-id=0%3A1'
}
const Website = () => {
  return (
    <Layout>
      <Helmet>
        <title>Lukway - Website</title>
        <link rel='canonical' href='https://www.lukway.site/portfolio/website' />
      </Helmet>
      <Header>
        <h2 className='header_secondary'>lukway.site</h2>
        <h1 className='header_principal'>Mi Página Personal</h1>
      </Header>
      <div className='portfolio'>
        <ProjectImage images={project.images} />
        <ProjectText items={project.items} design={project.design}>
          <p>
            Este proyecto es mi página personal. Es el lugar en el cual me presento,
            hablo sobre mí y muestro mis demás proyectos.
          </p>
          <p>
            La considero mi <span className='highlight'>primera página web</span> la
            cual, a medida que fui aprendiendo nuevas conceptos de diseño y nuevas tecnologías,
            paso por muchas actualizaciones en su diseño y su estructura hasta la
            versión que ves actualmente.
          </p>
          <p>
            Pero como nunca paro de aprender, actualizo esta página cada vez que realizo
            nuevos proyectos o aprendo nuevas tecnologías para poder conseguir mi objetivo:
            ser un <span className='highlight'>Desarrollador Frontend Profesional</span>
          </p>
        </ProjectText>
      </div>
    </Layout>
  )
}

export default Website
