/* eslint-disable react/jsx-indent */
const TechLogos = ({ logos }) => {
  return (
    <>
      {logos
        ? <div className='logo_container'>
          {logos.map(logo =>
            <img className='logo' key={logo.id} src={logo.src} alt={logo.text} title={logo.text} />
          )}
          </div>
        : <></>}
    </>
  )
}

export default TechLogos
