import { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children, currentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar currentPage={currentPage} />
      <main>
        <section className='main_content'>
          {children}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Layout
