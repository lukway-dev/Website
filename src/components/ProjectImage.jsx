import { useState } from 'react'

const ProjectImage = ({ images }) => {
  const [imageCurrent, setImageCurrent] = useState(0)
  // const [counter, setCounter] = useState(0)

  const handleLeftImage = () => {
    if (imageCurrent === 0) {
      setImageCurrent(images.length - 1)
    } else {
      setImageCurrent(imageCurrent - 1)
    }
  }

  const handleRightImage = () => {
    if (imageCurrent === (images.length - 1)) {
      setImageCurrent(0)
    } else {
      setImageCurrent(imageCurrent + 1)
    }
  }

  return (
    <>
      <div className='portfolio_img_container'>
        <img className='portfolio_icon' src='../images/lukway/icon.svg' alt='Lukway Icon' />
        <img className='portfolio_img' src={images[imageCurrent].image} alt='Project Images' />
        <button className='portfolio_button-left' onClick={handleLeftImage}><i className='fas fa-chevron-left' /></button>
        <button className='portfolio_button-right' onClick={handleRightImage}><i className='fas fa-chevron-right' /></button>
      </div>
      <div className='counter'>
        {
          images.map(image =>
            (imageCurrent === image.id)
              ? <span key={image.id} className='img_counter img_counter-current'><i className='fas fa-circle' /></span>
              : <span key={image.id} className='img_counter '><i className='fas fa-circle' /></span>
          )
        }
      </div>
    </>
  )
}

export default ProjectImage
