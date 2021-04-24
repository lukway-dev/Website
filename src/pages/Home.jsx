import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Header from '../components/Header'
import CallToAction from '../components/CallToAction'

const logos = [
  {
    id: 0,
    image: '../images/logos/html.svg',
    text: 'HTML'
  }, {
    id: 1,
    image: '../images/logos/css.svg',
    text: 'CSS'
  }, {
    id: 2,
    image: '../images/logos/sass.svg',
    text: 'Sass'
  }, {
    id: 3,
    image: '../images/logos/js.svg',
    text: 'JavaScript'
  }, {
    id: 4,
    image: '../images/logos/react.svg',
    text: 'React'
  }, {
    id: 5,
    image: '../images/logos/git.svg',
    text: 'Git'
  }, {
    id: 6,
    image: '../images/logos/github.svg',
    text: 'Github'
  }, {
    id: 7,
    image: '../images/logos/firebase.svg',
    text: 'Firebase'
  }, {
    id: 8,
    image: './images/logos/figma.svg',
    text: 'Figma'
  }, {
    id: 9,
    image: './images/logos/illustrator.svg',
    text: 'Illustrator'
  }
]

const Home = () => {
  return (
    <Layout currentPage='Home'>
      <Helmet>
        <title>Lukway - Frontend Developer</title>
        <link rel='canonical' href='https://www.lukway.site/' />
      </Helmet>

      <Header>
        <h2 className='header_secondary'>Lucas Ojeda de Sousa</h2>
        <h1 className='header_principal'>Frontend Developer</h1>
        <p className='header_text'>Adoro la perfecta combinación de <span className='highlight'>café</span>, <span className='highlight'>música</span>, <span className='highlight'>diseñar</span> y <span className='highlight'>programar</span>.</p>
      </Header>

      <div className='home_logo_container'>
        {
          logos.map(logo =>
            <img className='logo' key={logo.id} src={logo.image} alt={logo.text} title={logo.text} />
          )
        }
      </div>

      <CallToAction />
    </Layout>
  )
}

export default Home
