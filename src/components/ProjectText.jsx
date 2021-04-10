/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
const ProjectText = ({ children, items, design }) => {
  return (
    <>
      <div>
        <h2 class='caption'>Sobre el proyecto</h2>
        {children}
      </div>
      <div className='portfolio_tecno'>
        <h2 className='caption'>Tecnologías:</h2>
        <ul className='portfolio_tecno_items'>
          {
            items.map(item =>
              <li key={item.id}>
                <img
                  className='portfolio_tecno_img'
                  src={item.logo}
                  alt={item.text}
                />
                <b className='portfolio_tecno_text'>{item.text}</b>
              </li>
            )
          }
        </ul>
      </div>
      <div>
        <h2 className='caption'>Diseño:</h2>
        <p>El diseño fue hecho en <span className='highlight'>Figma</span> y puedes
          verlo <a
            className='link-with-icon'
            href={design}
            target='_blank'
            rel='noopener noreferrer'
          >aquí
            <span className='link_logo_container'>
              <img
                className='link_logo'
                src='../images/logos/figma.svg'
                alt='Figma Logo'
                title='Figma Logo'
              /><i className='redirect_logo fas fa-external-link-alt' />
            </span>
          </a>
        </p>
      </div>
    </>
  )
}

export default ProjectText
