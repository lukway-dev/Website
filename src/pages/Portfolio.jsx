import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ProjectContainer from '../components/ProjectContainer'

const Portfolio = () => {
  return (
    <Layout currentPage='Portfolio'>
      <Helmet>
        <title>Lukway - Portafolio</title>
        <link rel='canonical' href='https://www.lukway.site/portfolio' />
      </Helmet>
      <Header>
        <h2 className='header_secondary'>Mi</h2>
        <h1 className='header_principal'>Portafolio</h1>
        <p className='header_text'>Como la practica hace al maestro, aqui te presento una lista de algunos de mis <span className='highlight'>proyectos personales</span></p>
      </Header>
      <ProjectContainer />
      <p className='phrase'>"La mayoría de los buenos programadores, programan no porque esperen que les paguen o para que el público los ame, sino porque la programación es divertida."<br />Linus Torwalds</p>
    </Layout>
  )
}

export default Portfolio
