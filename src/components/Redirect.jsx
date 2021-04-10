import { Link } from 'react-router-dom'

const Redirect = () => {
  return (
    <div className='redirection'>
      <div className='redirection_item'>
        <Link className='redirection_img' to='/portfolio'><i className='fas fa-briefcase' /></Link>
        <Link className='redirection_caption' to='/portfolio'>Te invito a ver mis <span className='highlight'>proyectos</span></Link>
      </div>
      <div className='redirection_item'>
        <Link className='redirection_img' to='/about_me'><i className='fas fa-user' /></Link>
        <Link className='redirection_caption' to='/about_me'>Ó a <span className='highlight'>conocerme</span> un poco mas</Link>
      </div>
    </div>
  )
}

export default Redirect
