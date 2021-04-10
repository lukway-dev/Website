import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import ProjectImage from '../../components/ProjectImage'
import ProjectText from '../../components/ProjectText'

const project = {
  images: [
    {
      id: 0,
      image: '../images/projects/javascript_quiz/home.png'
    }, {
      id: 1,
      image: '../images/projects/javascript_quiz/categories.png'
    }, {
      id: 2,
      image: '../images/projects/javascript_quiz/questions.png'
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
      logo: '../images/logos/graphql.svg',
      text: 'GraphQL'
    }, {
      id: 7,
      logo: '../images/logos/git.svg',
      text: 'Git'
    }, {
      id: 8,
      logo: '../images/logos/heroku.svg',
      text: 'Heroku'
    }
  ],
  design: 'https://www.figma.com/file/Lp7nUuVhHTc4U8t6PTzqWa/JavaScript-Quizz?node-id=0%3A1'
}

const JavaScriptQuiz = () => {
  return (
    <Layout>
      <Helmet>
        <title>Lukway - JavaScript Quiz</title>
        <link rel='canonical' href='https://www.lukway.site/portfolio/javascript_quiz' />
      </Helmet>
      <Header>
        <h2 className='header_secondary'>javascript--quiz.herokuapp.com</h2>
        <h1 className='header_principal'>Un Quiz de JavaScript</h1>
      </Header>
      <div className='portfolio'>
        <ProjectImage images={project.images} />
        <ProjectText items={project.items} design={project.design}>
          <p>
            Mi primer proyecto con <span className='highlight'>React</span>, simple
            pero que abarca muchos conceptos nuevos para mi.
          </p>
          <p>
            Es un quiz con <span className='highlight'>5 categorías</span> que contienen
            varias preguntas y 4 opciones de respuesta para cada una.
          </p>
          <p>
            El proyecto es una <span className='highlight'>Single-Page Application (SPA)</span> gracias
            al uso de <span className='highlight'>React Router</span> y
            usa <span className='highlight'>GraphQL</span> para solicitar datos a
            una <span className='highlight'>base de datos simulada</span> dentro de GraphQL,
            y poder mostrar las preguntas y sus respuestas correspondientes.
          </p>
        </ProjectText>
      </div>
    </Layout>
  )
}

export default JavaScriptQuiz
