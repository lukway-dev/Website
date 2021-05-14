import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import ProjectImage from '../../components/ProjectImage'
import ProjectText from '../../components/ProjectText'

const project = {
  images: [
    {
      id: 0,
      image: '../images/projects/skala_ecommerce/home.png'
    }, {
      id: 1,
      image: '../images/projects/skala_ecommerce/about.png'
    }, {
      id: 2,
      image: '../images/projects/skala_ecommerce/products.png'
    }, {
      id: 3,
      image: '../images/projects/skala_ecommerce/products_buy.png'
    }, {
      id: 4,
      image: '../images/projects/skala_ecommerce/bag.png'
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
      logo: '../images/logos/nodejs.svg',
      text: 'Node.js'
    }, {
      id: 7,
      logo: '../images/logos/express.svg',
      text: 'Express'
    }, {
      id: 8,
      logo: '../images/logos/mercadopago.svg',
      text: 'Mercado Pago API'
    }, {
      id: 9,
      logo: '../images/logos/git.svg',
      text: 'Git'
    }, {
      id: 10,
      logo: '../images/logos/github.svg',
      text: 'Github Pages'
    }
  ],
  design: 'https://www.figma.com/file/zcXf5DkPIK7DPDnYGy42xr/Skala-Ecommerce?node-id=0%3A1'
}
const SkalaEcommerce = () => {
  return (
    <Layout>
      <Helmet>
        <title>Lukway - Skala Ecommerce</title>
        <link rel='canonical' href='https://www.lukway.site/portfolio/skala_ecommerce' />
      </Helmet>
      <Header>
        <h2 className='header_secondary'>lukway-developer.github.io/Skala</h2>
        <h1 className='header_principal'>Skala Ecommerce</h1>
      </Header>
      <div className='portfolio'>
        <ProjectImage images={project.images} />
        <ProjectText items={project.items} design={project.design}>
          <p>
            Este es un <span className='highlight'>Ecommerce</span> de los productos cométicos de la marca brasilera
            de <span className='highlight'>Skala</span>.
          </p>
          <p>
            Un proyecto que me ayudo a afianzar mis conocimientos
            en <span className='highlight'>React</span> y poner en practica mis nuevos conocimientos
            en <span className='highlight'>Node.js</span> los cuales use para conectar la API
            de <span className='highlight'>Mercado Pago</span> con este proyecto
          </p>
        </ProjectText>
      </div>
    </Layout>
  )
}

export default SkalaEcommerce
