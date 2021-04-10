/* eslint-disable camelcase */
import TechLogos from '../components/TechLogos'

const AboutText = ({ children, caption, logos }) => {
  return (
    <article>
      <h2 className='caption'>{caption}</h2>
      {children}
      <TechLogos logos={logos} />
    </article>
  )
}

export default AboutText
