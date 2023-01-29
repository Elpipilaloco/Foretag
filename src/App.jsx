import './App.css'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function App () {
  useEffect(() => {
    const boton = document.querySelector('.boton')
    const bene = document.querySelector('.bene')

    boton.addEventListener('click', () => {
      bene.scrollIntoView({
        behavior: 'smooth'
      })
    }, { passive: true })
  })
  return (
    <>
      <Menu />
      <div className='caja d-flex justify-content-center align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 texto-titulo'>
              <h1 className='title'>Te ayudamos para que des el
                siguiente paso en tu negocio o
                marca personal
              </h1>
              <button className='boton'>Saber mas</button>
            </div>
            <div className='col-md-6'>
              <img src='assets/personas.webp' alt='Personas en la web' className='imgpersonas' />
            </div>
          </div>
        </div>
      </div>
      <div className='container bene'>
        <div className='row'>
          <h1 className='text-center titl mt-5'>Haz que tu negocio se destaque de la competencia con una pagina web</h1>
          <div className='col-md-6 lado'>
            <img src='assets/personalizado.webp' alt='Personalizado' className='icono1' />
            <h3 className='elparrafode'>Pagina web completamente personalizada</h3>
          </div>
          <div className='col-md-6 lado'>
            <img src='assets/crecimiento.webp' alt='Crecimiento' className='icono1' />
            <h3 className='elparrafode'>Precios accesibles para tu presupuesto</h3>
          </div>
          <div className='col-md-6 lado'>
            <img src='assets/tiempo.webp' alt='Buen tiempo' className='icono1' />
            <h3 className='elparrafode'>Tiempos eficientes en la creacion de tu pagina web</h3>
          </div>
          <div className='col-md-6 lado'>
            <img src='assets/orden.webp' alt='orden' className='icono1' />
            <h3 className='elparrafode'>Muestrales todo sobre tu negocio a tus clientes de manera mas facil y ordenada</h3>
          </div>
        </div>
      </div>
      <article className='losservicios'>
        <div className='h-servicios'>
          <img src='assets/wave.webp' alt='Wave' className='imgwidth1' />
          <p className='p-servicios'>-- -Nuestros servicios- --</p>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 servicios'>
              <div className='ah'>
                <Link to='/servicios' className='t-servicios d-flex'>Diseño web <img src='assets/diseño.webp' alt='Diseño' className='imgservices' /></Link>
              </div>
              <div className='ah'>
                <Link to='/servicios' className='t-servicios d-flex'>Dominios <img src='assets/dominios.webp' alt='Dominios' className='imgservices' /></Link>
              </div>
              <div className='ah'>
                <Link to='/servicios' className='t-servicios d-flex'>Hosting web <img src='assets/hosting.webp' alt='Hosting' className='imgservices' /></Link>
              </div>
              <div className='ah'>
                <Link to='/servicios' className='t-servicios d-flex'><p>Planes anuales</p> <img src='assets/anual.webp' alt='Anual' className='imgservices imgservicesanual' /></Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* Testimonial Start */}
      <Carousel />
      {/* Testimonial End */}
      <Footer />
    </>
  )
}

export default App
