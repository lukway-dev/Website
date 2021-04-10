import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import ProjectImage from '../../components/ProjectImage'
import ProjectText from '../../components/ProjectText'

const project = {
  images: [
    {
      id: 0,
      image: '../images/projects/memory_cards_game/menu(large).png'
    }, {
      id: 1,
      image: '../images/projects/memory_cards_game/login.png'
    }, {
      id: 2,
      image: '../images/projects/memory_cards_game/category.png'
    }, {
      id: 3,
      image: '../images/projects/memory_cards_game/difficulty.png'
    }, {
      id: 4,
      image: '../images/projects/memory_cards_game/game.png'
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
      logo: '../images/logos/git.svg',
      text: 'Git'
    }, {
      id: 6,
      logo: '../images/logos/firebase.svg',
      text: 'Firebase'
    }
  ],
  design: 'https://www.figma.com/file/LaObvOfVjClb4JT4I788EL/Memory-Game?node-id=0%3A1'
}

const MemoryGame = () => {
  return (
    <Layout>
      <Helmet>
        <title>Lukway - Memory Game</title>
        <link rel='canonical' href='https://www.lukway.site/portfolio/memory_game' />
      </Helmet>
      <Header>
        <h2 className='header_secondary'>memorycards-game.web.app</h2>
        <h1 className='header_principal'>Un Juego de Memoria</h1>
      </Header>
      <div className='portfolio'>
        <ProjectImage images={project.images} />
        <ProjectText items={project.items} design={project.design}>
          <p>
            Un <span className='highlight'>juego de memoria</span> con cartas donde puedes elegir
            entre <span className='highlight'>3 categorías</span> y <span className='highlight'>3 dificultades</span> diferentes,
            y dependiendo de tus errores y el tiempo que tardes en terminar el juego,
            podras posicionarte en el <span className='highlight'>Ranking <i className='fas fa-crown' /></span>.
          </p>
          <p>
            Este proyecto fue el primer reto que me propuse con <span className='highlight'>JavaScript</span> y
            la primera vez que utilice <span className='highlight'>Firebase</span> con
            su <span className='highlight'>Realtime Database</span>, una base de datos no relacional,
            y su <span className='highlight'>Sistema de Autentificación de Usuarios</span>, para
            la administración de los mismos.
          </p>
          <p>
            Estoy muy orgulloso de este proyecto, dado que fue un gran desafio para mi y aprendí mucho durante su desarrollo.
          </p>
        </ProjectText>
      </div>
    </Layout>
  )
}

export default MemoryGame
